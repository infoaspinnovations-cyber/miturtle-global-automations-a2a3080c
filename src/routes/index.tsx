import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Wifi,
  Building2,
  Plane,
  ShoppingBag,
  Factory,
  Star,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/lib/products";
import { SectionHeader } from "@/components/site/Section";
import { TrustedBy } from "@/components/site/TrustedBy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "MiTurtle® — Smart Traffic & Access Automation",
      },
      {
        name: "description",
        content:
          "Premium boom barriers, sliding gate motors and intelligent access control engineered for global enterprises.",
      },
    ],
  }),
  component: Home,
});

const variants = products.filter((p) => p.category === "boom");

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92svh] overflow-hidden pt-24 md:min-h-screen md:pt-32 flex items-center">
        <div className="absolute inset-0 -z-20">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(4,8,20,0.55) 0%, rgba(4,8,20,0.85) 70%, rgba(4,8,20,1) 100%)",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-emerald-400">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Innovate · Integrate · Inspire
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-bold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              The Future of
              <span className="block text-emerald-400">
                Smart Traffic
              </span>
              Automation
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              MiTurtle® designs premium boom barriers, sliding gate motors and
              intelligent access systems — built for enterprises that demand
              precision, speed and reliability.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                Explore Products
                <ArrowRight className="size-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>

          {/* Hero Product */}
          <div className="relative mt-20">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md p-2">

              <div
                className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, #f8fafc 0%, #dbe4ee 100%)",
                }}
              >
                <img
                  src={variants[3].image}
                  alt={variants[3].name}
                  className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6">

                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                    Flagship
                  </div>

                  <div className="mt-2 text-base sm:text-xl md:text-2xl font-bold break-words">
                    {variants[3].model} · {variants[3].name}
                  </div>
                </div>

                <Link
                  to="/products/$slug"
                  params={{ slug: variants[3].slug }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold backdrop-blur-md transition hover:bg-white/10"
                >
                  View Specs
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeader
            eyebrow="Product Showcase"
            title={
              <>
                Premium Boom Barriers
              </>
            }
            description="Engineered for high performance traffic automation."
            center
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {variants.map((v, i) => (
              <Link
                key={v.slug}
                to="/products/$slug"
                params={{ slug: v.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md p-2 transition-all md:hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >

                {/* Image */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at center, #f8fafc 0%, #dbe4ee 100%)",
                  }}
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6 transition-transform duration-700 md:group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  <div className="inline-flex w-fit items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                    {v.model}
                  </div>

                  <div className="mt-3 text-lg sm:text-xl font-bold leading-tight break-words">
                    {v.name}
                  </div>

                  <p className="mt-2 text-sm text-gray-400">
                    {v.specs[0]?.value} cycle
                  </p>

                  <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                    View Product
                    <ArrowRight className="size-4 transition-transform md:group-hover:translate-x-1" />
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
            title={
              <>
                Built for Modern Infrastructure
              </>
            }
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                icon: ShieldCheck,
                t: "Industrial Reliability",
                d: "IP65 cabinets and long lifecycle engineering.",
              },
              {
                icon: Cpu,
                t: "Precision Engineering",
                d: "Servo-driven systems for smooth operation.",
              },
              {
                icon: Wifi,
                t: "IoT Ready",
                d: "Cloud telemetry and smart integrations.",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-3xl bg-white/5 backdrop-blur-md p-7"
              >
                <f.icon className="size-7 text-emerald-400" />

                <div className="mt-5 text-xl font-bold">
                  {f.t}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeader
            eyebrow="Industries"
            title={
              <>
                Trusted Across Every Sector
              </>
            }
            center
          />

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">

            {[
              { i: Building2, t: "Corporate" },
              { i: Plane, t: "Airports" },
              { i: ShoppingBag, t: "Retail" },
              { i: Factory, t: "Industrial" },
            ].map((a) => (
              <div
                key={a.t}
                className="rounded-2xl bg-white/5 backdrop-blur-md p-8 text-center"
              >
                <a.i className="mx-auto size-7 text-emerald-400" />

                <div className="mt-4 text-lg font-semibold">
                  {a.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <TrustedBy />

      {/* TESTIMONIALS */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>
                What Clients Say
              </>
            }
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                q: "Excellent reliability and premium engineering.",
                n: "R. Mehta",
              },
              {
                q: "Perfect ANPR and RFID integration experience.",
                n: "S. Iyer",
              },
              {
                q: "Industrial-grade quality with premium finish.",
                n: "A. Kapoor",
              },
            ].map((t) => (
              <div
                key={t.n}
                className="rounded-3xl bg-white/5 backdrop-blur-md p-7"
              >
                <div className="flex gap-1 text-emerald-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  "{t.q}"
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="font-semibold">
                    {t.n}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
