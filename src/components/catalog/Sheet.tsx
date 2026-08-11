import type { ReactNode } from "react";

export function Sheet({
  children,
  index,
  label,
  dark = false,
  bleed = false,
}: {
  children: ReactNode;
  index: number;
  label?: string;
  dark?: boolean;
  bleed?: boolean;
}) {
  return (
    <section
      id={`pagina-${index}`}
      className="a4-sheet a4 shadow-[0_18px_60px_-30px_rgba(16,24,40,0.45)]"
      style={dark ? { backgroundColor: "var(--navy-deep)", color: "var(--paper)" } : undefined}
      aria-label={label ? `Página ${index} — ${label}` : `Página ${index}`}
    >
      {children}
      {!bleed && (
        <footer className="absolute inset-x-[18mm] bottom-[10mm] flex items-end justify-between">
          <span className="caption" style={dark ? { color: "rgba(255,255,255,0.55)" } : undefined}>
            Vianna Vidros e Esquadrias
          </span>
          <span
            className="font-display text-[8pt] font-medium tracking-[0.2em]"
            style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--navy)" }}
          >
            {String(index).padStart(2, "0")}
          </span>
        </footer>
      )}
    </section>
  );
}

export function Wordmark({
  light = false,
  size = 1,
}: {
  light?: boolean;
  size?: number;
}) {
  return (
    <img
      src={light ? logoLight.url : logoNavy.url}
      alt="Vianna Vidros e Esquadrias"
      className="block w-auto object-contain"
      style={{ height: `${24 * size}mm` }}
    />
  );
}

export function Figure({
  src,
  alt,
  className = "",
  caption,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
      {caption && (
        <figcaption className="caption absolute bottom-[3mm] left-[3.5mm] text-[5.8pt]" style={{ color: "rgba(255,255,255,0.82)" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
