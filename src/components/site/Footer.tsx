import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 md:mt-32 border-t border-white/5 pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-dark/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-emerald)" }}>
                <span className="text-base font-black">M</span>
              </span>
              <span className="font-display text-xl font-bold">MiTurtle<sup className="text-[0.55rem] text-muted-foreground">®</sup></span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              MiTurtle® engineers the next generation of smart traffic and access automation —
              precision boom barriers, sliding gate motors, and intelligent control systems
              built for enterprise-grade reliability.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-dark/40 bg-emerald-dark/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-emerald-glow">
              Innovate · Integrate · Inspire
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Reach Us</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-emerald-glow" /> 149 Shamabai Tower, Thakurdwar, Charni Road, Mumbai – 400002</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-emerald-glow" /> +91 63948 61699</li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-emerald-glow" /> hello@miturtle.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} MiTurtle®. All rights reserved. MiTurtle is a registered trademark.</p>
          <p>Engineered for global automation.</p>
        </div>
      </div>
    </footer>
  );
}
