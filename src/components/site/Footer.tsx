import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 md:mt-32 border-t border-white/5 pt-16 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-dark/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:text-left">

          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="https://ik.imagekit.io/f1iw3r6um/logo.jpeg"
                alt="MiTurtle Global Automations"
                className="h-auto w-40 md:w-56 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="mt-6 mx-auto md:mx-0 max-w-md text-sm leading-relaxed text-muted-foreground">
              MiTurtle® engineers the next generation of smart
              traffic and access automation — precision boom
              barriers, sliding gate motors, and intelligent
              control systems built for enterprise-grade reliability.
            </p>

            <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-dark/40 bg-emerald-dark/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-emerald-glow">
              Innovate · Integrate · Inspire
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Explore
            </h4>

            <ul className="mt-5 space-y-4 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Reach Us
            </h4>

            <ul className="mt-5 space-y-5 text-sm text-muted-foreground">

              <li className="flex items-start justify-center gap-3 md:justify-start">
                <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-glow" />
                <span>
                  149 Shamabai Tower, Thakurdwar,
                  Charni Road, Mumbai – 400002
                </span>
              </li>

              <li className="flex items-center justify-center gap-3 md:justify-start">
                <Phone className="size-4 shrink-0 text-emerald-glow" />

                <a
                  href="tel:+916394861699"
                  className="transition-colors hover:text-white"
                >
                  +91 63948 61699
                </a>
              </li>

              <li className="flex items-center justify-center gap-3 md:justify-start">
                <Mail className="size-4 shrink-0 text-emerald-glow" />

                <a
                  href="mailto:sales@miturtle.com"
                  className="transition-colors hover:text-white"
                >
                  sales@miturtle.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground md:flex-row md:text-left">

          <p>
            © {new Date().getFullYear()} MiTurtle®.
            All rights reserved.
          </p>

          <p>
            Engineered for global automation.
          </p>
        </div>
      </div>
    </footer>
  );
}
