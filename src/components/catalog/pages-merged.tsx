import { Figure, Sheet } from "./Sheet";

import interior1 from "@/assets/interior-1.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import caseResort from "@/assets/case-resort.jpg";
import caseMansion from "@/assets/case-mansion.jpg";
import corporate from "@/assets/corporate.jpg";

/* ---------------- 02 — EMPRESA + DIFERENCIAIS ---------------- */
const concepts = [
  {
    n: "01",
    t: "Qualidade",
    d: "Materiais selecionados e execução conferida etapa por etapa, do perfil ao acabamento final.",
  },
  {
    n: "02",
    t: "Precisão",
    d: "Medição técnica e produção sob medida para que cada peça encontre exatamente o seu vão.",
  },
  {
    n: "03",
    t: "Prazo",
    d: "Planejamento de produção e instalação alinhado ao cronograma da obra.",
  },
  {
    n: "04",
    t: "Experiência",
    d: "Mais de uma década e meia interpretando projetos de arquitetura e transformando-os em obra.",
  },
];

const process = [
  ["01", "Conversa"],
  ["02", "Projeto e orçamento"],
  ["03", "Medição"],
  ["04", "Produção"],
  ["05", "Instalação"],
  ["06", "Entrega"],
];

export function PageCompany() {
  return (
    <Sheet index={2} label="A empresa e o posicionamento">
      <Figure
        src={interior1}
        alt="Sala minimalista com grandes portas de correr em alumínio e vidro"
        className="absolute right-0 top-0 h-[96mm] w-[92mm]"
      />

      <div className="absolute left-[13mm] top-[24mm] w-[58mm]">
        <span className="eyebrow" style={{ color: "var(--azure)" }}>
          A empresa
        </span>
        <h2 className="display-lg mt-[7mm] text-[19pt]">
          Experiência
          <br />
          que se
          <br />
          transforma em
          <br />
          qualidade.
        </h2>
        <p
          className="font-serif mt-[7mm] text-[13pt] italic leading-[1.3]"
          style={{ color: "var(--navy)" }}
        >
          Vidro e alumínio medidos, cortados e instalados para um projeto só.
        </p>
      </div>

      <div className="absolute inset-x-[13mm] top-[108mm]">
        <div className="hairline mb-[7mm]" />
        <div className="flex items-start gap-[10mm]">
          <div className="w-[86mm]">
            <p className="body-text text-[9.4pt]">
              Há mais de 15 anos, a Vianna Vidros e Esquadrias atua no desenvolvimento de soluções em
              vidro e alumínio para projetos residenciais, comerciais e corporativos.
            </p>
            <p className="body-text mt-[4mm] text-[9.4pt]">
              Com sede em Santa Rosa, atendemos toda a região e, conforme a necessidade de cada
              projeto, também atuamos em outras regiões do Brasil e fora do país.
            </p>
          </div>
          <div className="w-[48mm]">
            <span
              className="font-display block leading-[0.8]"
              style={{
                fontSize: "42pt",
                fontWeight: 600,
                color: "var(--navy)",
                letterSpacing: "-0.04em",
              }}
            >
              +15
            </span>
            <span className="eyebrow mt-[4mm] block" style={{ lineHeight: 1.8 }}>
              Anos de
              <br />
              experiência
            </span>
            <div className="hairline my-[5mm]" />
            <span className="caption block text-[5.8pt] leading-[1.6]">
              Santa Rosa · Rio Grande do Sul · Brasil
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-[13mm] top-[146mm]">
        <span className="eyebrow" style={{ color: "var(--navy)" }}>
          Posicionamento
        </span>
        <h3 className="display-md mt-[5mm] text-[14pt]">
          Mais do que produtos. Entregamos soluções.
        </h3>

        <div className="mt-[9mm] grid grid-cols-2 gap-x-[12mm] gap-y-[8mm]">
          {concepts.map((c) => (
            <div key={c.n}>
              <div className="hairline mb-[4mm]" />
              <span
                className="font-display text-[7.6pt] tracking-[0.24em]"
                style={{ color: "var(--azure)" }}
              >
                {c.n}
              </span>
              <h4 className="display-md mt-[3mm] text-[12pt]">{c.t}</h4>
              <p className="body-text mt-[2.5mm] text-[8.4pt] leading-[1.6]">{c.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-[13mm] bottom-[18mm]">
        <div className="hairline mb-[5mm]" />
        <span className="eyebrow text-[6.6pt]" style={{ color: "var(--navy)" }}>
          Do primeiro contato à instalação
        </span>
        <div className="mt-[5mm] flex justify-between">
          {process.map(([n, t]) => (
            <div key={n} className="w-[21mm]">
              <span
                className="font-display block text-[12pt] font-medium leading-none"
                style={{ color: "var(--navy)" }}
              >
                {n}
              </span>
              <span className="caption mt-[2.5mm] block text-[5.6pt] leading-[1.5]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

/* ---------------- 07 — PORTFÓLIO + CASES ---------------- */
const projects = [
  { nome: "Casa Pátio", local: "Santa Rosa · RS", sol: "Grandes vãos · Alumínio preto" },
  {
    nome: "Residência Horizonte",
    local: "Região Noroeste · RS",
    sol: "Portas de correr · Vidro laminado",
  },
  { nome: "Mirante", local: "Litoral · SC", sol: "Fachada · Vidro temperado" },
];

const cases = [
  {
    src: caseResort,
    alt: "Resort com fachada iluminada ao anoitecer, grandes panos de vidro e estrutura em madeira",
    title: "Wyndham Gramado Termas Resort & Spa",
    credit: "Hotelaria · Grandes vãos · Vidro laminado",
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
  {
    src: project3,
    alt: "Grande vão aberto integrando sala e terraço com piscina",
    title: "Grande vão · Terraço",
    credit: "Portas de correr · Vidro temperado",
  },
];

function CaseFigure({
  src,
  alt,
  title,
  credit,
  className = "",
}: {
  src: string;
  alt: string;
  title: string;
  credit: string;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      <div
        className="absolute inset-x-0 bottom-0 h-[14mm]"
        style={{ background: "linear-gradient(180deg, rgba(11,18,31,0), rgba(11,18,31,0.75))" }}
      />
      <figcaption className="absolute inset-x-[3.5mm] bottom-[2.6mm]">
        <span
          className="font-display block text-[7.6pt] font-medium uppercase leading-[1.2] tracking-[0.06em]"
          style={{ color: "var(--paper)" }}
        >
          {title}
        </span>
        <span
          className="caption mt-[0.8mm] block text-[5pt] leading-[1.35]"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          {credit}
        </span>
      </figcaption>
    </figure>
  );
}

export function PagePortfolioCases() {
  return (
    <Sheet index={7} label="Portfólio e cases de obras">
      <div className="absolute inset-x-[13mm] top-[18mm] flex items-end justify-between">
        <div>
          <span className="eyebrow" style={{ color: "var(--azure)" }}>
            Portfólio
          </span>
          <h2 className="display-lg mt-[5mm] text-[17pt]">Projetos que falam por nós.</h2>
        </div>
        <span className="caption text-[5.8pt]">Obras executadas · Vidro &amp; Alumínio</span>
      </div>

      <CaseFigure
        src={project1}
        alt="Residência contemporânea ao anoitecer com grandes painéis de vidro"
        title="Residência Horizonte"
        credit="Projeto: Scherer Arquitetura · Esquadrias Linha Suprema"
        className="absolute inset-x-[13mm] top-[46mm] h-[70mm]"
      />

      <div className="absolute inset-x-[13mm] top-[120mm] grid grid-cols-2 gap-[3mm]">
        {cases.map((c) => (
          <CaseFigure key={c.title} {...c} className="h-[52mm]" />
        ))}
      </div>

      <div className="absolute inset-x-[13mm] top-[234mm]">
        <div className="hairline mb-[5mm]" />
        <div className="grid grid-cols-3 gap-x-[8mm]">
          {projects.map((p) => (
            <div key={p.nome}>
              <h3 className="display-md text-[9.6pt]">{p.nome}</h3>
              <span className="caption mt-[2mm] block text-[5.6pt]">{p.local}</span>
              <span className="caption mt-[1mm] block text-[5.6pt] leading-[1.5]">{p.sol}</span>
            </div>
          ))}
        </div>
        <p className="body-text mt-[7mm] max-w-[120mm] text-[7.4pt] leading-[1.6]">
          Imagens de referência arquitetônica utilizadas como placeholder até a inclusão do registro
          fotográfico das obras.
        </p>
      </div>
    </Sheet>
  );
}
