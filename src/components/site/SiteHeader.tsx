import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/apply", label: "Apply Now" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-line bg-bone/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-baseline gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-[20deg]">
            <span className="font-display text-sm">D</span>
          </span>
          <span className="font-display text-[1.05rem] leading-none font-medium tracking-tight">
            Professor David's
          </span>
          <span className="eyebrow hidden text-ember sm:inline">Career Navigation</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.slice(0, 3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow link-underline text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/apply"
            className="eyebrow border border-ink px-5 py-2.5 text-ink transition-colors duration-300 hover:bg-ink hover:text-bone"
          >
            Apply Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bone px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="eyebrow text-ink-soft"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
