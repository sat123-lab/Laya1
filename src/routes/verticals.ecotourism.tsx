import { createFileRoute } from "@tanstack/react-router";
import { Vertical } from "./verticals.carbon";
import img from "@/assets/v3-ecotourism.jpg";

export const Route = createFileRoute("/verticals/ecotourism")({
  head: () => ({
    meta: [
      { title: "Ecotourism — Laya Green Ventures" },
      { name: "description", content: "Authentic, low-impact travel experiences across North Coastal Andhra Pradesh." },
      { property: "og:title", content: "Ecotourism — Laya Green Ventures" },
      { property: "og:description", content: "Nature, culture, conservation — immersive low-impact journeys." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => <Vertical
    tag="Vertical 03"
    title="Ecotourism"
    lead="Authentic, educational and low-impact travel experiences in North Coastal Andhra Pradesh."
    image={img}
    body="We offer immersive experiences spanning nature-based education, outdoor adventure, cultural immersion, culinary exploration with local produce, and recreational activities — all integrated with conservation efforts and community engagement."
    points={[
      "Nature-based education programmes",
      "Outdoor adventure & cultural immersion",
      "Culinary journeys featuring local produce",
      "Conservation-linked community tourism",
    ]}
  />,
});
