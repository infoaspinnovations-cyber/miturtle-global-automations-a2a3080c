import { SectionHeader } from "./Section";

const brands = [
  "GMR",
  "BHEL",
  "CPWD",
  "Ministry of Home Affairs",
  "IIM Udaipur",
  "Ashoka University",
  "L&T",
  "IndianOil",
  "Bihar Vidhan Sabha",
  "Pind Balluchi",
  "Hindustan Times",
  "HP",
  "Birla Opus",
  "IIT",
  "PPAP",
  "The Muthoot Group",
  "TATA",
  "Reliance",
  "Adani",
  "DRDO",
];

const rowA = brands.slice(0, 10);
const rowB = brands.slice(10);

function LogoCard({ name }: { name: string }) {
  return (
    <div className="group mx-3 flex h-20 w-56 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-emerald-glow/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_oklch(0.72_0.16_155/0.6)]">
      <span className="font-display text-xl font-bold tracking-tight text-foreground/70 transition-colors duration-500 group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="group/marquee relative overflow-hidden">
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${reverse ? "rtl" : "ltr"} 50s linear infinite`,
          animationPlayState: "running",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {doubled.map((name, i) => (
          <LogoCard key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="relative py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-80 max-w-4xl -translate-y-1/2 blur-3xl"
        style={{ background: "radial-gradient(ellipse, oklch(0.42 0.11 155 / 0.18), transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Trusted By"
          title={
            <>
              Trusted by leading <span className="text-gradient-emerald">institutions and enterprises</span>
            </>
          }
          description="From government ministries and defense premises to global enterprises and academic institutions — MiTurtle® powers the entrances that matter."
          center
        />

        <div className="relative mt-16 space-y-5">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 md:w-56"
            style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 md:w-56"
            style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
          />

          <Marquee items={rowA} />
          <Marquee items={rowB} reverse />
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
