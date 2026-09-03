import { useEffect, useRef, useState } from "react";
import { CliLine, Json, jsonTokens } from "./highlight";
import { scenarios, type Scenario } from "./scenarios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function useTypewriter(scenario: Scenario | null) {
  const [chars, setChars] = useState(0);
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current);
    if (!scenario) return;

    const full = JSON.stringify(scenario.res, null, 2);
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setChars(full.length);
      setDone(true);
      return;
    }

    setChars(0);
    setDone(false);
    let pos = 0;
    const tick = () => {
      pos = Math.min(pos + Math.floor(Math.random() * 6) + 4, full.length);
      setChars(pos);
      if (pos < full.length) {
        timer.current = window.setTimeout(tick, 8);
      } else {
        setDone(true);
      }
    };
    timer.current = window.setTimeout(tick, 60);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [scenario]);

  return { chars, done };
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-body text-[11px] font-medium uppercase tracking-[0.1em] text-[hsl(var(--term-t3))] mb-2">
      {children}
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="font-mono text-[13px] leading-[1.7] whitespace-pre-wrap break-words border border-[hsl(var(--term-border))] bg-[hsl(var(--term-block))] px-4 py-3 overflow-x-auto">
      {children}
    </pre>
  );
}

export function McCliDemo() {
  const [activeId, setActiveId] = useState<string>(scenarios[0].id);
  const active = scenarios.find((s) => s.id === activeId) ?? scenarios[0];
  const { chars, done } = useTypewriter(active);

  const fullJson = JSON.stringify(active.res, null, 2);

  return (
    <div className="mc-terminal">
      <Tabs
        value={activeId}
        onValueChange={(value) => setActiveId(value)}
        className="block"
      >
        <div className="border border-[hsl(var(--term-border))] bg-[hsl(var(--term-bg))] h-[520px] flex flex-col min-h-0">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[hsl(var(--term-border))] shrink-0">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="font-mono text-xs text-[hsl(var(--term-t3))] ml-1.5 truncate">
              montecarlo — {active.title.toLowerCase()}
            </span>
          </div>

          <div className="p-5 md:p-6 flex-1 min-h-0 overflow-y-auto min-w-0 text-[hsl(var(--term-t1))]">
            <ScenarioContent scenario={active} chars={chars} done={done} fullJson={fullJson} />
          </div>
        </div>

        <TabsList className="mt-0 w-full justify-start rounded-none border-x border-b border-[hsl(var(--term-border))] bg-[hsl(var(--term-nav))] p-0 h-auto gap-0">
          {scenarios.map((s, idx) => (
            <TabsTrigger
              key={s.id}
              value={s.id}
              className="flex-1 rounded-none px-3 py-3 font-mono text-[13px] text-[hsl(var(--term-t2))] border-r border-[hsl(var(--term-border))] last:border-r-0 data-[state=active]:bg-[hsl(var(--term-active))] data-[state=active]:text-[hsl(var(--term-t1))] data-[state=active]:border-t data-[state=active]:border-t-[hsl(var(--term-accent))] data-[state=active]:shadow-none hover:bg-[hsl(var(--term-hover))] hover:text-[hsl(var(--term-t1))] transition-colors duration-200"
            >
              {s.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

function ScenarioContent({
  scenario,
  chars,
  done,
  fullJson,
}: {
  scenario: Scenario;
  chars: number;
  done: boolean;
  fullJson: string;
}) {
  return (
    <>
      <div className="mb-5">
        <BlockLabel>CLI command</BlockLabel>
        <Code>
          {scenario.cmd.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && "\n"}
              <CliLine line={i === 0 ? line : `    ${line.trim()}`} />
            </span>
          ))}
        </Code>
      </div>

      <div className="mb-5">
        <BlockLabel>HTTP request</BlockLabel>
        <Code>
          <span className={`tk-method-${scenario.http.method.toLowerCase()}`}>
            {scenario.http.method}
          </span>{" "}
          <span className="tk-path">{scenario.http.path}</span>{" "}
          <span className="tk-comment">HTTP/1.1</span>
          {"\n"}
          <span className="tk-header">Host:</span>{" "}
          <span className="tk-value">api.getmontecarlo.com</span>
          {scenario.http.headers.map(([name, value]) => (
            <span key={name}>
              {"\n"}
              <span className="tk-header">{name}:</span>{" "}
              <span className="tk-value">{value}</span>
            </span>
          ))}
          {scenario.body && (
            <>
              {"\n\n"}
              <Json value={scenario.body} />
            </>
          )}
        </Code>
      </div>

      <div>
        <BlockLabel>Response</BlockLabel>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[12px] font-medium px-2 py-0.5 text-[hsl(var(--term-get))] bg-[hsl(var(--term-get)/0.12)]">
            200 OK
          </span>
          <span className="font-mono text-[13px] text-[hsl(var(--term-t3))]">
            application/json
          </span>
        </div>
        <Code>
          {done ? (
            <>{renderJson(scenario)}</>
          ) : (
            <>
              {fullJson.slice(0, chars)}
              <span className="term-cursor" />
            </>
          )}
        </Code>
      </div>
    </>
  );
}

function renderJson(scenario: Scenario) {
  return jsonTokens(scenario.res).map((t, i) => (
    <span key={i} className={t.cls}>
      {t.text}
    </span>
  ));
}
