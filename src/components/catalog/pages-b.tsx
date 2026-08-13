import { Figure, Sheet, Wordmark } from "./Sheet";

import project2 from "@/assets/project-2.jpg";
import solutionsImg from "@/assets/solutions.jpg";
import corporate from "@/assets/corporate.jpg";
import closing from "@/assets/closing.jpg";

/* ---------------- 05 — CORES & ACABAMENTOS ---------------- */
const finishes: { name: string; note: string; style: React.CSSProperties }[] = [
  { name: "Preto", note: "Fosco texturizado", style: { background: "linear-gradient(150deg,#26282b,#111315)" } },
  { name: "Branco", note: "Liso acetinado", style: { background: "linear-gradient(150deg,#ffffff,#e9eaec)" } },
  { name: "Bronze", note: "Anodizado", style: { background: "linear-gradient(150deg,#7d5f42,#4a3626)" } },
  { name: "Grafite", note: "Texturizado", style: { background: "linear-gradient(150deg,#5a5f66,#33373c)" } },
  { name: "Fosco", note: "Baixo brilho", style: { background: "linear-gradient(150deg,#9aa0a6,#6f757b)" } },
  { name: "Amadeirado", note: "Padrão nogueira", style: { background: "linear-gradient(150deg,#9c6b3f,#5c3a1f)" } },
  { name: "Cromado", note: "Alto brilho", style: { background: "linear-gradient(150deg,#f2f4f6,#b6bcc2 45%,#8e959c)" } },
  { name: "Dourado", note: "Acabamento nobre", style: { background: "linear-gradient(150deg,#e0c07a,#a5813c)" } },
];

export function PageFinishes() {
  return (
    <Sheet index={5} label="Cores e acabamentos">
      <div className="absolute inset-x-[13mm] top-[24mm] flex items-end justify-between">
        <div>
          <span className="eyebrow" style={{ color: "var(--azure)" }}>
            Cores &amp; Acabamentos
          </span>
          <h2 className="display-lg mt-[7mm] text-[19pt]">
            O detalhe
            <br />
            que define
            <br />
            o projeto.
          </h2>
        </div>
        <p className="body-text w-[58mm] text-[9pt]">
          O acabamento é a última decisão do projeto e a primeira coisa que se percebe. As amostras
          abaixo são referências de cor e textura; tons finais podem variar conforme linha e lote de
          produção.
        </p>
      </div>

      <div className="absolute inset-x-[13mm] top-[104mm] grid grid-cols-4 gap-x-[6mm] gap-y-[10mm]">
        {finishes.map((f) => (
          <div key={f.name}>
            <div className="h-[38mm] w-full" style={f.style} />
            <h3 className="display-md mt-[4mm] text-[10pt]">{f.name}</h3>
            <span className="caption mt-[1.5mm] block text-[5.8pt]">{f.note}</span>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-[13mm] bottom-[26mm]">
        <div className="hairline mb-[5mm]" />
        <span className="caption">
          Pintura eletrostática · Anodização · Padrões amadeirados sob consulta
        </span>
      </div>
    </Sheet>
  );
}

/* ---------------- 06 — SOLUÇÕES ---------------- */
const solutions = [
  "Portas",
  "Janelas",
  "Grandes vãos",
  "Fachadas",
  "Divisórias",
  "Guarda-corpos",
];

export function PageSolutions() {
  return (
    <Sheet index={6} label="Soluções">
      <Figure
        src={solutionsImg}
        alt="Entrada de edifício com porta de vidro e divisórias de alumínio"
        className="absolute right-0 top-0 h-[128mm] w-[104mm]"
      />

      <div className="absolute left-[13mm] top-[30mm] w-[52mm]">
        <span className="eyebrow" style={{ color: "var(--azure)" }}>
          Aplicações
        </span>
        <h2 className="display-lg mt-[7mm] text-[18pt]">
          Soluções
          <br />
          para cada
          <br />
          projeto
        </h2>
        <div className="hairline my-[7mm]" />
        <ul>
          {solutions.map((s) => (
            <li key={s} className="flex items-baseline gap-[4mm] py-[2.4mm]">
              <span
                className="mb-[1mm] inline-block h-[1px] w-[5mm] shrink-0"
                style={{ backgroundColor: "var(--azure)" }}
              />
              <span className="display-md text-[11pt]">{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute left-[13mm] top-[142mm] w-[68mm]">
        <Figure
          src={project2}
          alt="Escada interna com guarda-corpo de vidro temperado"
          className="h-[74mm] w-full"
        />
        <span className="caption mt-[3mm] block">Guarda-corpos · Vidro temperado</span>
      </div>

      <div className="absolute right-[13mm] top-[142mm] w-[56mm]">
        <p className="body-text text-[9pt]">
          Cada abertura resolve um problema diferente: luz, ventilação, vedação, circulação,
          segurança. Trabalhamos a partir do desenho do arquiteto para escolher a linha, o vidro e o
          acabamento que atendem à intenção do projeto.
        </p>
        <div className="hairline my-[7mm]" />
        <span className="caption">Residencial · Comercial · Corporativo</span>
      </div>

      <Figure
        src={corporate}
        alt="Fachada corporativa em vidro e alumínio"
        className="absolute bottom-[26mm] right-[13mm] h-[42mm] w-[56mm]"
      />
    </Sheet>
  );
}

/* ---------------- 08 — ENCERRAMENTO ---------------- */
export function PageClosing() {
  return (
    <Sheet index={8} label="Encerramento" dark bleed>
      <Figure
        src={closing}
        alt="Fachada contemporânea iluminada ao anoitecer"
        className="absolute inset-x-0 top-0 h-[168mm]"
      />
      <div
        className="absolute inset-x-0 top-0 h-[168mm]"
        style={{ background: "linear-gradient(180deg, rgba(11,18,31,0.25), rgba(11,18,31,0.95))" }}
      />

      <div className="absolute inset-x-[13mm] top-[112mm]">
        <div className="mb-[7mm] h-[1px] w-[21mm]" style={{ backgroundColor: "var(--azure)" }} />
        <h2 className="display-lg max-w-[120mm] text-[20pt]" style={{ color: "var(--paper)" }}>
          Seu projeto merece
          <br />
          qualidade em cada detalhe.
        </h2>
      </div>

      <div className="absolute inset-x-[13mm] top-[190mm]">
        <p className="body-text max-w-[100mm] text-[9pt]" style={{ color: "rgba(255,255,255,0.72)" }}>
          Trabalhamos em parceria com arquitetos, engenheiros, construtoras e profissionais da
          construção para transformar especificações em soluções executáveis — com produção
          especializada, prazo e mão de obra própria.
        </p>
      </div>

      <div className="absolute inset-x-[13mm] bottom-[24mm]">
        <div className="mb-[9mm] h-[1px] w-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
        <div className="flex items-end justify-between">
          <div>
            <Wordmark light />
            <div className="mt-[9mm] grid grid-cols-2 gap-x-[14mm] gap-y-[4mm]">
              <div>
                <span className="caption block text-[5.8pt]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Telefone
                </span>
                <span className="font-display text-[10pt] tracking-[0.08em]" style={{ color: "var(--paper)" }}>
                  (55) 2120-5040
                </span>
              </div>
              <div>
                <span className="caption block text-[5.8pt]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Instagram
                </span>
                <span className="font-display text-[10pt] tracking-[0.08em]" style={{ color: "var(--paper)" }}>
                  @viannavidrosesquadrias
                </span>
              </div>
              <div className="col-span-2">
                <span className="caption block text-[5.8pt]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Endereço
                </span>
                <span className="font-display text-[10pt] tracking-[0.08em]" style={{ color: "var(--paper)" }}>
                  R. Santa Rosa, 854 — Santa Rosa / RS
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="bg-paper p-[3mm]">
              <img
                src="/qr-instagram.svg"
                alt="QR Code do Instagram da Vianna Vidros e Esquadrias"
                loading="lazy"
                className="h-[26mm] w-[21mm]"
              />
            </div>
            <span className="caption mt-[3mm] block text-[5.6pt]" style={{ color: "rgba(255,255,255,0.5)" }}>
              Siga no Instagram
            </span>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
