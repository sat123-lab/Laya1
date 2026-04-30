import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Clock, Share2 } from "lucide-react";
import ghats from "@/assets/eastern-ghats.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Laya Green Ventures" },
      { name: "description", content: "Insights, stories and updates from Laya Green Ventures on sustainable development, climate action and community impact in the Eastern Ghats." },
      { property: "og:title", content: "Blog — Laya Green Ventures" },
      { property: "og:description", content: "Stories from the Eastern Ghats on building a sustainable economy." },
    ],
  }),
  component: Blog,
});

const blogPosts = [
  {
    id: 1,
    title: "Launching the Green Incubator: Supporting Climate Entrepreneurs",
    excerpt: "Our new incubator program provides mentorship, seed capital and operational support to early-stage green businesses in the Eastern Ghats region.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Incubation",
    image: ghats,
    linkedinUrl: "https://www.linkedin.com/posts/green-incubator-climate-entrepreneurs",
  },
  {
    id: 2,
    title: "Carbon Credits: Empowering Communities Through Clean Cookstoves",
    excerpt: "How energy-efficient cookstoves are reducing CO₂ emissions while improving health outcomes for rural households across Andhra Pradesh.",
    date: "February 28, 2026",
    readTime: "7 min read",
    category: "Carbon Solutions",
    image: ghats,
    linkedinUrl: "https://www.linkedin.com/posts/carbon-credits-clean-cookstoves",
  },
  {
    id: 3,
    title: "Fair Trade in the Eastern Ghats: Connecting Farmers to Global Markets",
    excerpt: "Building a transparent trade hub that ensures fair prices for tribal producers while bringing quality products to international buyers.",
    date: "February 10, 2026",
    readTime: "6 min read",
    category: "Trade",
    image: ghats,
    linkedinUrl: "https://www.linkedin.com/posts/fair-trade-eastern-ghats",
  },
  {
    id: 4,
    title: "Ecotourism Done Right: Low-Impact Travel with High Community Benefit",
    excerpt: "Our approach to ecotourism prioritizes ecological preservation and community ownership, creating authentic experiences that give back.",
    date: "January 22, 2026",
    readTime: "8 min read",
    category: "Ecotourism",
    image: ghats,
    linkedinUrl: "https://www.linkedin.com/posts/ecotourism-community-benefit",
  },
  {
    id: 5,
    title: "The Laya Ecosystem: Four Decades of Community Trust",
    excerpt: "Understanding how 40 years of grassroots work in the Eastern Ghats provides the foundation for our social enterprise model.",
    date: "January 5, 2026",
    readTime: "10 min read",
    category: "Ecosystem",
    image: ghats,
    linkedinUrl: "https://www.linkedin.com/posts/laya-ecosystem-community-trust",
  },
  {
    id: 6,
    title: "Our 10-Year Strategic Plan: Building a Regenerative Economy",
    excerpt: "A deep dive into our phased approach to creating sustainable businesses across carbon, trade, ecotourism and incubation verticals.",
    date: "December 18, 2025",
    readTime: "12 min read",
    category: "Strategy",
    image: ghats,
    linkedinUrl: "https://www.linkedin.com/posts/strategic-plan-regenerative-economy",
  },
];

function Blog() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <img src={ghats} alt="" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold">Blog</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            Stories from the <span className="italic text-gradient-leaf">Eastern Ghats</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Insights, updates and reflections on our journey building a sustainable economy in North Coastal Andhra Pradesh.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 overflow-hidden cursor-pointer"
                onClick={() => post.linkedinUrl && window.open(post.linkedinUrl, '_blank')}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary text-xs font-medium text-[var(--color-leaf)]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-primary leading-tight mb-3 group-hover:text-[var(--color-leaf)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                    <div className="flex items-center gap-2">
                      {post.linkedinUrl && (
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(post.linkedinUrl, '_blank'); }}
                          className="p-2 rounded-full bg-secondary hover:bg-[var(--color-leaf)] hover:text-primary-foreground transition-colors"
                          aria-label={`Share ${post.title} on LinkedIn`}
                        >
                          <Share2 size={14} />
                        </button>
                      )}
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
            Stay updated on our journey
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to receive insights on sustainable development, climate action and community impact from the Eastern Ghats.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--color-leaf)]/50"
            />
            <button className="px-6 py-3 rounded-full bg-gradient-leaf text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
