import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactElement } from "react";

import { PageAluminum, PageCover, PageGlass } from "@/components/catalog/pages-a";
import { PageClosing, PageFinishes, PageSolutions } from "@/components/catalog/pages-b";
import { PageCompany, PagePortfolioCases } from "@/components/catalog/pages-merged";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vianna Vidros e Esquadrias — Catálogo Institucional" },
      {
        name: "description",
        content:
          "Catálogo institucional da Vianna Vidros e Esquadrias: esquadrias de alumínio, vidros, acabamentos e projetos. Soluções que valorizam cada projeto.",
      },
      { property: "og:title", content: "Vianna Vidros e Esquadrias — Catálogo Institucional" },
      {
        property: "og:description",
        content:
          "Vidro e alumínio para projetos residenciais, comerciais e corporativos. Há mais de 15 anos em Santa Rosa / RS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalog,
});

const TOTAL = 8;

type Mode = "pages" | "front" | "back" | "closed";

const MODES: { id: Mode; label: string }[] = [
  { id: "pages", label: "Páginas" },
  { id: "front", label: "Aberto — Frente" },
  { id: "back", label: "Aberto — Verso" },
  { id: "closed", label: "Fechado" },
];

const front = [PageCover, PageCompany, PageAluminum, PageGlass];
const back = [PageFinishes, PageSolutions, PagePortfolioCases, PageClosing];

function Spread({ pages }: { pages: (() => ReactElement)[] }) {
  return (
    <div
      className="relative flex bg-paper shadow-[0_24px_80px_-32px_rgba(16,24,40,0.5)]"
      style={{ width: "680mm" }}
    >
      {pages.map((P, i) => (
        <div key={i} className="relative">
          <P />
          {i > 0 && (
            <span
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[6mm]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(16,24,40,0.16), rgba(16,24,40,0) 55%, rgba(255,255,255,0.14))",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ClosedFolder({ tilt }: { tilt: number }) {
  return (
    <div className="flex flex-col items-center gap-[14mm]">
      <div style={{ perspective: "2200px" }}>
        <div
          className="relative flex"
          style={{ transformStyle: "preserve-3d", transform: `rotateY(${tilt}deg) rotateX(4deg)` }}
        >
          <div
            className="relative shadow-[0_40px_90px_-40px_rgba(16,24,40,0.65)]"
            style={{ transform: "rotateY(6deg)", transformOrigin: "right center" }}
          >
            <PageClosing />
            <span
              className="pointer-events-none absolute inset-0 z-20"
              style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.22), rgba(0,0,0,0))" }}
            />
            <span className="caption absolute -bottom-[9mm] left-0 text-[6pt]">Contracapa · 08</span>
          </div>

          <div
            className="relative shadow-[0_40px_90px_-40px_rgba(16,24,40,0.65)]"
            style={{ transform: "rotateY(-6deg)", transformOrigin: "left center" }}
          >
            <PageCover />
            <span
              className="pointer-events-none absolute inset-0 z-20"
              style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.18), rgba(0,0,0,0))" }}
            />
            {/* espessura sutil das dobras */}
            <span
              className="pointer-events-none absolute inset-y-0 right-[-2.4mm] z-20 w-[2.4mm]"
              style={{ background: "linear-gradient(90deg, #d8dbe0, #a9aeb6)" }}
            />
            <span className="caption absolute -bottom-[9mm] right-0 text-[6pt]">Capa · 01</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[2mm]">
        {Array.from({ length: TOTAL }, (_, i) => i + 1).map((n) => (
          <span
            key={n}
            className="font-display flex h-[10mm] w-[7mm] items-center justify-center border text-[7pt] tracking-[0.16em]"
            style={{
              color: "var(--navy)",
              borderColor: "rgba(16,24,40,0.2)",
              backgroundColor: n === 1 || n === TOTAL ? "var(--paper)" : "transparent",
            }}
          >
            {String(n).padStart(2, "0")}
          </span>
        ))}
        <span className="caption ml-[4mm] text-[6pt]">Sequência dos painéis · 4 + 4 dobras</span>
      </div>
    </div>
  );
}

function Catalog() {
  const [mode, setMode] = useState<Mode>("pages");
  const [current, setCurrent] = useState(1);
  const [zoom, setZoom] = useState(0.3);
  const [tilt, setTilt] = useState(-18);

  const goTo = useCallback((n: number) => {
    const target = Math.min(Math.max(n, 1), TOTAL);
    document
      .getElementById(`pagina-${target}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrent(target);
  }, []);

  useEffect(() => {
    if (mode !== "pages") return;
    const sheets = Array.from(document.querySelectorAll("[id^='pagina-']"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(Number(visible.target.id.replace("pagina-", "")));
      },
      { threshold: [0.35, 0.6] },
    );
    sheets.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [mode]);

  useEffect(() => {
    if (mode !== "pages") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo, mode]);

  return (
    <main className="min-h-screen py-[14mm]">
      <h1 className="sr-only">Catálogo institucional — Vianna Vidros e Esquadrias</h1>

      <nav
        className="no-print mx-auto mb-[12mm] flex w-fit flex-wrap items-center justify-center gap-4 bg-paper/95 px-5 py-3 shadow-[0_10px_40px_-16px_rgba(16,24,40,0.5)]"
        aria-label="Modo de visualização"
      >
        <span className="caption text-[6pt]">Visualizar folder</span>
        <span className="h-4 w-[1px]" style={{ backgroundColor: "rgba(16,24,40,0.15)" }} />
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            aria-pressed={mode === m.id}
            className="caption transition-opacity hover:opacity-60"
            style={
              mode === m.id
                ? { color: "var(--navy)", borderBottom: "1px solid var(--azure)" }
                : undefined
            }
          >
            {m.label}
          </button>
        ))}
      </nav>

      {mode === "pages" && (
        <div className="catalog-scale mx-auto flex w-fit flex-col items-center gap-[12mm]">
          <PageCover />
          <PageCompany />
          <PageAluminum />
          <PageGlass />
          <PageFinishes />
          <PageSolutions />
          <PagePortfolioCases />
          <PageClosing />
        </div>
      )}

      {(mode === "front" || mode === "back") && (
        <div className="no-print overflow-auto px-[10mm] pb-[30mm]">
          <div className="mx-auto w-fit" style={{ zoom }}>
            <Spread pages={mode === "front" ? front : back} />
          </div>
        </div>
      )}

      {mode === "closed" && (
        <div className="no-print overflow-auto px-[10mm] pb-[30mm]">
          <div className="mx-auto w-fit" style={{ zoom: 0.42 }}>
            <ClosedFolder tilt={tilt} />
          </div>
        </div>
      )}

      <nav
        className="no-print fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-5 bg-paper/95 px-5 py-3 shadow-[0_10px_40px_-16px_rgba(16,24,40,0.5)] backdrop-blur"
        aria-label="Controles"
      >
        {mode === "pages" && (
          <>
            <button
              onClick={() => goTo(current - 1)}
              className="caption transition-opacity hover:opacity-60 disabled:opacity-25"
              disabled={current === 1}
            >
              Anterior
            </button>
            <span
              className="font-display text-[11px] tracking-[0.25em]"
              style={{ color: "var(--navy)" }}
            >
              {String(current).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
            </span>
            <button
              onClick={() => goTo(current + 1)}
              className="caption transition-opacity hover:opacity-60 disabled:opacity-25"
              disabled={current === TOTAL}
            >
              Próxima
            </button>
            <span className="h-4 w-[1px]" style={{ backgroundColor: "rgba(16,24,40,0.15)" }} />
            <button
              onClick={() => window.print()}
              className="caption transition-opacity hover:opacity-60"
            >
              Exportar PDF
            </button>
          </>
        )}

        {(mode === "front" || mode === "back") && (
          <>
            <span className="caption text-[6pt]">Zoom</span>
            <input
              type="range"
              min={0.18}
              max={0.9}
              step={0.02}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              aria-label="Zoom da visualização aberta"
              className="w-[160px] accent-navy"
            />
            <span
              className="font-display text-[11px] tracking-[0.2em]"
              style={{ color: "var(--navy)" }}
            >
              {Math.round(zoom * 100)}%
            </span>
          </>
        )}

        {mode === "closed" && (
          <>
            <span className="caption text-[6pt]">Perspectiva</span>
            <input
              type="range"
              min={-40}
              max={40}
              step={1}
              value={tilt}
              onChange={(e) => setTilt(Number(e.target.value))}
              aria-label="Rotação do folder fechado"
              className="w-[160px] accent-navy"
            />
            <span
              className="font-display text-[11px] tracking-[0.2em]"
              style={{ color: "var(--navy)" }}
            >
              {tilt}°
            </span>
          </>
        )}
      </nav>
    </main>
  );
}
