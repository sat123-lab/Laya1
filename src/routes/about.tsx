import { createFileRoute } from "@tanstack/react-router";
import ghats from "@/assets/eastern-ghats.jpg";
import community from "@/assets/community.jpg";
import { useEffect } from "react";

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
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px) rotateX(-10deg);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px) rotateY(-15deg);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotateY(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px) rotateY(15deg);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotateY(0);
        }
      }
      
      @keyframes rotateIn3d {
        from {
          opacity: 0;
          transform: rotateY(-90deg) scale(0.8);
        }
        to {
          opacity: 1;
          transform: rotateY(0) scale(1);
        }
      }
      
      .about-hero-3d {
        perspective: 1000px;
        transform-style: preserve-3d;
      }
      
      .values-3d-grid {
        perspective: 1200px;
        transform-style: preserve-3d;
      }
      
      .value-card-3d {
        transform-style: preserve-3d;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .value-card-3d:hover {
        transform: rotateY(8deg) rotateX(-5deg) scale(1.05) translateZ(30px);
        box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
      }
      
      .vision-card-3d {
        transform-style: preserve-3d;
        transition: all 0.4s ease;
      }
      
      .vision-card-3d:hover {
        transform: rotateY(3deg) translateZ(15px);
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .animate-fade-in-up-delay {
        animation: fadeInUp 0.8s ease-out 0.2s both;
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out;
      }
      
      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out;
      }
      
      .animate-rotate-in-3d {
        animation: rotateIn3d 0.8s ease-out;
      }
    `;
    if (!document.head.querySelector('style[data-about-animations]')) {
      style.setAttribute('data-about-animations', 'true');
      document.head.appendChild(style);
    }
    
    return () => {
      const existingStyle = document.head.querySelector('style[data-about-animations]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);
  
  return (
    <>
      <section className="relative py-32 overflow-hidden about-hero-3d">
        <img src={ghats} alt="" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold animate-fade-in-up">About us</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl animate-fade-in-up">
            A values-driven enterprise from the <span className="italic text-gradient-leaf">Eastern Ghats</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up-delay">
            Headquartered in Visakhapatnam, Laya Green Ventures Pvt. Ltd. leverages the deep community roots
            of the broader Laya ecosystem in North Coastal Andhra Pradesh.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-card border border-border p-10 shadow-soft vision-card-3d animate-slide-in-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Vision</span>
            <p className="mt-5 font-display text-2xl md:text-3xl leading-snug text-foreground">
              To grow into a network of <span className="text-gradient-leaf">interconnected, high-impact</span> companies driving a sustainable and equitable economy across the Eastern Ghats and beyond.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-leaf text-primary-foreground p-10 shadow-glow vision-card-3d animate-slide-in-right">
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
          <div className="mt-12 grid md:grid-cols-3 gap-6 values-3d-grid">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-8 shadow-soft hover:shadow-glow transition-shadow value-card-3d" style={{
                animation: `rotateIn3d 0.8s ease-out ${i * 0.15}s both`
              }}>
                <div className="text-6xl font-display font-bold text-[var(--color-accent)]/40 leading-none transition-transform duration-300 group-hover:scale-110">0{i + 1}</div>
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
          <div className="vision-card-3d animate-slide-in-left">
            <img src={community} alt="Community" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-soft aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="animate-slide-in-right">
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
