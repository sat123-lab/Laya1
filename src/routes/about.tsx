import { createFileRoute } from "@tanstack/react-router";
import ghats from "@/assets/eastern-ghats.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Laya Green Ventures" },
      { name: "description", content: "Vision, mission and core values of Laya Green Ventures, a Visakhapatnam-based social enterprise." },
      { property: "og:title", content: "About — Laya Green Ventures" },
      { property: "og:description", content: "Vision, mission and core values driving our work in the Eastern Ghats." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Integrity", tag: "We do what we say, and say what we do.", body: "Every business action aligns with strong moral and ethical principles. We commit to unwavering honesty and transparency with tribal communities, business partners and impact investors alike — building enduring trust as a social enterprise." },
  { title: "Equity", tag: "We are in this to raise the tide, not just rise with it.", body: "Justice and fairness are embedded in our model — proactively addressing historical imbalances faced by our community partners. Our growth is shared, and every individual connected to us has the opportunity to thrive." },
  { title: "Compassion", tag: "We respect. We understand. We care. We act.", body: "Four decades in the Eastern Ghats have taught us empathy. We respect multiple paradigms, work toward common understanding, and place long-term ecological health and community welfare on equal footing with profit." },
];

function About() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <img src={ghats} alt="" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold">About us</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            A values-driven enterprise from the <span className="italic text-gradient-leaf">Eastern Ghats</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Headquartered in Visakhapatnam, Laya Green Ventures Pvt. Ltd. leverages the deep community roots
            of the broader Laya ecosystem in North Coastal Andhra Pradesh.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-card border border-border p-10 shadow-soft">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Vision</span>
            <p className="mt-5 font-display text-2xl md:text-3xl leading-snug text-foreground">
              To grow into a network of <span className="text-gradient-leaf">interconnected, high-impact</span> companies driving a sustainable and equitable economy across the Eastern Ghats and beyond.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-leaf text-primary-foreground p-10 shadow-glow">
            <span className="text-xs uppercase tracking-[0.25em] opacity-80 font-semibold">Mission</span>
            <p className="mt-5 font-display text-2xl md:text-3xl leading-snug">
              To combine profitable operations, strategic investments and incubation support with positive
              social and environmental impact — fostering resilient enterprises that mitigate climate change
              and empower local communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Core Values</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold max-w-3xl">Three principles we hold sacrosanct.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-8 shadow-soft hover:shadow-glow transition-shadow">
                <div className="text-6xl font-display font-bold text-[var(--color-accent)]/40 leading-none">0{i + 1}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 italic text-sm text-[var(--color-leaf)] font-medium">{v.tag}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={community} alt="Community" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-soft aspect-[4/3] object-cover" />
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Strategic Plan</span>
            <h2 className="mt-3 text-4xl font-display font-semibold leading-tight">A ten-year horizon: <br />March 2026 — March 2036.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Our plan utilises blended finance models across four business verticals, with measurable benchmarks,
              capital requirements and SMART goals across four phases — tracking progress toward our vision.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
