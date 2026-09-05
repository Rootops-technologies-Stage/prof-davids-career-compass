import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Your Career Navigation Process — Prof. David Wittenberg" },
      {
        name: "description",
        content:
          "A multi-step process of self-discovery to select the ideal career for you based on your unique personality, profile, passions, and preferences.",
      },
      { property: "og:title", content: "Your Career Navigation Process" },
      {
        property: "og:description",
        content:
          "Onboarding, introspection, exploration, and a practical roadmap to make it happen.",
      },
    ],
  }),
  component: Process,
});

const steps = [
  {
    n: "01",
    title: "Step 1: Onboarding",
    body: "During enrollment, you will complete a short online assessment to determine your personality type according to the world's most popular personality-type framework. You'll also upload your resume (if you have one). This will enable your guide to get to know you.",
  },
  {
    n: "02",
    title: "Step 2: Introspection",
    body: "Once you're on board, you'll receive short, written exercises (a few words to a few paragraphs) to complete at your own pace. The first four exercises focus on self-assessment. After each exercise, you'll meet with your guide to look for insights about what motivates and satisfies you, as well as what makes you feel good about yourself. This step is divergent, designed to identify a number of potential careers that might be right for you.",
  },
  {
    n: "03",
    title: "Step 3: Exploration",
    body: "Exercises 5-7 shift the focus from yourself to your dream job. After each exercise, your guide will review your work with you to understand what your ideal job must include and what should not be included for you to achieve satisfaction and success. This step is convergent, designed to narrow the list to a single, best career for you. Your guide will show you how to research the jobs on your short list to discover what they're really like. Finally, in Exercise 7, you will put together everything you've learned about yourself and your career options to imagine, design, and craft your ideal job description. That job description, created by you and for you, will give you a direction and a target for your career journey.",
  },
  {
    n: "04",
    title: "Step 4: Make it Happen",
    body: "The process doesn't end when the exercises are done. Together with your guide, you'll create a roadmap for developing the skills, experience, and other assets you need to reach your career goal. You'll receive a rewritten resume and cover letter to give you an edge over other candidates. Your guide will coach you in networking and interviewing. And, because careers evolve, your enrollment includes up to three additional check-ins with your guide over the following five years, to review your progress, address new challenges, and keep you on course.",
  },
];

const faqs = [
  {
    q: "How long does the discovery process last?",
    a: "That's entirely up to you. We recommend that you complete each exercise carefully and thoughtfully. Then, explore your work thoroughly during your interaction with your guide. Theoretically, you could define your dream job in as little as two weeks. Most people take from one to three months to get there.",
  },
  {
    q: "Can I use AI to write my exercises?",
    a: "We strongly advise against having AI write your exercises. Your guide pays close attention not only to what you write, but also to the words you choose. They often reveal important aspects of your personality that you may not be aware of yourself. When AI writes or edits your answers, this valuable source of insight disappears, making the process less effective. And remember: this is not an exam. Your guide will never criticize or judge your writing. The more honestly you express yourself, in your own words, the more effectively the process can help you discover the job that's right for the real you.",
  },
  {
    q: "Will my guide tell me the job that's best for me?",
    a: "No. The only person who can define your ideal job is you. Your expert guide's role is to mentor you through a process of self-discovery. Your guide will identify signals in your exercises that point toward potential matches and suggest career possibilities you may never have considered. But you will make the final decision. Your guide will walk with you until you, and you alone, are confident that the dream job you have defined meets your requirements.",
  },
  {
    q: "What if I already have a career in mind?",
    a: "That's perfectly fine. Whether you're a student or a professional, you already have ideas or experience with a career choice. The process is designed to test how well that choice fits your personality, profile, passions, and preferences. Your current direction might be ideal as it is. You might identify one specific job in your field where you can shine. Or, you might discover that a completely different field would be an even better fit. The goal of the process is to make sure that the career you ultimately choose is genuinely right for you.",
  },
  {
    q: "What happens after the discovery process?",
    a: "Professor David's Career Navigation is committed to your success over the long term. Even after you complete your journey of self-discovery and write your ideal job description, your guide will coach you in the next step. And, it doesn't end there. Over the next five years, you'll be entitled to three sessions with your guide to review your progress, discuss your questions, and keep you on track.",
  },
  {
    q: "Can you guarantee that I'll reach my career goal?",
    a: "We encourage everyone to aim high. An ideal job description should include everything that you want in your work and nothing that would be less than perfect. With your dream job as the target, armed with the road map you'll create with your guide, you'll be equipped to make smart career moves at every stage. Even if circumstances don't allow you to fulfill every wish on your list, you'll get much closer to your goal than people who let others dictate their careers or who never discover their aspirations and preferences.",
  },
];

function Process() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -top-32 -left-24 size-[26rem] rounded-full bg-ember/12 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-20">
          <Reveal>
            <p className="eyebrow text-ember">Process</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 max-w-[16ch] text-5xl leading-[0.98] font-medium tracking-tight text-balance md:text-7xl">
              Your Career Navigation Process
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-soft text-pretty">
              Your expert co-pilot will guide you through a multi-step process of
              self-discovery to select the ideal career for you based on your unique
              personality, profile, passions, and preferences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative pl-8 md:pl-14">
          <span className="absolute top-3 bottom-3 left-[3px] w-px bg-line md:left-[9px]" />
          <div className="space-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 60} className="group relative">
                <span className="absolute top-2 -left-8 size-[7px] rounded-full bg-ember ring-6 ring-ember/15 transition-transform duration-500 group-hover:scale-150 md:-left-14 md:size-[19px] md:ring-8" />
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-4">
                    <span className="font-mono text-[11px] text-ember">{s.n}</span>
                    <h2 className="font-display mt-3 text-3xl leading-tight font-medium tracking-tight">
                      {s.title}
                    </h2>
                  </div>
                  <p className="col-span-12 text-[17px] leading-[1.85] text-ink-soft text-pretty md:col-span-8">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink text-bone">
        <div className="pointer-events-none absolute -bottom-40 -right-20 size-[28rem] rounded-full bg-ember/12 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 py-24">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-ember-soft">FAQ</p>
              <h2 className="font-display mt-5 text-4xl leading-tight font-medium tracking-tight text-balance">
                Questions parents and applicants often ask
              </h2>
              <Link
                to="/apply"
                className="eyebrow group mt-10 inline-flex items-center gap-3 border border-bone/40 px-7 py-4 transition-colors duration-300 hover:bg-bone hover:text-ink"
              >
                Apply now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-bone/15"
                >
                  <AccordionTrigger className="font-display gap-6 py-6 text-left text-xl font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 text-[15px] leading-relaxed text-bone/65 text-pretty">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
