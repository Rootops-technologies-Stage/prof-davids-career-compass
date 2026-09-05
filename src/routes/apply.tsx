import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply Now — Professor David's Career Navigation" },
      {
        name: "description",
        content:
          "Your Journey Starts Now. Seven career-navigation exercises, personal counseling, and a practical roadmap to your ideal career.",
      },
      { property: "og:title", content: "Apply Now — Professor David's Career Navigation" },
      { property: "og:description", content: "Your Journey Starts Now." },
    ],
  }),
  component: Apply,
});

const receive = [
  "Seven career-navigation exercises developed by Professor David",
  "Online counseling after each exercise to uncover hidden keys to your perfect career fit",
  "Specific career recommendations for you to explore and evaluate",
  "Personalized career mentoring as you define your unique, ideal job",
  "Strategies for a successful job search that most candidates don't use",
  "A professionally rewritten resume and cover letter designed for maximum impact",
];

const fieldClass =
  "mt-2 w-full border-b border-ink/25 bg-transparent px-0 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-ember placeholder:text-ink/25";

function Apply() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="grain relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -top-24 right-1/4 size-[26rem] rounded-full bg-brass/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-20">
          <Reveal>
            <p className="eyebrow text-ember">Apply Now</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 text-6xl leading-[0.95] font-medium tracking-tight md:text-8xl">
              Your Journey Starts Now
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-9 max-w-[62ch] text-lg leading-relaxed text-ink-soft text-pretty">
              Professor David's Career Navigation is a guided journey where you'll mine for
              treasure within yourself. Through a series of short, written exercises, you'll
              identify all the factors that will make your career everything you want it to
              be: satisfying, productive, and successful.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow text-ember">Here's what you'll receive:</p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-12 gap-x-8">
          {receive.map((r, i) => (
            <Reveal
              as="li"
              key={r}
              delay={i * 60}
              className="group col-span-12 flex items-baseline gap-6 border-t border-line py-6 md:col-span-6"
            >
              <span className="font-mono text-[11px] text-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[17px] leading-relaxed text-ink-soft transition-transform duration-500 group-hover:translate-x-1 text-pretty">
                {r}
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-sand">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 py-24">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight font-medium tracking-tight">
                Application
              </h2>
              <p className="mt-3 text-ink-soft">Tell us where you are starting from</p>
            </Reveal>
            <Reveal delay={90}>
              <form
                className="mt-10 space-y-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast("Application", { description: "Tell us where you are starting from" });
                }}
              >
                <label className="block">
                  <span className="eyebrow text-ink-soft">Full name</span>
                  <input type="text" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="eyebrow text-ink-soft">Mobile</span>
                  <input type="tel" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="eyebrow text-ink-soft">City of Residence</span>
                  <input type="text" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="eyebrow text-ink-soft">I am a</span>
                  <input type="text" className={fieldClass} />
                </label>
                <label className="block">
                  <span className="eyebrow text-ink-soft">Work Experience</span>
                  <input type="text" className={fieldClass} />
                </label>
                <button
                  type="submit"
                  className="eyebrow group inline-flex items-center gap-3 bg-ink px-7 py-4 text-bone transition-colors duration-300 hover:bg-ember"
                >
                  Apply now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
                {sent && (
                  <p className="eyebrow text-ember">Application</p>
                )}
              </form>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <div className="border border-ink/20 bg-bone p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-xl font-medium">Career Discovery</p>
                  <p className="font-display text-2xl font-light">&#8377;14,950</p>
                </div>
                <p className="eyebrow mt-2 text-ink-soft">includes GST</p>

                <div className="mt-8 border-t border-ink/15 pt-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-xl font-medium">Introductory Offer</p>
                    <p className="font-display text-3xl font-medium text-ember">FREE</p>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft text-pretty">
                    For a limited time, selected applicants can experience Professor David's
                    Career Navigation free of charge. Apply today to see if you qualify.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="grain relative mt-8 overflow-hidden bg-ink p-8 text-bone">
                <div className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-brass/20 blur-2xl" />
                <p className="font-display relative text-xl font-medium">
                  Bonus: Professor David's Success Guide
                </p>
                <p className="relative mt-4 text-[15px] leading-relaxed text-bone/70 text-pretty">
                  Applicants selected for the introductory offer will also receive, free of
                  charge, a copy of Professor David's 12 Secrets to Reach Your Goals in Work
                  and Life. This groundbreaking book explores the ingredients for success that
                  most parents, teachers, and employers never talk about. More than theory, 12
                  Secrets contains practical exercises for developing the traits and skills
                  that employers and customers value and reward.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
