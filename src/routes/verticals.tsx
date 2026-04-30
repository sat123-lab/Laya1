import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Leaf, Sprout, Mountain, Users, ArrowUpRight } from "lucide-react";
import imgCarbon from "@/assets/v1-carbon.jpg";
import imgTrade from "@/assets/v2-trade.jpg";
import imgEco from "@/assets/v3-ecotourism.jpg";
import imgInc from "@/assets/v4-incubator.jpg";
import { useEffect } from "react";

export const Route = createFileRoute("/verticals")({
  head: () => ({
    meta: [
      { title: "Business Verticals — Laya Green Ventures" },
      { name: "description", content: "Four verticals: carbon solutions, trade & processing, ecotourism, and a green business incubator." },
      { property: "og:title", content: "Verticals — Laya Green Ventures" },
      { property: "og:description", content: "Carbon, trade, ecotourism and incubation." },
    ],
  }),
  component: VerticalsLayout,
});

const verticals = [
  {
    to: "/verticals/carbon",
    label: "Carbon Solutions",
    icon: Leaf,
    image: imgCarbon,
    tag: "Vertical 01",
    headline: "Cleaner stoves. Measurable carbon.",
    summary:
      "Energy-efficient cookstoves and bioenergy systems built for rural households and industry across North Coastal Andhra Pradesh — driving real, verifiable CO₂ reduction.",
    bullets: ["Energy-efficient cookstoves", "Voluntary carbon credit pathways", "Advanced bioenergy systems"],
  },
  {
    to: "/verticals/trade",
    label: "Trade & Processing",
    icon: Sprout,
    image: imgTrade,
    tag: "Vertical 02",
    headline: "Farm to fair-trade global market.",
    summary:
      "A hub-and-spoke network connecting decentralised rural producers and small-scale processors directly to premium global markets — with fair prices and shared value.",
    bullets: ["Producer & processor network", "Quality aggregation & branding", "Direct global linkage"],
  },
  {
    to: "/verticals/ecotourism",
    label: "Ecotourism",
    icon: Mountain,
    image: imgEco,
    tag: "Vertical 03",
    headline: "Travel that gives back to the land.",
    summary:
      "Authentic, low-impact experiences across the Eastern Ghats — nature, adventure, culture and cuisine, all woven into community livelihoods and conservation.",
    bullets: ["Nature & adventure trails", "Cultural & culinary immersion", "Community-led conservation"],
  },
  {
    to: "/verticals/incubator",
    label: "Green Incubator",
    icon: Users,
    image: imgInc,
    tag: "Vertical 04",
    headline: "Building tomorrow's green founders.",
    summary:
      "Mentorship, seed funding and operational support for early-stage green businesses in sustainable agriculture, waste management and renewable energy.",
    bullets: ["Mentorship from experts", "Seed funding & legal support", "Pathway into the LGV network"],
  },
] as const;

function VerticalsLayout() {
  const { pathname } = useLocation();
  const isIndex = pathname === "/verticals" || pathname === "/verticals/";
  
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
      
      @keyframes scaleIn3d {
        from {
          opacity: 0;
          transform: scale(0.8) rotateX(-10deg);
        }
        to {
          opacity: 1;
          transform: scale(1) rotateX(0);
        }
      }
      
      .verticals-hero-3d {
        perspective: 1000px;
        transform-style: preserve-3d;
      }
      
      .verticals-grid-3d {
        perspective: 1200px;
        transform-style: preserve-3d;
      }
      
      .vertical-card-3d {
        transform-style: preserve-3d;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .vertical-card-3d:hover {
        transform: rotateY(8deg) rotateX(-5deg) scale(1.05) translateZ(30px);
        box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
      }
      
      .vertical-icon-3d {
        transform-style: preserve-3d;
        transition: all 0.3s ease;
      }
      
      .vertical-icon-3d:hover {
        transform: rotateZ(10deg) scale(1.1);
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
      
      .animate-scale-in-3d {
        animation: scaleIn3d 0.8s ease-out;
      }
    `;
    if (!document.head.querySelector('style[data-verticals-animations]')) {
      style.setAttribute('data-verticals-animations', 'true');
      document.head.appendChild(style);
    }
    
    return () => {
      const existingStyle = document.head.querySelector('style[data-verticals-animations]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);
  
  return (
    <>
      <section className="bg-gradient-to-br from-[oklch(0.22_0.06_150)] to-[oklch(0.32_0.1_150)] text-white py-24 verticals-hero-3d">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold animate-fade-in-up">Business Verticals</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl animate-fade-in-up">
            Four pillars. <span className="italic text-gradient-leaf">One vision.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl animate-fade-in-up-delay">
            Each vertical operates with its own logic and rhythm — but together they form an interconnected
            network of high-impact, regenerative enterprises.
          </p>
        </div>
      </section>

      {isIndex ? (
        <VerticalsIndex />
      ) : (
        <>
          <section className="sticky top-16 z-30 bg-background/90 backdrop-blur border-b border-border/50">
            <div className="max-w-7xl mx-auto px-5 lg:px-8 flex gap-1 overflow-x-auto">
              {verticals.map((v) => (
                <Link
                  key={v.to}
                  to={v.to}
                  className="flex items-center gap-2 px-4 py-4 text-sm font-medium text-foreground/70 hover:text-primary border-b-2 border-transparent data-[status=active]:border-primary data-[status=active]:text-primary whitespace-nowrap"
                >
                  <v.icon size={16} /> {v.label}
                </Link>
              ))}
            </div>
          </section>
          <Outlet />
        </>
      )}
    </>
  );
}

function VerticalsIndex() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Laya Green Ventures operates four distinct but deeply interconnected business pillars — built on
            blended finance and the deep community trust of the wider Laya ecosystem.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-7 verticals-grid-3d">
          {verticals.map((v, i) => (
            <article
              key={v.to}
              className="group relative rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-glow transition-all flex flex-col vertical-card-3d"
              style={{
                animation: `scaleIn3d 0.8s ease-out ${i * 0.1}s both`
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center text-primary shadow-soft vertical-icon-3d">
                    <v.icon size={18} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/95 font-semibold bg-black/30 backdrop-blur px-2.5 py-1 rounded-full">
                    {v.tag}
                  </span>
                </div>
                <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl md:text-[26px] font-semibold text-white leading-tight">
                  {v.label}
                </h3>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <p className="font-display text-lg md:text-xl text-foreground leading-snug">
                  {v.headline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.summary}</p>

                <ul className="mt-5 space-y-2">
                  {v.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-leaf shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  to={v.to}
                  className="group mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Explore {v.label}
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
