import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden border-t border-line bg-ink text-bone">
      <div className="pointer-events-none absolute -top-32 -right-20 size-80 rounded-full bg-ember/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="font-display max-w-[16ch] text-3xl leading-tight font-medium text-balance">
            Professor David's Career Navigation
          </p>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/" className="eyebrow link-underline text-bone/60 hover:text-bone">
              Home
            </Link>
            <Link to="/about" className="eyebrow link-underline text-bone/60 hover:text-bone">
              About
            </Link>
            <Link to="/process" className="eyebrow link-underline text-bone/60 hover:text-bone">
              Process
            </Link>
            <Link to="/apply" className="eyebrow link-underline text-bone/60 hover:text-bone">
              Apply Now
            </Link>
          </nav>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-bone/15 pt-6">
          <span className="eyebrow text-bone/40">Prof. David Wittenberg</span>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline text-bone/40 hover:text-bone"
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </footer>
  );
}
