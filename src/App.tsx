import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ContactDialogProvider } from '@/components/ContactDialog'
import { PageLoader } from '@/components/PageLoader'
import { ScrollTopButton } from '@/components/ScrollTopButton'
import { VantaGlobe } from '@/components/VantaGlobe'
import { ArrowRight, Leaf, Users, Sprout, Mountain } from 'lucide-react'
import community from '@/assets/community.jpg'
import ghats from '@/assets/eastern-ghats.jpg'
import v1 from '@/assets/v1-carbon.jpg'
import v2 from '@/assets/v2-trade.jpg'
import v3 from '@/assets/v3-ecotourism.jpg'
import v4 from '@/assets/v4-incubator.jpg'
import './styles.css'

const verticals = [
  { to: "/verticals/carbon", title: "Carbon Solutions", desc: "Energy-efficient cookstoves & cleantech reducing CO₂ for communities.", img: v1, icon: Leaf },
  { to: "/verticals/trade", title: "Trade & Processing", desc: "A fair-trade hub connecting rural producers to global markets.", img: v2, icon: Sprout },
  { to: "/verticals/ecotourism", title: "Ecotourism", desc: "Authentic, low-impact travel rooted in nature and culture.", img: v3, icon: Mountain },
  { to: "/verticals/incubator", title: "Green Incubator", desc: "Mentorship & seed capital for early-stage green businesses.", img: v4, icon: Users },
]

function HomePage() {
  const { open: openContact } = useContactDialog()
  
  return (
    <>
      {/* HERO with Vanta Globe */}
      <section className="relative h-screen min-h-[640px] overflow-hidden -mt-16 pt-16">
        <VantaGlobe className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.05_150/0.55)] via-[oklch(0.15_0.05_150/0.4)] to-[oklch(0.1_0.03_150/0.85)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 h-full flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass-dark text-[oklch(0.92_0.05_130)] text-xs uppercase tracking-[0.2em] mb-6 border border-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" /> Eastern Ghats · Andhra Pradesh
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white max-w-4xl leading-[1.02]">
            Growing a <span className="text-gradient-leaf italic">greener</span> economy, one valley at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
            Laya Green Ventures combines profitable enterprise with deep community trust to drive climate action,
            equitable trade and ecological wealth across North Coastal Andhra Pradesh.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/verticals" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-leaf text-primary-foreground font-semibold shadow-glow hover:translate-y-[-2px] transition-transform">
              Explore our verticals <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-dark border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
              Our story
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] animate-float z-10">scroll</div>
      </section>

      {/* MISSION strip */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Our Mission</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold leading-tight">
              Profitable business with <span className="text-gradient-leaf">positive impact</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We blend strategic investment, incubation and operations to mitigate climate change,
              empower local communities, and operate with integrity, equity and compassion — creating
              a network of resilient enterprises across the Eastern Ghats and beyond.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Read the strategic plan <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <img src={ghats} alt="Eastern Ghats landscape" loading="lazy" width={1536} height={1024} className="rounded-2xl shadow-soft aspect-[4/3] object-cover" />
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-5 shadow-glow border border-border max-w-[220px] hidden md:block">
              <div className="text-3xl font-display font-bold text-primary">2026–2036</div>
              <div className="text-xs text-muted-foreground mt-1">A ten-year strategic horizon across four phases.</div>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICALS grid */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-leaf)] font-semibold">Four Verticals</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold">Built on blended finance, rooted in the land.</h2>
            </div>
            <Link to="/verticals" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              See all verticals <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((v, i) => (
              <Link
                key={v.to}
                to={v.to}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 border border-border"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={v.img} alt={v.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold leading-tight">
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
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-secondary/50 border border-border p-5">
                  <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/ecosystem" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Learn about the Laya ecosystem <ArrowRight size={18} />
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
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
                Partner with us to build the next decade.
              </h2>
              <p className="mt-5 text-white/90 text-lg max-w-2xl">
                Investors, collaborators, and community partners — let's grow a regenerative economy together.
              </p>
              <button onClick={() => openContact()} className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-semibold hover:translate-y-[-2px] transition-transform">
                Get in touch <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This trail leads nowhere — let's head back.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-leaf px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          Go home
        </Link>
      </div>
    </div>
  )
}

const useContactDialog = () => {
  return { open: () => {} }
}

function App() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollTopButton />
        <PageLoader />
      </div>
    </ContactDialogProvider>
  )
}

export default App
