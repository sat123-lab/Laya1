import { createFileRoute } from "@tanstack/react-router";
import { Vertical } from "./verticals.carbon";
import img from "@/assets/v4-incubator.jpg";

export const Route = createFileRoute("/verticals/incubator")({
  head: () => ({
    meta: [
      { title: "Green Business Incubator — Laya Green Ventures" },
      { name: "description", content: "Mentorship, seed funding and support for early-stage green businesses." },
      { property: "og:title", content: "Green Incubator — Laya Green Ventures" },
      { property: "og:description", content: "Building the next generation of green enterprises." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => <Vertical
    tag="Vertical 04"
    title="Green Business Incubator"
    lead="Mentorship, seed funding and support services for early-stage revenue-generating green businesses."
    image={img}
    body="We focus on sustainable agriculture, waste management and renewable energy — with the goal of incorporating successful graduates into the broader Laya Green Ventures network of companies."
    points={[
      "Mentorship from sector experts",
      "Seed funding for early-stage ventures",
      "Operational, legal & market support",
      "Pathway into the LGV network of companies",
    ]}
  />,
});
