import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/site/Section";
import { Target, Eye, Sparkles, ShieldCheck, Cpu, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MiTurtle® — Smart Automation Engineered" },
      { name: "description", content: "MiTurtle® is a trademarked brand engineering premium traffic and access automation for global enterprises." },
      { property: "og:title", content: "About MiTurtle®" },
      { property: "og:description", content: "Brand story, vision, mission, technology and company strengths." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Engineering the <span className="text-gradient-emerald">future of access.</span></>}
        description="MiTurtle® is a globally trademarked automation brand designing premium boom barriers, gate motors and access systems for enterprises that demand uncompromising reliability."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:gap-12 lg:px-8 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-3xl glass-strong aspect-[4/3]">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative flex h-full items-center justify-center p-12">
              <div className="text-center">
                <div className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-emerald">MiTurtle<sup className="text-xl text-muted-foreground">®</sup></div>
                <div className="mt-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">Registered Trademark</div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title={<>From precision parts to a <span className="text-gradient-emerald">global automation brand.</span></>}
              description="Founded by automation engineers obsessed with the small details that make critical hardware great, MiTurtle® has grown into a globally trademarked smart-automation brand trusted by enterprises across 40+ countries."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Every MiTurtle product is engineered around three principles: speed without compromise,
              reliability you can stake an SLA on, and integration that respects the platforms our
              clients already run.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl glass p-6 md:p-10">
              <Target className="size-7 text-emerald-glow" />
              <h3 className="mt-4 font-display text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground">
                To engineer smart automation hardware that makes every entrance — corporate, civic or
                industrial — faster, safer and more intelligent.
              </p>
            </div>
            <div className="rounded-3xl glass p-6 md:p-10">
              <Eye className="size-7 text-emerald-glow" />
              <h3 className="mt-4 font-display text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">
                To be the global benchmark for premium traffic and access automation — defining the standard
                for the smart cities of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Approach" title={<>Technology-driven. <span className="text-gradient-emerald">Detail-obsessed.</span></>} center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { i: Cpu, t: "Engineering First", d: "In-house servo drives, firmware, and edge-detection algorithms — never off-the-shelf compromises." },
              { i: ShieldCheck, t: "Industrial Quality", d: "Every chassis IP-rated, cycle-tested and lightning-protected for critical-infrastructure deployment." },
              { i: Globe, t: "Global Footprint", d: "Local installation and support partners across 40+ countries, backed by cloud telemetry from HQ." },
              { i: Sparkles, t: "Premium Design", d: "Architecturally considered hardware that elevates the premium environments it protects." },
              { i: Target, t: "Customer Obsession", d: "Dedicated engineers per enterprise account — your uptime is our metric." },
              { i: Eye, t: "Forward Looking", d: "Continuous R&D into ANPR, vision-based sensing and AI traffic orchestration." },
            ].map((s) => (
              <div key={s.t} className="rounded-3xl glass p-7">
                <s.i className="size-6 text-emerald-glow" />
                <div className="mt-4 font-display text-lg font-bold">{s.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
