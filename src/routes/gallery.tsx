import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { TrustedBy } from "@/components/site/TrustedBy";
import { products } from "@/lib/products";
import parking from "@/assets/gallery-parking.jpg";
import toll from "@/assets/gallery-toll.jpg";
import control from "@/assets/gallery-control.jpg";
import install from "@/assets/gallery-install.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — MiTurtle® Smart Automation Projects" },
      { name: "description", content: "Industrial project showcase: parking automation, toll plazas, smart access management and MiTurtle® product renders." },
      { property: "og:title", content: "MiTurtle® Gallery" },
      { property: "og:description", content: "Real installs, real renders." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const byModel = (m: string) => products.find((p) => p.model === m)!;
  const items: { src: string; label: string; span?: string; contain?: boolean }[] = [
    { src: byModel("MT-DCMTHS/240").image, label: "Flagship Barrier · MT-DCMTHS/240", span: "md:col-span-2 md:row-span-2", contain: true },
    { src: parking, label: "Smart Parking Automation" },
    { src: byModel("MT-DCMT/120").image, label: "MT-DCMT/120 · Compact DC Barrier", contain: true },
    { src: toll, label: "Highway Toll Plaza", span: "md:col-span-2" },
    { src: byModel("MT-DCGL/150").image, label: "MT-DCGL/150 · Gate-Lane Barrier", contain: true },
    { src: byModel("MT-DCMT/200").image, label: "MT-DCMT/200 · High-Speed Barrier", contain: true },
    { src: control, label: "Smart Access Management" },
    { src: byModel("MT-SL600 PRO").image, label: "MT-SL600 PRO · Sliding Gate Motor", contain: true },
    { src: byModel("MT-BLD").image, label: "Automatic Rising Bollard", contain: true },
    { src: install, label: "On-site Installation" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Engineering on <span className="text-gradient-emerald">the ground.</span></>}
        description="Selected product renders and project deployments — from corporate campuses to highway toll plazas."
      />

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-4">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-3xl glass p-1 ${it.span ?? ""}`}
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-2xl"
                  style={it.contain ? { background: "radial-gradient(ellipse at center, oklch(0.96 0.01 240) 0%, oklch(0.85 0.02 240) 100%)" } : undefined}
                >
                  <img
                    src={it.src}
                    alt={it.label}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${it.contain ? "object-contain p-6" : "object-cover"}`}
                  />
                </div>
                <figcaption className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl bg-background/70 px-4 py-2 text-xs font-semibold backdrop-blur opacity-0 transition-opacity group-hover:opacity-100">
                  {it.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />
    </>
  );
}
