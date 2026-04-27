import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import img from "@/assets/v1-carbon.jpg";

export const Route = createFileRoute("/verticals/carbon")({
  head: () => ({
    meta: [
      { title: "Carbon Solutions & Technology — Laya Green Ventures" },
      { name: "description", content: "Energy-efficient cookstoves and bioenergy systems reducing CO₂ emissions across the Eastern Ghats." },
      { property: "og:title", content: "Carbon Solutions — Laya Green Ventures" },
      { property: "og:description", content: "Cleantech reducing CO₂ for community and industrial use." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => <Vertical
    tag="Vertical 01"
    title="Carbon Solutions & Technology"
    lead="Implementing technologies that reduce CO₂ emissions and sequester carbon across the region."
    image={img}
    body="The current core activity is the production of energy-efficient cookstoves, which will evolve into advanced bioenergy systems and other cleantech innovations designed for community and industrial use in North Coastal Andhra Pradesh."
    points={[
      "Energy-efficient cookstoves for rural households",
      "Voluntary carbon reduction credit pathways",
      "Advanced bioenergy systems for community use",
      "Cleantech innovations for industrial scale",
    ]}
  />,
});

export function Vertical(props: { tag: string; title: string; lead: string; image: string; body: string; points: string[] }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">{props.tag}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">{props.title}</h2>
          <p className="mt-5 text-xl text-muted-foreground leading-relaxed">{props.lead}</p>
          <p className="mt-6 text-base text-foreground/80 leading-relaxed">{props.body}</p>
          <ul className="mt-8 space-y-3">
            {props.points.map((p) => (
              <li key={p} className="flex gap-3 text-foreground/85">
                <CheckCircle2 size={20} className="text-[var(--color-leaf)] mt-0.5 shrink-0" /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <img src={props.image} alt={props.title} loading="lazy" width={1024} height={768} className="rounded-2xl shadow-soft aspect-[4/5] object-cover w-full" />
        </div>
      </div>
    </section>
  );
}
