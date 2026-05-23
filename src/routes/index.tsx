import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, Cpu, Wifi, Building2, Plane, ShoppingBag, Factory, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/lib/products";
import { SectionHeader } from "@/components/site/Section";
import { TrustedBy } from "@/components/site/TrustedBy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MiTurtle® — Smart Traffic & Access Automation" },
      { name: "description", content: "Premium boom barriers, sliding gate motors and intelligent access control engineered for global enterprises." },
      { property: "og:title", content: "MiTurtle® — Innovate · Integrate · Inspire" },
      { property: "og:description", content: "Enterprise-grade smart automation for traffic and access." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const variants = products.filter((p) => p.category === "boom");

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92svh] md:min-h-[100svh] overflow-hidden pt-24 md:pt-32 flex items-center">
        <div className="absolute inset-0 -z-20">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-50 md:opacity-45" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.13 0.025 260 / 0.55) 0%, oklch(0.13 0.025 260 / 0.85) 70%, oklch(0.13 0.025 260) 100%)" }} />
        </div>
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.42 0.11 155 / 0.22), transparent 70%)" }} />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="mx-auto max-w-3xl lg:max-w-4xl text-center reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-dark/40 bg-emerald-dark/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow">
              <span className="inline-block size-1.5 animate-pulse rounded-full bg-emerald-glow" />
              Innovate · Integrate · Inspire
            </div>
            <h1 className="mt-6 md:mt-7 font-display text-[2.25rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
              The Future of <span className="text-gradient-emerald">Smart Traffic</span><br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>Automation, Engineered.
            </h1>
            <p className="mx-auto mt-5 md:mt-6 max-w-xl lg:max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              MiTurtle® designs premium boom barriers, sliding gate motors and intelligent
              access systems — built for enterprises that demand precision, speed and reliability.
            </p>
            <div className="mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/products" className="btn-primary">Explore Products <ArrowRight className="size-4" /></Link>
              <Link to="/contact" className="btn-ghost">Talk to an Engineer</Link>
            </div>
          </div>

          {/* Hero product showcase */}
          <div className="relative mt-20 reveal reveal-delay-2">
            <div className="absolute inset-x-10 -bottom-10 -z-10 h-40 rounded-full blur-3xl"
              style={{ background: "radial-gradient(ellipse, oklch(0.42 0.11 155 / 0.35), transparent 70%)" }} />
            <div className="relative overflow-hidden rounded-3xl glass-strong p-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl"
                style={{ background: "radial-gradient(ellipse at center, oklch(0.96 0.01 240) 0%, oklch(0.88 0.02 240) 100%)" }}>
                <img src={variants[3].image} alt={variants[3].name} className="absolute inset-0 h-full w-full object-contain p-6" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-emerald-glow">Flagship</div>
                  <div className="font-display text-sm sm:text-xl md:text-2xl font-bold rounded-md bg-background/70 px-2 py-1 sm:px-3 backdrop-blur">{variants[3].model} · {variants[3].name}</div>
                </div>
                <Link to="/products/$slug" params={{ slug: variants[3].slug }} className="btn-ghost !py-2 !px-3 sm:!px-4 text-[0.65rem] sm:text-xs">View specs <ArrowRight className="size-3.5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:gap-12 lg:px-8 md:grid-cols-2 md:items-center">
          <SectionHeader
            eyebrow="The MiTurtle Standard"
            title={<>Smart automation, <span className="text-gradient-emerald">made enterprise-grade.</span></>}
            description="From single-lane offices to multi-lane highway plazas, our hardware is engineered with the same uncompromising standard: sub-second response, decade-long reliability, and seamless integration with the smart-city stack."
          />
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Zap, t: "Sub-second", d: "Opening time" },
              { icon: ShieldCheck, t: "IP65", d: "Industrial sealing" },
              { icon: Cpu, t: "Servo Drive", d: "Precision motors" },
              { icon: Wifi, t: "IoT Ready", d: "Cloud telemetry" },
            ].map((f) => (
              <div key={f.t} className="glass rounded-2xl p-6">
                <f.icon className="size-6 text-emerald-glow" />
                <div className="mt-4 font-display text-2xl font-bold">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Showcase"
            title={<>{variants.length} boom barriers. <span className="text-gradient-emerald">One uncompromising standard.</span></>}
            description="A purpose-built variant for every lane — from compact commercial entrances to ultra high-speed highway tolls."
            center
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {variants.map((v, i) => (
              <Link
                key={v.slug}
                to="/products/$slug"
                params={{ slug: v.slug }}
                className="group relative overflow-hidden rounded-3xl glass p-2 transition-all hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at top, oklch(0.96 0.01 240) 0%, oklch(0.85 0.02 240) 100%)" }}>
                  <img src={v.image} alt={v.name} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow">{v.model}</div>
                  <div className="mt-1 font-display text-lg font-bold leading-tight">{v.name}</div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{v.specs[0].value} cycle</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why MiTurtle"
            title={<>Built by engineers. <span className="text-gradient-emerald">Trusted by enterprises.</span></>}
            center
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { t: "Precision Engineering", d: "Servo-driven motors, magnetic limit sensing and edge safety detection deliver smooth, silent and predictable operation." },
              { t: "Industrial Reliability", d: "IP65 cabinets, 10M+ cycle ratings and redundant power input — engineered for critical infrastructure." },
              { t: "Smart Integration", d: "Native RFID, ANPR, IoT and REST integrations connect MiTurtle to your existing smart-city stack." },
              { t: "Global Support", d: "Local installation partners and 24/7 remote diagnostics keep your lanes running, anywhere." },
              { t: "Premium Aesthetics", d: "Architecturally considered designs that elevate the entrances of premium corporate environments." },
              { t: "Sustainable by Design", d: "Brushless DC drivetrains and low-standby electronics minimize energy across the lifecycle." },
            ].map((f) => (
              <div key={f.t} className="group relative overflow-hidden rounded-3xl glass p-7">
                <div className="absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-emerald)" }} />
                <div className="font-display text-xl font-bold">{f.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Industries" title={<>Trusted across <span className="text-gradient-emerald">every sector.</span></>} center />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { i: Building2, t: "Corporate" },
              { i: Plane, t: "Airports" },
              { i: ShoppingBag, t: "Retail & Malls" },
              { i: Factory, t: "Industrial" },
            ].map((a) => (
              <div key={a.t} className="glass rounded-2xl p-8 text-center transition-colors hover:bg-white/5">
                <a.i className="mx-auto size-7 text-emerald-glow" />
                <div className="mt-4 font-display text-lg font-semibold">{a.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <TrustedBy />

      {/* STATS */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass-strong md:grid-cols-4">
            {[
              { k: "120K+", v: "Lanes Automated" },
              { k: "40+", v: "Countries" },
              { k: "10M+", v: "Cycle MCBF" },
              { k: "99.98%", v: "Uptime SLA" },
            ].map((s) => (
              <div key={s.v} className="bg-card/40 p-5 sm:p-6 md:p-10 text-center backdrop-blur">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-emerald break-words">{s.k}</div>
                <div className="mt-2 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Testimonials" title={<>What enterprise <span className="text-gradient-emerald">clients say.</span></>} center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { q: "Switching to MiTurtle cut our gate downtime to near-zero. The servo barriers are remarkably silent.", n: "R. Mehta", r: "Facility Director, Corporate Campus" },
              { q: "The integration with our ANPR was effortless. Telemetry dashboards are best-in-class.", n: "S. Iyer", r: "Smart City Program Lead" },
              { q: "Industrial-grade build quality. Survived two monsoons in coastal conditions without a hiccup.", n: "A. Kapoor", r: "COO, Logistics Park" },
            ].map((t) => (
              <div key={t.n} className="rounded-3xl glass p-7">
                <div className="flex gap-1 text-emerald-glow">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.q}"</p>
                <div className="mt-5 border-t border-white/5 pt-4">
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] p-12 text-center md:p-20"
            style={{ background: "linear-gradient(135deg, oklch(0.18 0.05 260) 0%, oklch(0.22 0.08 200) 100%)" }}>
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute -right-20 -top-20 size-80 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.42 0.11 155 / 0.4), transparent 70%)" }} />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                Ready to engineer your <span className="text-gradient-emerald">smart entry?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Speak with a MiTurtle automation engineer for a tailored quote, site survey and integration plan.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight className="size-4" /></Link>
                <Link to="/products" className="btn-ghost">View All Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
