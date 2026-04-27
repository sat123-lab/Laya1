import { createFileRoute } from "@tanstack/react-router";
import { Handshake, ShieldCheck, Network, Lightbulb } from "lucide-react";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "The Laya Ecosystem — Laya Green Ventures" },
      { name: "description", content: "Four decades of trust, access and integrated problem-solving across the Eastern Ghats." },
      { property: "og:title", content: "The Laya Ecosystem" },
      { property: "og:description", content: "Deep community trust and a ready operational network." },
      { property: "og:image", content: community },
    ],
  }),
  component: Ecosystem,
});

const advantages = [
  { icon: Handshake, title: "Deep community trust & access", body: "Four decades of work in the hills between the Godavari and Nagavali have built strong relationships of mutual trust, giving us insider access to communities, traditional knowledge and local resources." },
  { icon: ShieldCheck, title: "Authentic social license", body: "Various initiatives of the Laya ecosystem to improve social and economic conditions of tribal populations have produced lasting positive outcomes — and inherent legitimacy with local populations." },
  { icon: Network, title: "Ready network for operations", body: "An established network of people, facilities and institutions enables rapid scaling — sourcing networks are partially in place, communities are known, and project sites are identifiable through existing connections." },
  { icon: Lightbulb, title: "Integrated problem-solving", body: "Challenges identified by Laya Resource Center are first piloted at small scale and then expanded through market mechanisms — keeping ventures relevant, impactful and aligned with real community needs." },
];

function Ecosystem() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <img src={community} alt="" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold">Ecosystem Advantage</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            One ecosystem. <span className="italic text-gradient-leaf">Many entities.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Laya Green Ventures is one of multiple entities that make up the Laya ecosystem — anchored by the
            Laya Resource Center, the largest and oldest entity, which provides our foundational values and purpose.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-semibold max-w-3xl">Our synergy is our strength.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-2xl bg-card border border-border p-8 shadow-soft hover:shadow-glow transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-gradient-leaf flex items-center justify-center text-primary-foreground mb-5">
                  <a.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">{a.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-display text-3xl md:text-4xl leading-snug text-foreground">
            "We are now bringing market mechanisms to further the work of the ecosystem — extending decades of
            community engagement through profitable, regenerative enterprise."
          </p>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">— The Laya Green Ventures Team</div>
        </div>
      </section>
    </>
  );
}
