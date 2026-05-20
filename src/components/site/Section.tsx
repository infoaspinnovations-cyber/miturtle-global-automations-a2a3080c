import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border border-emerald-dark/40 bg-emerald-dark/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow`}>
          <span className="inline-block size-1.5 rounded-full bg-emerald-glow" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative pt-28 md:pt-40 pb-20">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-3xl rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.42 0.11 155 / 0.25), transparent 70%)" }} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center reveal">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-dark/40 bg-emerald-dark/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow">
          <span className="inline-block size-1.5 rounded-full bg-emerald-glow" />
          {eyebrow}
        </div>
        <h1 className="mt-6 font-display text-[2.25rem] sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
