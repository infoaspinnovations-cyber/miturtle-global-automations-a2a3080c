import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products, type Product } from "@/lib/products";
import { ArrowLeft, ArrowRight, Check, Zap } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.model} — ${loaderData.product.name} | MiTurtle®` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.model} · MiTurtle®` },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:type", content: "product" },
          { property: "og:image", content: loaderData.product.image },
          { property: "og:url", content: `/products/${loaderData.product.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/products/${loaderData.product.slug}` }] : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="btn-primary mt-6">Back to products</Link>
      </div>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-28 md:pt-36 pb-12">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-3.5" /> All Products
          </Link>

          <div className="mt-8 grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-3xl glass-strong p-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl"
                style={{ background: "radial-gradient(ellipse at center, oklch(0.97 0.01 240) 0%, oklch(0.86 0.02 240) 100%)" }}>
                <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-contain p-8" />
              </div>
            </div>
            <div className="reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-dark/40 bg-emerald-dark/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow">
                {product.model}
              </div>
              <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1]">{product.name}</h1>
              <p className="mt-3 text-lg text-emerald-glow">{product.tagline}</p>
              <p className="mt-5 text-muted-foreground">{product.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {product.specs.map((s) => (
                  <div key={s.label} className="rounded-2xl glass p-4">
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                    <div className="mt-1 font-display text-lg font-bold">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight className="size-4" /></Link>
                <Link to="/products" className="btn-ghost">Compare Variants</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:gap-10 lg:px-8 md:grid-cols-2">
          <div className="rounded-3xl glass p-6 md:p-10">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow">Features</div>
            <h2 className="mt-3 font-display text-3xl font-bold">Smart automation, premium engineering.</h2>
            <ul className="mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-emerald-dark/50 bg-emerald-dark/15 text-emerald-glow">
                    <Check className="size-3" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl glass p-6 md:p-10">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow">Applications</div>
            <h2 className="mt-3 font-display text-3xl font-bold">Deployed wherever it matters.</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {product.applications.map((a) => (
                <div key={a} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm">
                  <Zap className="size-4 text-emerald-glow" />
                  <div className="mt-2 font-semibold">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">Related products</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group rounded-3xl glass p-2 transition-all hover:-translate-y-1">
                <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                <div className="p-5">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-glow">{p.model}</div>
                  <div className="mt-1 font-display text-lg font-bold">{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
