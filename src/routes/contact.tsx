import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MiTurtle® — Talk to an Automation Engineer" },
      { name: "description", content: "Get in touch with MiTurtle® for product inquiries, site surveys, quotes and integration consulting." },
      { property: "og:title", content: "Contact MiTurtle®" },
      { property: "og:description", content: "Reach our automation engineers." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient-emerald">build the entry</span> of tomorrow.</>}
        description="Tell us about your site and we'll connect you with a MiTurtle automation engineer for a tailored quote and integration plan."
      />

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:gap-8 lg:px-8 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-3xl glass-strong p-6 sm:p-8 md:p-10"
          >
            <h2 className="font-display text-2xl font-bold">Send an inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within one business day.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Product of interest</label>
              <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-dark">
                {products.map((product) => {
                  const label =
                    product.category === "boom"
                      ? `Boom Barrier — ${product.model}`
                      : product.category === "gate"
                      ? `Sliding Gate Motor — ${product.model}`
                      : product.category === "access"
                      ? `Access Control Systems — ${product.model}`
                      : `Automatic Rising Bollard — ${product.model}`;
                  return <option key={product.slug}>{label}</option>;
                })}
                <option>Other</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea rows={5} placeholder="Tell us about your site, traffic volume and integration needs..." className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-dark" />
            </div>

            <button type="submit" className="btn-primary mt-8">
              {submitted ? "Thanks — we'll be in touch" : <>Send inquiry <Send className="size-4" /></>}
            </button>
          </form>

          <div className="space-y-4">
            <InfoCard icon={MapPin} title="Head Office" lines={["149 Shamabai Tower,", "Thakurdwar, Charni Road,", "Mumbai – 400002"]} />
            <a href="tel:+916394861699" className="block">
              <InfoCard icon={Phone} title="Phone" lines={["+91 63948 61699", "Mon–Sat · 9am – 7pm"]} />
            </a>
            <InfoCard icon={Mail} title="Email" lines={["hello@miturtle.com", "support@miturtle.com"]} />
            <a
              href="https://wa.me/916394861699"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-3xl glass-strong p-6 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--gradient-emerald)" }}>
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold">Chat on WhatsApp</div>
                  <div className="text-xs text-muted-foreground">+91 63948 61699 · live engineer</div>
                </div>
              </div>
              <Send className="size-4 text-emerald-glow" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl glass-strong p-2">
            <iframe
              title="MiTurtle Head Office — 149 Shamabai Tower, Charni Road, Mumbai"
              className="aspect-[16/10] md:aspect-[21/9] w-full rounded-2xl border-0"
              style={{ filter: "invert(0.92) hue-rotate(180deg)" }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.8125%2C18.9425%2C72.8275%2C18.9525&layer=mapnik&marker=18.9475%2C72.8200"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}{required && <span className="text-emerald-glow"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-dark"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl glass p-6">
      <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-emerald-dark/40 bg-emerald-dark/10 text-emerald-glow">
        <Icon className="size-5" />
      </span>
      <div className="mt-4 font-display text-lg font-bold">{title}</div>
      {lines.map((l) => (
        <div key={l} className="text-sm text-muted-foreground">{l}</div>
      ))}
    </div>
  );
}
