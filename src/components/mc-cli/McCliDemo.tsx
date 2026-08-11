import { useEffect, useRef, useState } from "react";
import { CliLine, Json, jsonTokens } from "./highlight";
import { groups, scenarios, type Scenario } from "./scenarios";

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
    <div className="font-body text-[10px] font-medium uppercase tracking-[0.12em] text-[hsl(var(--term-t3))] mb-2">
      {children}
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="font-mono text-[12.5px] leading-[1.8] whitespace-pre-wrap break-words border border-[hsl(var(--term-border))] bg-[hsl(var(--term-block))] px-4 py-3 overflow-x-auto">
      {children}
    </pre>
  );
}

export function McCliDemo() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = scenarios.find((s) => s.id === activeId) ?? null;
  const { chars, done } = useTypewriter(active);

  const fullJson = active ? JSON.stringify(active.res, null, 2) : "";

  return (
    <div className="mc-terminal border border-border/70 bg-background grid grid-cols-1 md:grid-cols-[228px_1fr] h-[488px] md:h-[488px]">
      {/* Scenario list */}
      <nav
        aria-label="CLI scenarios"
        className="border-b md:border-b-0 md:border-r border-border/70 bg-[hsl(var(--surface))] flex flex-col min-w-0 min-h-0 shrink-0"
      >
        <div className="hidden md:flex items-center px-4 py-2.5 border-b border-border/70">
          <span className="font-mono text-[11px] text-muted-foreground truncate">
            CLI
          </span>
        </div>

        {/* Mobile: full-width dropdown */}
        <div className="md:hidden p-3">
          <label className="sr-only" htmlFor="mc-cli-scenario">
            CLI scenario
          </label>
          <select
            id="mc-cli-scenario"
            value={activeId ?? ""}
            onChange={(e) => setActiveId(e.target.value || null)}
            className="w-full border border-border/70 bg-background px-3 py-2 font-body text-xs text-foreground"
          >
            <option value="">CLI — pick a scenario</option>
            {groups.map((group) => (
              <optgroup key={group} label={group}>
                {scenarios
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="hidden md:flex md:flex-col py-3 md:overflow-y-auto md:flex-1 md:min-h-0">
          {groups.map((group) => (
            <div key={group} className="flex flex-col items-stretch shrink-0">
              <div className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground px-3 pt-3 pb-1">
                {group}
              </div>
              {scenarios
                .filter((s) => s.group === group)
                .map((s) => {
                  const isActive = s.id === activeId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveId(s.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex items-start gap-2 text-left px-3 py-1.5 border-l-2 transition-colors duration-200 ${
                        isActive
                          ? "border-l-foreground surface-tint"
                          : "border-l-transparent surface-tint-hover"
                      }`}
                    >
                      <span
                        className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200 ${
                          isActive
                            ? "bg-foreground"
                            : "bg-muted-foreground/50 group-hover:bg-foreground"
                        }`}
                      />
                      <span
                          className={`font-body text-xs leading-snug ${
                            isActive ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {s.name}
                        </span>
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
      </nav>

      {/* Terminal */}
      <div className="flex flex-col min-h-0 bg-[hsl(var(--term-body))] text-[hsl(var(--term-t1))] min-w-0">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[hsl(var(--term-border))]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono text-[11px] text-[hsl(var(--term-t3))] ml-1.5 truncate">
            {active ? `montecarlo — ${active.title.toLowerCase()}` : "montecarlo"}
          </span>
        </div>

        <div className="p-5 md:p-6 flex-1 min-h-[400px] md:min-h-0 overflow-y-auto min-w-0">
          {!active ? (
            <div className="flex h-full flex-col items-center justify-center gap-1 text-center font-body text-xs text-[hsl(var(--term-t3))]">
              <span className="text-lg md:hidden">↑</span>
              <span className="hidden text-lg md:inline">←</span>
              <span className="md:hidden">Pick a scenario above</span>
              <span className="hidden md:inline">Pick a scenario to the left</span>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <BlockLabel>CLI command</BlockLabel>
                <Code>
                  {active.cmd.split("\n").map((line, i) => (
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
                  <span className={`tk-method-${active.http.method.toLowerCase()}`}>
                    {active.http.method}
                  </span>{" "}
                  <span className="tk-path">{active.http.path}</span>{" "}
                  <span className="tk-comment">HTTP/1.1</span>
                  {"\n"}
                  <span className="tk-header">Host:</span>{" "}
                  <span className="tk-value">api.getmontecarlo.com</span>
                  {active.http.headers.map(([name, value]) => (
                    <span key={name}>
                      {"\n"}
                      <span className="tk-header">{name}:</span>{" "}
                      <span className="tk-value">{value}</span>
                    </span>
                  ))}
                  {active.body && (
                    <>
                      {"\n\n"}
                      <Json value={active.body} />
                    </>
                  )}
                </Code>
              </div>

              <div>
                <BlockLabel>Response</BlockLabel>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10.5px] font-medium px-2 py-0.5 text-[hsl(var(--term-get))] bg-[hsl(var(--term-get)/0.12)]">
                    200 OK
                  </span>
                  <span className="font-mono text-[11px] text-[hsl(var(--term-t3))]">
                    application/json
                  </span>
                </div>
                <Code>
                  {done ? (
                    <>{renderJson(active)}</>
                  ) : (
                    <>
                      {fullJson.slice(0, chars)}
                      <span className="term-cursor" />
                    </>
                  )}
                </Code>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function renderJson(scenario: Scenario) {
  return jsonTokens(scenario.res).map((t, i) => (
    <span key={i} className={t.cls}>
      {t.text}
    </span>
  ));
}
