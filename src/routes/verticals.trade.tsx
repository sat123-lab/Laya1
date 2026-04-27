import { createFileRoute } from "@tanstack/react-router";
import { Vertical } from "./verticals.carbon";
import img from "@/assets/v2-trade.jpg";

export const Route = createFileRoute("/verticals/trade")({
  head: () => ({
    meta: [
      { title: "Trade & Processing — Laya Green Ventures" },
      { name: "description", content: "A hub-and-spoke network connecting rural producers to global markets via fair trade." },
      { property: "og:title", content: "Trade & Processing — Laya Green Ventures" },
      { property: "og:description", content: "Fair-trade hub for rural entrepreneurs and global markets." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => <Vertical
    tag="Vertical 02"
    title="Trade & Processing — Network Hub"
    lead="Transforming bulk trade of farm and forest produce into a sophisticated hub-and-spoke network."
    image={img}
    body="LGV will act as the central hub, supporting and connecting a decentralised network of rural entrepreneurs — producers and small-scale processors — to global markets using fair-trade principles."
    points={[
      "Decentralised producer & processor network",
      "Quality aggregation, processing and branding",
      "Fair-trade pricing and shared value",
      "Direct linkage to global premium markets",
    ]}
  />,
});
