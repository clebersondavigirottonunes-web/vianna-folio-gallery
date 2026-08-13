import { Figure, Sheet, Wordmark } from "./Sheet";

import cover from "@/assets/cover.jpg";
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

/* ---------------- 03 — ESQUADRIAS DE ALUMÍNIO ---------------- */
const lines = [
  ["Suprema", "Grandes vãos e folhas amplas com perfis reforçados."],
  ["Gold", "Versatilidade para janelas e portas de uso residencial."],
  ["Linha 30", "Solução racional para vãos padronizados."],
  ["Linha 42", "Maior robustez para aberturas de médio e grande porte."],
  ["Outras linhas", "Configurações específicas conforme a especificação do projeto."],
];

export function PageAluminum() {
  return (
    <Sheet index={3} label="Esquadrias de alumínio">
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

/* ---------------- 04 — VIDROS ---------------- */
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
    <Sheet index={4} label="Vidros">
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
