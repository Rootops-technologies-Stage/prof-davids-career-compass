import { createFileRoute, Link } from "@tanstack/react-router";

import davidPortrait from "@/assets/prof-david.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professor David's Career Navigation" },
      {
        name: "description",
        content:
          "A career you'll love that's right for the real you. Structured self-discovery guided by Prof. David Wittenberg.",
      },
      { property: "og:title", content: "Professor David's Career Navigation" },
      {
        property: "og:description",
        content: "A career you'll love that's right for the real you.",
      },
    ],
  }),
  component: Home,
});

const method = [
  {
    n: "01",
    title: "Write in your own words",
    body: "Short exercises reveal the motives, standards, satisfactions, and patterns that are easy to miss in ordinary career advice",
  },
  {
    n: "02",
    title: "Look for signals",
    body: "Your guide reviews each response carefully, identifying career possibilities and questions that deserve deeper exploration.",
  },
  {
    n: "03",
    title: "Define the target",
    body: "You narrow the possibilities into an ideal job description and a practical path for moving toward it.",
  },
];

const discover = [
  ["Your unique strengths", "the abilities and qualities that distinguish you from others"],
  [
    "Your passions and interests",
    "the activities and subjects that naturally engage you",
  ],
  [
    "Your values and preferences",
    "every important aspect that you need from your work",
  ],
  ["Your personality", "how you naturally think, work, communicate, and make decisions"],
  [
    "Your ideal job",
    "the single, best fit that will maximize your satisfaction and success",
  ],
  [
    "Your path forward",
    "practical next steps for turning your discoveries into a successful career",
  ],
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="float-slow absolute -top-24 -left-32 size-[26rem] rounded-full bg-brass/25 blur-3xl" />
          <div className="float-slow absolute top-40 -right-28 size-[22rem] rounded-full bg-ember/15 blur-3xl [animation-delay:2s]" />
          <svg className="absolute inset-0 size-full opacity-[0.35]" aria-hidden="true">
            <defs>
              <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
                <path
                  d="M56 0H0V56"
                  fill="none"
                  stroke="currentColor"
                  className="text-ink/8"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 pt-16 pb-20 md:pt-24">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-ember">Professor David's Career Navigation</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="font-display mt-7 text-5xl leading-[0.98] font-medium tracking-tight text-balance md:text-7xl">
                A career you'll{" "}
                <em className="relative inline-block font-light text-ember italic">
                  love
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="10"
                    viewBox="0 0 200 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7C40 2 160 2 198 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-brass"
                    />
                  </svg>
                </em>{" "}
                that's right for the real you
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 max-w-[54ch] text-lg leading-relaxed text-ink-soft text-pretty">
                Start your journey to a career that's perfect for you. A career that fits your
                unique personality, profile, passions, and preferences. Your expert career
                co-pilot will guide you toward the path where you can reach your full
                potential.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-10 space-y-3 border-l border-line pl-6">
                {[
                  "Structured self-discovery, not a generic career test",
                  "Personal review after each exercise",
                  "A practical roadmap after you define the career you want",
                ].map((item) => (
                  <li key={item} className="relative text-[15px] text-ink-soft">
                    <span className="absolute top-2.5 -left-[26px] size-1.5 rounded-full bg-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/apply"
                  className="eyebrow group inline-flex items-center gap-3 bg-ink px-7 py-4 text-bone transition-colors duration-300 hover:bg-ember"
                >
                  Apply now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                <Link
                  to="/process"
                  className="eyebrow link-underline inline-flex items-center gap-2 text-ink"
                >
                  See the process
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={200} className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full border border-ink/25" />
              <img
                src={davidPortrait}
                alt="Prof. David Wittenberg"
                width={1024}
                height={1280}
                className="relative aspect-4/5 w-full object-cover"
              />
              <div className="relative -mt-14 mr-4 ml-8 border border-line bg-bone/95 px-5 py-4 backdrop-blur">
                <p className="eyebrow text-ember">Your Career Co-Pilot</p>
                <p className="font-display mt-1.5 text-xl font-medium">
                  Prof. David Wittenberg
                </p>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow link-underline mt-1.5 inline-block text-ink-soft"
                >
                  LinkedIn profile
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 py-24">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-ember">Your Career Co-Pilot</p>
              <h2 className="font-display mt-4 text-4xl leading-tight font-medium tracking-tight">
                Prof. David Wittenberg
              </h2>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="eyebrow link-underline mt-4 inline-block text-ink-soft"
              >
                LinkedIn profile
              </a>
              <div className="mt-10 space-y-6 border-t border-line pt-8">
                {[
                  ["30", "years counseling"],
                  ["12", "secrets"],
                  ["4", "continents"],
                ].map(([n, l]) => (
                  <div key={l} className="flex items-baseline gap-4">
                    <span className="font-display text-4xl font-light text-ember">{n}</span>
                    <span className="eyebrow text-ink-soft">{l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 space-y-6 lg:col-span-7 lg:col-start-6">
            {[
              "Professor David Wittenberg has been counseling students and professionals for more than 30 years. The author of 12 Secrets to Reach Your Goals in Work and Life: A Success Guide for Young Indians, his career discovery process goes beyond standardized tests to uncover each person's individual goals, values, dreams, strengths, and potential.",
              "In a career spanning more than five decades, Professor David has advised, trained, and coached CXOs and managers at Reliance, Tata, Godrej, American Express, Nestle, Dell, and other leading Indian and multinational corporations on four continents. He has also taught thousands of students in India and the Americas as a Professor of Entrepreneurial Innovation and as a guest lecturer.",
              "Drawing on his experience in innovation, strategy, leadership, and psychology, David created a unique, highly effective career-discovery process. For years, he offered it only to people he counseled personally.",
              "Now, you can find your own path to success with Professor David's Career Navigation.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p
                  className={
                    i === 0
                      ? "font-display text-2xl leading-snug font-light text-pretty"
                      : "text-[17px] leading-relaxed text-ink-soft text-pretty"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="grain overflow-hidden border-y border-line bg-sand py-5">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-12">
              {["Reliance", "Tata", "Godrej", "American Express", "Nestle", "Dell"].map(
                (b) => (
                  <span
                    key={b}
                    className="font-display flex items-center gap-12 text-2xl font-light text-ink/50"
                  >
                    {b}
                    <span className="size-1.5 rounded-full bg-ember/60" />
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* METHOD */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-12 gap-8">
          {method.map((m, i) => (
            <Reveal
              key={m.n}
              delay={i * 110}
              className="group col-span-12 border-t border-ink/25 pt-6 md:col-span-4"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl font-light text-ink/20 transition-colors duration-500 group-hover:text-ember">
                  {m.n}
                </span>
                <span className="size-2 rounded-full bg-ember opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <h3 className="font-display mt-6 text-2xl leading-snug font-medium">
                {m.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft text-pretty">
                {m.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DISCOVER */}
      <section className="grain relative overflow-hidden bg-ink text-bone">
        <div className="pointer-events-none absolute -top-40 left-1/3 size-[30rem] rounded-full bg-ember/12 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 py-24">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
                Discover Your Ideal Career
              </h2>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-bone/70 text-pretty">
                A career that's right for you is more than a job that matches your
                qualifications. It's a career that aligns with who you are, what you value,
                what you enjoy, and what you excel at.
              </p>
              <Link
                to="/apply"
                className="eyebrow group mt-10 inline-flex items-center gap-3 border border-bone/40 px-7 py-4 text-bone transition-colors duration-300 hover:bg-bone hover:text-ink"
              >
                Apply now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow text-ember-soft">What You'll Discover</p>
            </Reveal>
            <ul className="mt-6 divide-y divide-bone/15">
              {discover.map(([title, body], i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 70}
                  className="group flex items-baseline gap-6 py-5"
                >
                  <span className="font-mono text-[11px] text-ember-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-xl font-medium transition-transform duration-500 group-hover:translate-x-1">
                      {title}
                    </p>
                    <p className="mt-1 text-sm text-bone/60">{body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
