import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Users, Sprout, Mountain, ChevronDown } from "lucide-react";
import { useContactDialog } from "@/components/ContactDialog";
import { VantaGlobe } from "@/components/VantaGlobe";
import community from "@/assets/community.jpg";
import ghats from "@/assets/eastern-ghats.jpg";
import v1 from "@/assets/v1-carbon.jpg";
import v2 from "@/assets/v2-trade.jpg";
import v3 from "@/assets/v3-ecotourism.jpg";
import v4 from "@/assets/v4-incubator.jpg";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laya Green Ventures — Eastern Ghats Social Enterprise" },
      { name: "description", content: "Carbon, trade, ecotourism and incubation businesses building a sustainable economy in the Eastern Ghats." },
      { property: "og:title", content: "Laya Green Ventures" },
      { property: "og:description", content: "A values-driven social enterprise from the Eastern Ghats." },
    ],
  }),
  component: Home,
});

const verticals = [
  { to: "/verticals/carbon", title: "Carbon Solutions", desc: "Energy-efficient cookstoves & cleantech reducing CO₂ for communities.", img: v1, icon: Leaf },
  { to: "/verticals/trade", title: "Trade & Processing", desc: "A fair-trade hub connecting rural producers to global markets.", img: v2, icon: Sprout },
  { to: "/verticals/ecotourism", title: "Ecotourism", desc: "Authentic, low-impact travel rooted in nature and culture.", img: v3, icon: Mountain },
  { to: "/verticals/incubator", title: "Green Incubator", desc: "Mentorship & seed capital for early-stage green businesses.", img: v4, icon: Users },
] as const;

function Home() {
  const { open: openContact } = useContactDialog();
  
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
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .hero-3d-container {
        perspective: 1000px;
        transform-style: preserve-3d;
      }
      
      .verticals-3d-grid {
        perspective: 1200px;
        transform-style: preserve-3d;
      }
      
      .vertical-card-3d {
        transform-style: preserve-3d;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .vertical-card-3d:hover {
        transform: rotateY(5deg) rotateX(-5deg) scale(1.05) translateZ(20px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }
      
      .mission-card-3d {
        transform-style: preserve-3d;
        transition: all 0.4s ease;
      }
      
      .mission-card-3d:hover {
        transform: rotateY(2deg) translateZ(10px);
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
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .glass-3d {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transform-style: preserve-3d;
      }
      
      .glass-3d:hover {
        transform: translateZ(5px);
        background: rgba(255, 255, 255, 0.15);
      }
    `;
    if (!document.head.querySelector('style[data-home-animations]')) {
      style.setAttribute('data-home-animations', 'true');
      document.head.appendChild(style);
    }
    
    return () => {
      const existingStyle = document.head.querySelector('style[data-home-animations]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);
  
  return (
    <>
      {/* HERO with Vanta Globe */}
      <section className="relative h-screen min-h-[600px] overflow-hidden -mt-16 pt-16">
        <VantaGlobe className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.05_150/0.55)] via-[oklch(0.15_0.05_150/0.4)] to-[oklch(0.1_0.03_150/0.85)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 h-full flex flex-col justify-center hero-3d-container">
          <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full glass-3d text-[oklch(0.92_0.05_130)] text-xs uppercase tracking-[0.2em] mb-4 border border-white/15 whitespace-nowrap animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" /> Eastern Ghats · Andhra Pradesh
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white max-w-4xl leading-[1.1] animate-fade-in-up">
            Growing a <span className="text-gradient-leaf italic animate-float">greener</span> economy, one valley at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-white/85 leading-relaxed animate-fade-in-up-delay">
            Laya Green Ventures combines profitable enterprise with deep community trust to drive climate action,
            equitable trade and ecological wealth across North Coastal Andhra Pradesh.
          </p>
          <div className="mt-14 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start max-w-xs sm:max-w-none mx-auto sm:mx-0">
            <Link to="/verticals" className="group inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-leaf text-primary-foreground font-semibold shadow-glow hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-xs border border-white/20">
              Explore our verticals <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-dark border border-white/30 text-white font-medium hover:bg-white/15 hover:border-white/50 hover:scale-105 transition-all duration-300 text-xs">
              Our story
            </Link>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full glass-dark border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
              aria-label="Scroll down"
            >
              <ChevronDown 
                size={20} 
                className="text-white/80 group-hover:text-white transition-colors animate-bounce" 
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
              </section>

      {/* MISSION strip */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Our Mission</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-display font-semibold leading-tight">
              Profitable business with <span className="text-gradient-leaf">positive impact</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We blend strategic investment, incubation and operations to mitigate climate change,
              empower local communities, and operate with integrity, equity and compassion — creating
              a network of resilient enterprises across the Eastern Ghats and beyond.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm sm:text-base">
              Read the strategic plan <ArrowRight size={16} className="sm:size-18" />
            </Link>
          </div>
          <div className="relative mission-card-3d">
            <img src={ghats} alt="Eastern Ghats landscape" loading="lazy" width={1536} height={1024} className="rounded-2xl shadow-soft aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* VERTICALS grid */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Four Verticals</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-display font-semibold">Built on blended finance, rooted in the land.</h2>
            </div>
            <Link to="/verticals" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base">
              See all verticals <ArrowRight size={16} className="sm:size-18" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 verticals-3d-grid">
            {verticals.map((v, i) => (
              <Link
                key={v.to}
                to={v.to}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-glow transition-all border border-border vertical-card-3d"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`
                }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={v.img} alt={v.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.05_150/0.95)] via-[oklch(0.15_0.05_150/0.3)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">Vertical 0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 flex items-center gap-2">
                    <v.icon size={18} className="text-[var(--color-accent)]" /> {v.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">{v.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY band */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <img src={community} alt="Community partners in the Eastern Ghats" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-soft aspect-[4/3] object-cover" />
          </div>
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Ecosystem Advantage</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-display font-semibold leading-tight">
              Four decades of trust. <br className="hidden md:block" /> An <span className="text-gradient-leaf">unmatched</span> social license.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are part of the wider Laya ecosystem rooted in the hills between the Godavari and Nagavali —
              giving us deep community access, a ready operational network, and the legitimacy to act.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {[
                { n: "40+", l: "Years of community work" },
                { n: "4", l: "Business verticals" },
                { n: "10yr", l: "Strategic plan horizon" },
              ].map((s, i) => (
                <div key={s.l} className="rounded-xl bg-secondary/50 border border-border p-5 mission-card-3d hover:bg-secondary/70 transition-all duration-300" style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                }}>
                  <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/ecosystem" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm sm:text-base">
              Learn about the Laya ecosystem <ArrowRight size={16} className="sm:size-18" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-leaf p-10 md:p-16 text-primary-foreground shadow-glow">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight max-w-2xl">
                Partner with us to build the next decade.
              </h2>
              <p className="mt-5 text-white/90 text-base sm:text-lg max-w-2xl">
                Investors, collaborators, and community partners — let's grow a regenerative economy together.
              </p>
              <button onClick={() => openContact()} className="mt-8 inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white text-primary font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base border border-white/80">
                Get in touch <ArrowRight size={16} className="sm:size-18 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
