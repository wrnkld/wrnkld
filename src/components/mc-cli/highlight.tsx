import { ReactNode } from "react";

type Token = { text: string; cls: string };

/** Tokenize pretty-printed JSON into keys, strings, numbers, booleans, punctuation. */
export function jsonTokens(value: unknown): Token[] {
  const src = JSON.stringify(value, null, 2);
  const out: Token[] = [];
  let i = 0;
  const push = (text: string, cls: string) => {
    const last = out[out.length - 1];
    if (last && last.cls === cls) last.text += text;
    else out.push({ text, cls });
  };

  while (i < src.length) {
    const ch = src[i];
    if (ch === '"') {
      let str = '"';
      i++;
      while (i < src.length) {
        const c = src[i];
        if (c === "\\") {
          str += c + (src[i + 1] ?? "");
          i += 2;
          continue;
        }
        str += c;
        i++;
        if (c === '"') break;
      }
      let j = i;
      while (j < src.length && (src[j] === " " || src[j] === "\t")) j++;
      push(str, src[j] === ":" ? "tk-key" : "tk-str");
    } else if (src.startsWith("true", i) || src.startsWith("false", i)) {
      const lit = src.startsWith("true", i) ? "true" : "false";
      push(lit, "tk-bool");
      i += lit.length;
    } else if (src.startsWith("null", i)) {
      push("null", "tk-null");
      i += 4;
    } else if (ch === "-" || (ch >= "0" && ch <= "9")) {
      let n = "";
      while (i < src.length && /[-+\deE.]/.test(src[i])) n += src[i++];
      push(n, "tk-num");
    } else if ("{}[],:".includes(ch)) {
      push(ch, "tk-punc");
      i++;
    } else {
      push(ch, "tk-plain");
      i++;
    }
  }
  return out;
}

export function renderTokens(tokens: Token[]): ReactNode {
  return tokens.map((t, idx) => (
    <span key={idx} className={t.cls}>
      {t.text}
    </span>
  ));
}

export function Json({ value }: { value: unknown }) {
  return <>{renderTokens(jsonTokens(value))}</>;
}

/** Highlight a single CLI line: prompt, flags, quoted values, trailing comment. */
export function CliLine({ line }: { line: string }) {
  const parts: Token[] = [];
  let rest = line;

  if (rest.startsWith("$ ")) {
    parts.push({ text: "$ ", cls: "tk-prompt" });
    rest = rest.slice(2);
  }

  let comment = "";
  const hash = rest.indexOf("#");
  if (hash !== -1) {
    comment = rest.slice(hash);
    rest = rest.slice(0, hash);
  }

  const pattern = /(--[\w-]+)|("[^"]*")/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(rest)) !== null) {
    if (m.index > last) parts.push({ text: rest.slice(last, m.index), cls: "tk-cmd" });
    parts.push({ text: m[0], cls: m[1] ? "tk-flag" : "tk-value" });
    last = m.index + m[0].length;
  }
  if (last < rest.length) parts.push({ text: rest.slice(last), cls: "tk-cmd" });
  if (comment) parts.push({ text: comment, cls: "tk-comment" });

  return <>{renderTokens(parts)}</>;
}
