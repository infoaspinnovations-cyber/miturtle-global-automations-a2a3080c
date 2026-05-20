import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/site/Section";
import { Wrench, Settings, Cpu, Headphones, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MiTurtle® Installation, Maintenance & Integration" },
      { name: "description", content: "End-to-end services: installation, maintenance, automation integration, technical support and smart security solutions." },
      { property: "og:title", content: "MiTurtle® Services" },
      { property: "og:description", content: "Premium installation, maintenance and integration services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { i: Wrench, t: "Installation", d: "Site-survey to commissioning — certified MiTurtle engineers deploy your hardware to specification, on schedule, every time." },
  { i: Settings, t: "Maintenance", d: "Preventive maintenance contracts with priority response, on-site spares and quarterly performance reviews." },
  { i: Cpu, t: "Automation Integration", d: "Native integration with ANPR, RFID, building management systems and your existing IoT stack via REST and MQTT." },
  { i: Headphones, t: "Technical Support", d: "24/7 remote diagnostics and tier-1 engineering support with SLAs from 4 hours to next-business-day." },
  { i: ShieldCheck, t: "Smart Security Solutions", d: "Consult, design and deploy end-to-end perimeter security combining barriers, gates, access and surveillance." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>End-to-end <span className="text-gradient-emerald">automation services.</span></>}
        description="From the first site survey to decade-long support contracts — MiTurtle services are engineered with the same precision as our hardware."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.t} className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: "var(--gradient-emerald)" }} />
                <div className="relative">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">0{i + 1}</div>
                  <s.i className="mt-4 size-7 text-emerald-glow" />
                  <h3 className="mt-4 font-display text-xl font-bold">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title={<>How we deliver <span className="text-gradient-emerald">enterprise installs.</span></>}
            center
          />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { t: "Discover", d: "Site survey, traffic study, integration mapping." },
              { t: "Design", d: "Hardware selection, lane layouts, electrical & networking plan." },
              { t: "Deploy", d: "Certified install, commissioning, integration testing." },
              { t: "Sustain", d: "Maintenance contract, telemetry, lifecycle upgrades." },
            ].map((s, i) => (
              <div key={s.t} className="rounded-3xl glass p-7">
                <div className="font-display text-4xl font-bold text-gradient-emerald">0{i + 1}</div>
                <div className="mt-4 font-display text-lg font-bold">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-primary">Start a Project <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
