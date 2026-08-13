import { Sheet } from "./Sheet";

import caseResort from "@/assets/case-resort.jpg";
import caseMansion from "@/assets/case-mansion.jpg";
import project1 from "@/assets/project-1.jpg";
import corporate from "@/assets/corporate.jpg";

const cases = [
  {
    src: caseResort,
    alt: "Resort com fachada iluminada ao anoitecer, grandes panos de vidro e estrutura em madeira",
    title: "Wyndham Gramado Termas Resort & Spa",
    credit: "Hotelaria · Grandes vãos · Vidro laminado",
  },
  {
    src: project1,
    alt: "Residência contemporânea com terraço em vidro e guarda-corpo estrutural",
    title: "Residência Horizonte",
    credit: "Projeto: Scherer Arquitetura · Esquadrias Linha Suprema",
  },
  {
    src: caseMansion,
    alt: "Mansão de fachada clássica em pedra branca com esquadrias escuras e vidros amplos",
    title: "Villa Palmeiras",
    credit: "Projeto: Magnus Monteiro · Linha Gold · Preto fosco",
  },
  {
    src: corporate,
    alt: "Fachada corporativa em vidro e alumínio",
    title: "Edifício Vianna Corporate",
    credit: "Fachada em pele de vidro · Vidro refletivo",
  },
];

export function PageCases() {
  return (
    <Sheet index={9} label="Cases de obras" bleed>
      <div className="absolute inset-x-[8mm] top-[9mm] flex items-baseline justify-between">
        <span className="eyebrow text-[6.6pt]" style={{ color: "var(--azure)" }}>
          Cases de Obras
        </span>
        <span className="caption text-[5.8pt]">Obras executadas · Vidro &amp; Alumínio</span>
      </div>

      <div className="absolute inset-x-[8mm] top-[18mm] bottom-[8mm] flex flex-col gap-[2mm]">
        {cases.map((c) => (
          <figure key={c.title} className="relative flex-1 overflow-hidden">
            <img
              src={c.src}
              alt={c.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[16mm]"
              style={{ background: "linear-gradient(180deg, rgba(11,18,31,0), rgba(11,18,31,0.72))" }}
            />
            <figcaption className="absolute inset-x-[4mm] bottom-[3mm]">
              <span
                className="font-display block text-[8.4pt] font-medium uppercase tracking-[0.06em]"
                style={{ color: "var(--paper)" }}
              >
                {c.title}
              </span>
              <span
                className="caption mt-[0.8mm] block text-[5.2pt]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {c.credit}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <span
        className="absolute bottom-[3mm] right-[8mm] font-display text-[8pt] font-medium tracking-[0.2em]"
        style={{ color: "var(--navy)" }}
      >
        09
      </span>
    </Sheet>
  );
}
