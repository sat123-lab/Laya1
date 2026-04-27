import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { useState, createContext, useContext, ReactNode } from "react";

const WHATSAPP = "919999999999";

type Ctx = { open: () => void; close: () => void };
const ContactDialogCtx = createContext<Ctx | null>(null);

export function useContactDialog() {
  const c = useContext(ContactDialogCtx);
  if (!c) throw new Error("useContactDialog must be used inside ContactDialogProvider");
  return c;
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = `Hello Laya Green Ventures!%0A%0AName: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0AInterest: ${fd.get("interest")}%0A%0AMessage: ${fd.get("message")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <ContactDialogCtx.Provider value={{ open: () => { setSent(false); setIsOpen(true); }, close: () => setIsOpen(false) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto">
          <div className="grid md:grid-cols-5">
            {/* Left — company details */}
            <div className="md:col-span-2 bg-gradient-to-br from-[oklch(0.22_0.06_150)] to-[oklch(0.32_0.1_150)] text-white p-7 space-y-5">
              <DialogHeader className="space-y-1.5 text-left">
                <DialogTitle className="font-display text-2xl text-white">Get in touch</DialogTitle>
                <DialogDescription className="text-white/75 text-sm">
                  Partner, invest or collaborate with Laya Green Ventures.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                {[
                  { icon: MapPin, title: "Headquarters", body: "Visakhapatnam, Andhra Pradesh, India" },
                  { icon: Mail, title: "Email", body: "connect@layagreenventures.in" },
                  { icon: Phone, title: "Phone", body: "+91 99999 99999" },
                ].map((c) => (
                  <div key={c.title} className="flex gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0"><c.icon size={16} /></div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">{c.title}</div>
                      <div className="text-sm mt-0.5">{c.body}</div>
                    </div>
                  </div>
                ))}
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:scale-[1.02] transition-transform w-fit">
                  <MessageCircle size={16} fill="white" strokeWidth={0} /> WhatsApp us
                </a>
              </div>
            </div>

            {/* Right — form */}
            <form onSubmit={onSubmit} className="md:col-span-3 p-7 space-y-4 bg-card">
              <div>
                <h3 className="font-display text-2xl font-semibold">Send us a message</h3>
                <p className="text-xs text-muted-foreground mt-1">Submitting opens WhatsApp with your message pre-filled.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <Field name="name" label="Your name" required maxLength={100} />
                <Field name="email" label="Email" type="email" required maxLength={255} />
              </div>
              <Field name="interest" label="I'm interested in" placeholder="Investment, partnership…" maxLength={200} />
              <div>
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <textarea name="message" rows={4} required maxLength={1000} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-leaf text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-shadow text-sm">
                {sent ? "Opened in WhatsApp ✓" : <>Send via WhatsApp <Send size={14} /></>}
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </ContactDialogCtx.Provider>
  );
}

function Field({ name, label, type = "text", required, placeholder, maxLength }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string; maxLength?: number }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} maxLength={maxLength} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
