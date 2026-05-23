import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 md:py-3" : "py-3 md:py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2 sm:px-5 sm:py-2.5 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : ""
        }`}
        style={{ width: "calc(100% - 1rem)", maxWidth: "calc(100% - 1rem)" }}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10">
            <img
              src="https://ik.imagekit.io/f1iw3r6um/logo.jpeg"
              alt="Mi Turtle Global Automations logo"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <span className="absolute -inset-1 rounded-xl opacity-30 blur-md transition-opacity group-hover:opacity-60"
              style={{ background: "var(--gradient-emerald)" }} />
          </span>
          <div className="leading-none">
            <div className="font-display text-lg font-bold tracking-tight">MiTurtle<sup className="ml-0.5 text-[0.55rem] text-muted-foreground">®</sup></div>
            <div className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">Global Automations</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-medium text-foreground bg-white/5" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-xs">Get a Quote</Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] active:scale-95 transition-transform"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu — overlay + slide-down panel, locked above content */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>
      <div
        className={`md:hidden fixed inset-x-3 top-[4.5rem] z-50 origin-top rounded-2xl glass-strong p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-3 scale-[0.98] pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-[0.95rem] font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "rounded-xl px-4 py-3.5 text-[0.95rem] font-medium bg-white/5 text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a href="tel:+916394861699" className="btn-ghost !py-3 text-xs justify-center">Call</a>
            <a href="https://wa.me/916394861699" target="_blank" rel="noopener noreferrer" className="btn-primary !py-3 text-xs justify-center">WhatsApp</a>
          </div>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 !py-3">Get a Quote</Link>
        </div>
      </div>
    </header>
  );
}
