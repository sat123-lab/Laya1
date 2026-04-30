import { createFileRoute } from "@tanstack/react-router";
import { Handshake, ShieldCheck, Network, Lightbulb } from "lucide-react";
import community from "@/assets/community.jpg";
import { useEffect } from "react";

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
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .ecosystem-hero-3d {
        perspective: 1000px;
        transform-style: preserve-3d;
      }
      
      .advantages-3d-grid {
        perspective: 1200px;
        transform-style: preserve-3d;
      }
      
      .advantage-card-3d {
        transform-style: preserve-3d;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .advantage-card-3d:hover {
        transform: rotateY(8deg) rotateX(-5deg) scale(1.05) translateZ(30px);
        box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
      }
      
      .advantage-icon-3d {
        transform-style: preserve-3d;
        transition: all 0.3s ease;
      }
      
      .advantage-icon-3d:hover {
        transform: rotateZ(10deg) scale(1.1) translateZ(10px);
      }
      
      .quote-3d {
        perspective: 800px;
        transform-style: preserve-3d;
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
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    if (!document.head.querySelector('style[data-ecosystem-animations]')) {
      style.setAttribute('data-ecosystem-animations', 'true');
      document.head.appendChild(style);
    }
    
    return () => {
      const existingStyle = document.head.querySelector('style[data-ecosystem-animations]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);
  
  return (
    <>
      <section className="relative py-32 overflow-hidden ecosystem-hero-3d">
        <img src={community} alt="" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold animate-fade-in-up">Ecosystem Advantage</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl animate-fade-in-up">
            One ecosystem. <span className="italic text-gradient-leaf animate-float">Many entities.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up-delay">
            Laya Green Ventures is one of multiple entities that make up the Laya ecosystem — anchored by the
            Laya Resource Center, the largest and oldest entity, which provides our foundational values and purpose.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-semibold max-w-3xl animate-fade-in-up">Our synergy is our strength.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6 advantages-3d-grid">
            {advantages.map((a, i) => (
              <div key={a.title} className="rounded-2xl bg-card border border-border p-8 shadow-soft hover:shadow-glow transition-shadow advantage-card-3d" style={{
                animation: `rotateIn3d 0.8s ease-out ${i * 0.15}s both`
              }}>
                <div className="h-12 w-12 rounded-xl bg-gradient-leaf flex items-center justify-center text-primary-foreground mb-5 advantage-icon-3d">
                  <a.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">{a.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40 quote-3d">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-display text-3xl md:text-4xl leading-snug text-foreground animate-fade-in-up">
            "We are now bringing market mechanisms to further the work of the ecosystem — extending decades of
            community engagement through profitable, regenerative enterprise."
          </p>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground animate-fade-in-up-delay">— The Laya Green Ventures Team</div>
        </div>
      </section>
    </>
  );
}
