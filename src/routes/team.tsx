import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";
import ghats from "@/assets/eastern-ghats.jpg";
import siddharth from "@/assets/siddarth d souza.jpg";
import benudhar from "@/assets/WhatsApp_Image_2026-04-30_at_11.33.27_AM-removebg-preview.png";
import diwakar from "@/assets/diwakar.k . vadapalli.jpg";
import rafiq from "@/assets/rafiq mohammed.jpg";
import satyanarayana from "@/assets/satyanarayana.jpg";
import { useEffect } from "react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Laya Green Ventures" },
      { name: "description", content: "Meet the leadership team at Laya Green Ventures driving sustainable enterprise and climate action in the Eastern Ghats." },
      { property: "og:title", content: "Team — Laya Green Ventures" },
      { property: "og:description", content: "The people building a regenerative economy in the Eastern Ghats." },
    ],
  }),
  component: Team,
});

const leadership = [
  {
    name: "Siddharth D'Souza",
    role: "Director",
    bio: "Siddharth grew up in Addateegala and Vizag, and knows the region, the communities, and the cultures of the region intimately. His passion for the story we tell along with the outcomes we achieve motivates the work of LGV. Educated in India and the Netherlands, he brings a global perspective to our local stories.",
    location: "Visakhapatnam, Andhra Pradesh",
    image: siddharth,
  },
  {
    name: "Dr. Benudhar Sutar",
    role: "Managing Director",
    bio: "Dr. Benudhar Sutar is currently working as Managing Director of DESI Technology Solutions providing Technological Solutions on Renewable Energy & Environmental friendly Technologies. He brings on board three decades of experience in this field of expertise. He is an expert in technical feasibility, design and implementation of community based renewable energy projects (Micro-hydro & Solar), training & capacity building, livelihood promotion through appropriate technology, micro enterprise development and resource management. He is an M.Tech. in Energy & Environment and have been conferred with Ph.D. in Rural Lighting & the Role of RE from IIT, Chennai. He has been Instrumental in promoting appropriate technologies in a very innovative way by integrating livelihood, environment, gender and community participation. He was instrumental for the development of Micro/Mini Hydros in Odisha, Andhra Pradesh, Sikkim, Ladakh and Nepal.",
    location: "Bhubaneswar, Odisha",
    image: benudhar,
  },
  {
    name: "Dr. Diwakar K. Vadapalli",
    role: "CEO",
    bio: "Diwakar earned his PhD in Social Welfare from Case Western Reserve University, and brings a social development perspective to LGV. Armed with the vocabulary of a social enterprise, he shapes the daily operations and strategic direction of the company to be a market instrument in the service of individuals, families, and communities.",
    location: "Visakhapatnam, Andhra Pradesh",
    image: diwakar,
  },
  {
    name: "Rafiq Mohammed",
    role: "Manager - Business Development",
    bio: "With over a decade of marketing and sales experience across various sectors and products, Rafiq leads our business development strategy. His work spans all our verticals. He is currently focused on building our bulk trade vertical, connecting local farmers to global markets.",
    location: "Visakhapatnam, Andhra Pradesh",
    image: rafiq,
  },
  {
    name: "Vimal Raj",
    role: "Manager - Ecotourism",
    bio: "A naturalist and teacher, Vimal's love for sharing what he sees around him launched him on an unconventional path, away from his mechanical engineering degree. As he nurtures WildEd into a nature exploration and education enterprise, his work is the catalyst for LGV's own ecotourism vertical.",
    location: "Visakhapatnam, Andhra Pradesh",
    image: undefined,
  },
  {
    name: "Satyanarayana M",
    role: "Manager - Cookstoves Project",
    bio: "His professional growth mirrors the growth of the cookstoves project for the last two decades. His cross-cultural communication skills and careful attention to detail inspires the entire team to be authentic, honest, and studious in pursuing our long-term goals. A teacher by passion and a manager by profession, the Cookstoves Project benefits from his patience and perseverance in his pursuit of perfection.",
    location: "Visakhapatnam, Andhra Pradesh",
    image: satyanarayana,
  },
].sort((a, b) => {
  const roleOrder: Record<string, number> = { 'Director': 0, 'Managing Director': 0, 'CEO': 1, 'Manager': 2 };
  const aRole = Object.keys(roleOrder).find(key => a.role.includes(key)) || 'Manager';
  const bRole = Object.keys(roleOrder).find(key => b.role.includes(key)) || 'Manager';
  return roleOrder[aRole] - roleOrder[bRole];
});

function Team() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px) rotateX(-10deg);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .team-3d-container {
        perspective: 1000px;
      }
      
      .hover\\:rotate-y-3:hover {
        transform: rotateY(3deg) scale(1.05);
      }
      
      .team-card-3d {
        transform-style: preserve-3d;
      }
      
      .parallax-bg {
        transform: translateZ(-1px) scale(1.1);
        will-change: transform;
      }
      
      .hero-parallax {
        perspective: 1px;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
      }
      
      .hero-content {
        transform: translateZ(0);
        will-change: transform;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInUpDelay {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes pulseSlow {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.8;
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .animate-fade-in-up-delay {
        animation: fadeInUpDelay 0.8s ease-out 0.2s both;
      }
      
      .animate-pulse-slow {
        animation: pulseSlow 3s ease-in-out infinite;
      }
    `;
    if (!document.head.querySelector('style[data-team-animations]')) {
      style.setAttribute('data-team-animations', 'true');
      document.head.appendChild(style);
    }
    
    return () => {
      const existingStyle = document.head.querySelector('style[data-team-animations]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);
  
  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="space-y-12 team-3d-container">
            {leadership.map((person, index) => (
              <div
                key={person.name}
                className={`group team-card-3d rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow transition-all duration-500 overflow-hidden transform-gpu hover:scale-105 hover:rotate-y-3 ${
                  index % 2 === 0 ? 'flex flex-col md:flex-row-reverse' : 'flex flex-col md:flex-row'
                }`}
                style={{
                  animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="w-full md:w-1/5 aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-secondary group-hover:brightness-110 transition-all duration-300">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      loading="lazy"
                      width={200}
                      height={250}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-leaf flex items-center justify-center text-primary-foreground font-display text-lg font-bold mb-1">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <p className="text-xs text-muted-foreground">Photo coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-center group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-white/5 transition-all duration-300">
                  <h3 className="font-display text-xl font-semibold text-primary">{person.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-[var(--color-leaf)]">{person.role}</p>
                                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
                                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
            Join our team
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We're always looking for passionate individuals committed to building a sustainable future in the Eastern Ghats.
          </p>
          <a
            href="mailto:careers@layagreenventures.com"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-leaf text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
          >
            <Mail size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            <span className="transition-all duration-300 group-hover:tracking-wide">View open positions</span>
          </a>
        </div>
      </section>
    </>
  );
}
