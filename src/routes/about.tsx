import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Professor David's Career Navigation" },
      {
        name: "description",
        content:
          "Professor David's Career Navigation grew from a personal search for the right professional target and decades of helping others define one for themselves.",
      },
      { property: "og:title", content: "Our Story — Professor David's Career Navigation" },
      {
        property: "og:description",
        content:
          "Self-discovery leads to better career choices than letting others define the path.",
      },
    ],
  }),
  component: About,
});

const story = [
  "I created Professor David's Career Navigation so that you can find the same success that I did.",
  "When I was a boy, my elders told me I would succeed at whatever career I chose. They believed that my talents and abilities were enough. However, they never guided me to discover a career that would allow me to leverage my talents and abilities for the greatest satisfaction, significance, and success.",
  "Without a clear target in mind, I tried several careers. I trusted my strengths, but I never considered my weaker points. Each time, I fell short of my goals.",
  "Finally, I attended a seminar in career and life planning. Through that seminar, I discovered exactly what I needed in order to find fulfillment and success in my professional life. I wrote down an ideal job description, the career of my dreams.",
  "Following that seminar, I embarked on a new career path. It took years, but I finally got my ideal job, precisely as I described it: to travel the world, dealing with people from different cultures in different languages, helping them to solve problems.",
  "I began coaching others who wanted to discover their ideal career direction. Over the years, I refined and enhanced the process. But, working alone, I could only offer it to a few people.",
  "The desire to reach more people with my coaching came after I moved to India. Here, many careers are chosen by loving parents and shaped by recruiters and employers. That works for some people, but for too many others, careers are unsatisfying, even if they provide high status and a good living. My experience taught me that self-discovery leads to better career choices than trusting others to direct us.",
  "So, I wrote 12 Secrets to Reach Your Goals in Work and Life to show Indian young people how to plan and prepare for career success. The last chapter of the book contains an abbreviated version of my career discovery process. But the book, too, could reach only a limited number of people.",
  "In 2026, I realized that AI technology could enable me to reach more people with my process. I trained an AI guide to counsel applicants using my approach and my exercises. A virtual guide makes the process affordable so that many more people can benefit the way I benefited years ago. I invite you to experience Professor David's Career Navigation for yourself and discover the career that is right for you.",
];

function About() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -top-28 -right-24 size-[28rem] rounded-full bg-brass/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-20">
          <Reveal>
            <p className="eyebrow text-ember">About us</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 text-6xl leading-[0.95] font-medium tracking-tight md:text-8xl">
              Our Story
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-10 max-w-[58ch] text-lg leading-relaxed text-ink-soft text-pretty">
              Professor David's Career Navigation grew from a personal search for the right
              professional target and decades of helping others define one for themselves.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <blockquote className="font-display max-w-[24ch] text-3xl leading-tight font-light text-balance md:text-5xl">
              Professor David's Career Navigation
              <span className="text-ember">
                Self-discovery leads to better career choices than letting others define the
                path.
              </span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 lg:col-start-4">
            <div className="space-y-7">
              {story.map((p, i) => (
                <Reveal key={i} delay={30}>
                  <p
                    className={
                      i === 0
                        ? "font-display text-2xl leading-snug font-light text-pretty"
                        : "text-[17px] leading-[1.85] text-ink-soft text-pretty"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
