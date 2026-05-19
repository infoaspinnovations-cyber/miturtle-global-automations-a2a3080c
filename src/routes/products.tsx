import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — MiTurtle® Boom Barriers, Gate Motors & Access Control" },
      { name: "description", content: "Explore the full MiTurtle® product range: four boom barrier variants, sliding gate motors and intelligent access control systems." },
      { property: "og:title", content: "MiTurtle® Products" },
      { property: "og:description", content: "Premium smart-automation hardware for every enterprise lane." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const boom = products.filter((p) => p.category === "boom");
  const others = products.filter((p) => p.category !== "boom");
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Premium hardware, <span className="text-gradient-emerald">precision engineered.</span></>}
        description="Four boom barrier variants for every lane, plus sliding gate automation and access control — all engineered to the same uncompromising MiTurtle standard."
      />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Boom Barrier Variants</h2>
            <div className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">4 variants · 1 standard</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {boom.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-3xl glass p-2 transition-all hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-2xl bg-navy-deep/60">
                  <img src={p.image} alt={p.name} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-emerald-dark/40 bg-background/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow backdrop-blur">
                    {p.model}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl font-bold">{p.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/5 pt-5">
                    {p.specs.slice(0, 4).map((s) => (
                      <div key={s.label}>
                        <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                        <div className="mt-0.5 text-sm font-semibold">{s.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-glow">
                    View product <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Additional Automation</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-3xl glass p-2 transition-all hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-2xl bg-navy-deep/60">
                  <img src={p.image} alt={p.name} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-emerald-dark/40 bg-background/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow backdrop-blur">
                    {p.model}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl font-bold">{p.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-glow">
                    View product <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
