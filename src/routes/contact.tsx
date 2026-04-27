import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Laya Green Ventures" },
      { name: "description", content: "Reach out to Laya Green Ventures in Visakhapatnam — partner, invest or collaborate." },
      { property: "og:title", content: "Contact Laya Green Ventures" },
      { property: "og:description", content: "Partner, invest or collaborate with us." },
    ],
  }),
  component: Contact,
});

const WHATSAPP = "919999999999";

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = `Hello Laya Green Ventures!%0A%0AName: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0AInterest: ${fd.get("interest")}%0A%0AMessage: ${fd.get("message")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-[oklch(0.22_0.06_150)] to-[oklch(0.32_0.1_150)] text-white py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold">Contact</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05]">Let's build it <span className="italic text-gradient-leaf">together.</span></h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            Whether you're an investor, a community partner, a buyer or a curious traveller — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Headquarters", body: "Visakhapatnam, Andhra Pradesh, India" },
              { icon: Mail, title: "Email", body: "connect@layagreenventures.in" },
              { icon: Phone, title: "Phone", body: "+91 99999 99999" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card border border-border p-6 shadow-soft flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-leaf flex items-center justify-center text-primary-foreground shrink-0"><c.icon size={20} /></div>
                <div>
                  <div className="font-semibold text-foreground">{c.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{c.body}</div>
                </div>
              </div>
            ))}
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-[#25D366] text-white p-6 shadow-glow hover:scale-[1.02] transition-transform">
              <div className="flex gap-4 items-center">
                <div className="h-11 w-11 rounded-xl bg-white/20 flex items-center justify-center"><MessageCircle size={20} /></div>
                <div>
                  <div className="font-semibold">WhatsApp us instantly</div>
                  <div className="text-sm text-white/85 mt-0.5">Quickest way to reach us</div>
                </div>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 md:p-10 shadow-soft space-y-5">
            <h2 className="font-display text-3xl font-semibold">Send us a message</h2>
            <p className="text-sm text-muted-foreground -mt-3">Submitting opens WhatsApp with your message pre-filled.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <Field name="interest" label="I'm interested in" placeholder="Investment, partnership, ecotourism…" />
            <div>
              <label className="text-sm font-medium text-foreground/80">Message</label>
              <textarea name="message" rows={5} required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-leaf text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-shadow">
              {sent ? "Opened in WhatsApp ✓" : <>Send via WhatsApp <Send size={16} /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
