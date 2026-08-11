import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import {
  PageAluminum,
  PageCover,
  PageGlass,
  PagePositioning,
  PagePresentation,
} from "@/components/catalog/pages-a";
import {
  PageClosing,
  PageFinishes,
  PagePortfolio,
  PageSolutions,
} from "@/components/catalog/pages-b";

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

const TOTAL = 9;

function Catalog() {
  const [current, setCurrent] = useState(1);

  const goTo = useCallback((n: number) => {
    const target = Math.min(Math.max(n, 1), TOTAL);
    document.getElementById(`pagina-${target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrent(target);
  }, []);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  return (
    <main className="min-h-screen py-[14mm]">
      <h1 className="sr-only">Catálogo institucional — Vianna Vidros e Esquadrias</h1>

      <div className="catalog-scale mx-auto flex w-fit flex-col items-center gap-[12mm]">
        <PageCover />
        <PagePresentation />
        <PagePositioning />
        <PageAluminum />
        <PageGlass />
        <PageFinishes />
        <PageSolutions />
        <PagePortfolio />
        <PageClosing />
      </div>

      <nav
        className="no-print fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-5 bg-paper/95 px-5 py-3 shadow-[0_10px_40px_-16px_rgba(16,24,40,0.5)] backdrop-blur"
        aria-label="Navegação entre páginas"
      >
        <button
          onClick={() => goTo(current - 1)}
          className="caption transition-opacity hover:opacity-60 disabled:opacity-25"
          disabled={current === 1}
        >
          Anterior
        </button>
        <span className="font-display text-[11px] tracking-[0.25em]" style={{ color: "var(--navy)" }}>
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
        <button onClick={() => window.print()} className="caption transition-opacity hover:opacity-60">
          Exportar PDF
        </button>
      </nav>
    </main>
  );
}
