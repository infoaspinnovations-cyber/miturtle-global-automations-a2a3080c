import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
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
  const items = [
    { src: products[3].image, label: "Flagship Barrier · MT-DCMTHS/240", span: "md:col-span-2 md:row-span-2" },
    { src: parking, label: "Smart Parking Automation" },
    { src: products[0].image, label: "MT-DCMT/120" },
    { src: toll, label: "Highway Toll Plaza", span: "md:col-span-2" },
    { src: products[1].image, label: "MT-DCGL/150" },
    { src: products[2].image, label: "MT-DCMT/200" },
    { src: control, label: "Smart Access Management" },
    { src: products[4].image, label: "Sliding Gate Motor" },
    { src: install, label: "On-site Installation" },
    { src: products[5].image, label: "Access Control" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Engineering on <span className="text-gradient-emerald">the ground.</span></>}
        description="Selected product renders and project deployments — from corporate campuses to highway toll plazas."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-4">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-3xl glass p-1 ${it.span ?? ""}`}
              >
                <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl bg-background/70 px-4 py-2 text-xs font-semibold backdrop-blur opacity-0 transition-opacity group-hover:opacity-100">
                  {it.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
