import { Figure, Sheet, Wordmark } from "./Sheet";

import cover from "@/assets/cover.jpg";
import interior1 from "@/assets/interior-1.jpg";
import detailFrame from "@/assets/detail-frame.jpg";
import glassFacade from "@/assets/glass-facade.jpg";

/* ---------------- 01 — CAPA ---------------- */
export function PageCover() {
  return (
    <Sheet index={1} label="Capa" bleed>
      <Figure
        src={cover}
        alt="Fachada de arquitetura contemporânea com grandes vãos de vidro e esquadrias de alumínio"
        className="absolute inset-0"
        eager
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,18,32,0.55) 0%, rgba(10,18,32,0.05) 38%, rgba(10,18,32,0.72) 100%)",
        }}
      />

      <div className="absolute inset-x-[13mm] top-[16mm] flex items-start justify-between">
        <Wordmark light size={1.15} />
        <span className="eyebrow text-[6.6pt]" style={{ color: "rgba(255,255,255,0.72)" }}>
          Catálogo Institucional
        </span>
      </div>

      <div className="absolute inset-x-[13mm] bottom-[20mm]">
        <div className="mb-[8mm] h-[1px] w-[21mm]" style={{ backgroundColor: "var(--azure)" }} />
        <h1
          className="display-xl max-w-[120mm]"
          style={{ color: "var(--paper)", fontSize: "33pt" }}
        >
          Soluções que
          <br />
          valorizam
          <br />
          cada projeto.
        </h1>
        <p
          className="eyebrow mt-[9mm]"
          style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.4em" }}
        >
          Vidro · Alumínio · Arquitetura
        </p>
      </div>
    </Sheet>
  );
}

/* ---------------- 02 — APRESENTAÇÃO ---------------- */
export function PagePresentation() {
  return (
    <Sheet index={2} label="Apresentação">
      <Figure
        src={interior1}
        alt="Sala minimalista com grandes portas de correr em alumínio e vidro"
        className="absolute left-0 top-0 h-[196mm] w-[70mm]"
      />
      <div className="absolute left-[13mm] top-[202mm] w-[56mm]">
        <div className="hairline mb-[4mm]" />
        <span className="caption">Residencial · Grandes vãos</span>
        <p className="font-serif mt-[10mm] text-[15pt] italic leading-[1.35]" style={{ color: "var(--navy)" }}>
          Vidro e alumínio
          <br />
          medidos, cortados
          <br />
          e instalados
          <br />
          para um projeto só.
        </p>
      </div>

      <div className="absolute right-[13mm] top-[24mm] w-[74mm]">
        <span className="eyebrow" style={{ color: "var(--azure)" }}>
          A empresa
        </span>
        <h2 className="display-lg mt-[7mm]" style={{ fontSize: "22pt" }}>
          Experiência
          <br />
          que se
          <br />
          transforma em
          <br />
          qualidade.
        </h2>

        <div className="hairline my-[9mm]" />

        <p className="body-text">
          Há mais de 15 anos, a Vianna Vidros e Esquadrias atua no desenvolvimento de soluções em
          vidro e alumínio para projetos residenciais, comerciais e corporativos.
        </p>
        <p className="body-text mt-[5mm]">
          Com sede em Santa Rosa, atendemos toda a região e, conforme a necessidade de cada projeto,
          também atuamos em outras regiões do Brasil e fora do país.
        </p>

        <div className="hairline mt-[12mm]" />
        <div className="mt-[8mm] flex items-end gap-[6mm]">
          <span
            className="font-display leading-[0.8]"
            style={{ fontSize: "48pt", fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.04em" }}
          >
            +15
          </span>
          <span className="eyebrow mb-[3mm]" style={{ lineHeight: 1.8 }}>
            Anos de
            <br />
            experiência
          </span>
        </div>
      </div>

      <div className="absolute bottom-[26mm] right-[13mm] w-[74mm]">
        <div className="hairline mb-[5mm]" />
        <span className="caption">Santa Rosa · Rio Grande do Sul · Brasil</span>
      </div>

    </Sheet>
  );
}

/* ---------------- 03 — POSICIONAMENTO ---------------- */
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

export function PagePositioning() {
  return (
    <Sheet index={3} label="Posicionamento">
      <div className="absolute inset-x-[13mm] top-[26mm]">
        <span className="eyebrow" style={{ color: "var(--azure)" }}>
          Posicionamento
        </span>
        <h2 className="display-xl mt-[8mm] max-w-[142mm]">
          Mais do que produtos.
          <br />
          Entregamos soluções.
        </h2>
      </div>

      <div className="absolute inset-x-[13mm] top-[112mm] grid grid-cols-2 gap-x-[14mm] gap-y-[16mm]">
        {concepts.map((c) => (
          <div key={c.n}>
            <div className="hairline mb-[6mm]" />
            <span
              className="font-display text-[8pt] tracking-[0.24em]"
              style={{ color: "var(--azure)" }}
            >
              {c.n}
            </span>
            <h3 className="display-md mt-[4mm]">{c.t}</h3>
            <p className="body-text mt-[3.5mm] text-[9pt]">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-[13mm] bottom-[24mm]">
        <div className="hairline mb-[6mm]" />
        <span className="eyebrow" style={{ color: "var(--navy)" }}>
          Do primeiro contato à instalação
        </span>
        <div className="mt-[6mm] flex justify-between">
          {process.map(([n, t]) => (
            <div key={n} className="w-[21mm]">
              <span
                className="font-display block text-[13pt] font-medium leading-none"
                style={{ color: "var(--navy)" }}
              >
                {n}
              </span>
              <span className="caption mt-[2.5mm] block text-[6pt] leading-[1.5]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

/* ---------------- 04 — ESQUADRIAS DE ALUMÍNIO ---------------- */
const lines = [
  ["Suprema", "Grandes vãos e folhas amplas com perfis reforçados."],
  ["Gold", "Versatilidade para janelas e portas de uso residencial."],
  ["Linha 30", "Solução racional para vãos padronizados."],
  ["Linha 42", "Maior robustez para aberturas de médio e grande porte."],
  ["Outras linhas", "Configurações específicas conforme a especificação do projeto."],
];

export function PageAluminum() {
  return (
    <Sheet index={4} label="Esquadrias de alumínio">
      <Figure
        src={detailFrame}
        alt="Detalhe de perfil de esquadria de alumínio preto encontrando o vidro"
        className="absolute right-0 top-0 h-[150mm] w-[85mm]"
      />

      <div className="absolute left-[13mm] top-[26mm] w-[62mm]">
        <span className="eyebrow" style={{ color: "var(--azure)" }}>
          Produto
        </span>
        <h2 className="display-lg mt-[7mm]">
          Esquadrias
          <br />
          de alumínio
        </h2>
        <p className="font-serif mt-[6mm] text-[14pt] italic leading-[1.3]" style={{ color: "var(--navy)" }}>
          Design, desempenho e versatilidade.
        </p>
        <div className="hairline my-[8mm]" />
        <p className="body-text text-[9.4pt]">
          As esquadrias de alumínio permitem criar soluções que combinam estética, funcionalidade e
          durabilidade. Trabalhamos com diferentes linhas e configurações para atender diferentes
          necessidades de projeto.
        </p>
      </div>

      <div className="absolute inset-x-[13mm] top-[170mm]">
        <span className="eyebrow" style={{ color: "var(--navy)" }}>
          Linhas de trabalho
        </span>
        <div className="mt-[8mm]">
          {lines.map(([t, d], i) => (
            <div key={t}>
              <div className="hairline" />
              <div className="flex items-baseline gap-[8mm] py-[5.5mm]">
                <span
                  className="font-display w-[10mm] shrink-0 text-[8pt] tracking-[0.2em]"
                  style={{ color: "var(--azure)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-md w-[40mm] shrink-0 text-[13pt]">{t}</h3>
                <p className="body-text text-[8.6pt]">{d}</p>
              </div>
            </div>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </Sheet>
  );
}

/* ---------------- 05 — VIDROS ---------------- */
const glasses = [
  ["Temperado", "Resistência mecânica e segurança para grandes superfícies."],
  ["Laminado", "Duas lâminas unidas por película: segurança e conforto acústico."],
  ["Comum", "Aplicações internas e composições de baixo esforço estrutural."],
  ["Refletivo", "Controle de luz e privacidade em fachadas."],
  ["Fosco", "Difusão de luz com privacidade preservada."],
  ["Coloridos", "Camadas de cor como elemento de projeto."],
  ["Espelhos", "Ampliação visual e composição de ambientes."],
  ["Especiais", "Soluções técnicas conforme especificação."],
];

export function PageGlass() {
  return (
    <Sheet index={5} label="Vidros">
      <Figure
        src={glassFacade}
        alt="Fachada envidraçada refletindo o céu"
        className="absolute inset-x-0 top-0 h-[124mm]"
      />
      <div className="absolute left-[13mm] top-[86mm] w-[90mm] bg-paper px-[10mm] py-[9mm]">
        <span className="eyebrow" style={{ color: "var(--azure)" }}>
          Vidros
        </span>
        <h2 className="display-lg mt-[5mm] text-[19pt]">
          A transparência
          <br />
          como elemento
          <br />
          de arquitetura.
        </h2>
      </div>

      <div className="absolute inset-x-[13mm] top-[150mm] w-[90mm]">
        <p className="body-text text-[9.4pt]">
          O vidro define a relação entre interior e paisagem. Selecionamos tipo, espessura e
          composição de acordo com desempenho, segurança e intenção estética de cada projeto.
        </p>
      </div>

      <div className="absolute inset-x-[13mm] top-[182mm] grid grid-cols-2 gap-x-[12mm]">
        {glasses.map(([t, d]) => (
          <div key={t}>
            <div className="hairline" />
            <div className="py-[4.5mm]">
              <h3 className="display-md text-[11pt]">{t}</h3>
              <p className="body-text mt-[2mm] text-[8pt] leading-[1.55]">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  );
}
