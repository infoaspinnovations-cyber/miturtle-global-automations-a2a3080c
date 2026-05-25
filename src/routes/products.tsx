import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title:
          "Products — MiTurtle® Boom Barriers, Gate Motors & Access Control",
      },
      {
        name: "description",
        content:
          "Explore premium MiTurtle® smart automation products engineered for modern enterprises.",
      },
    ],
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
        title={
          <>
            Premium Hardware,
            <span className="text-emerald-400">
              {" "}
              Precision Engineered
            </span>
          </>
        }
        description={`${boom.length} boom barrier variants plus intelligent automation systems built for enterprise-grade reliability.`}
      />

      {/* BOOM BARRIERS */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Boom Barrier Variants
            </h2>

            <div className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">
              {boom.length} Variants · Engineered for Every Lane
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2">

            {boom.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md p-2 transition-all md:hover:-translate-y-1"
              >

                {/* Product Image */}
                <div className="relative overflow-hidden rounded-2xl">

                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(circle at center, #f8fafc 0%, #dbe4ee 100%)",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6 transition-transform duration-700 md:group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* Model */}
                  <div className="inline-flex w-fit items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                    {p.model}
                  </div>

                  {/* Name */}
                  <div className="mt-3 text-xl sm:text-2xl font-bold leading-tight break-words">
                    {p.name}
                  </div>

                  {/* Tagline */}
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.tagline}
                  </p>

                  {/* Specs */}
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">

                    {p.specs.slice(0, 4).map((s) => (
                      <div key={s.label}>

                        <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                          {s.label}
                        </div>

                        <div className="mt-1 text-sm font-semibold">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                    View Product

                    <ArrowRight className="size-4 transition-transform md:group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SLIDING GATE */}
          <div className="mt-20 mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Sliding Gate Motors
            </h2>

            <div className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">
              {others.length} Models · Smooth · Silent · Heavy-Duty
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2">

            {others.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md p-2 transition-all md:hover:-translate-y-1"
              >

                {/* Product Image */}
                <div className="relative overflow-hidden rounded-2xl">

                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(circle at center, #f8fafc 0%, #dbe4ee 100%)",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6 transition-transform duration-700 md:group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* Model */}
                  <div className="inline-flex w-fit items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                    {p.model}
                  </div>

                  {/* Name */}
                  <div className="mt-3 text-xl sm:text-2xl font-bold leading-tight break-words">
                    {p.name}
                  </div>

                  {/* Tagline */}
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.tagline}
                  </p>

                  {/* Button */}
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
    </>
  );
}
