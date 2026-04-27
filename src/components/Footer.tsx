import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useContactDialog } from "./ContactDialog";

export function Footer() {
  const { open: openContact } = useContactDialog();
  return (
    <footer className="bg-[oklch(0.18_0.04_150)] text-[oklch(0.92_0.02_110)] mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Laya Green Ventures" className="h-12 w-auto object-contain mb-4 bg-white/95 rounded-lg p-2 inline-block" />
          <p className="text-sm opacity-75 leading-relaxed">
            A values-driven social enterprise rooted in the Eastern Ghats — building a sustainable, equitable economy.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[var(--color-accent)]">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:text-[var(--color-accent)]">About</Link></li>
            <li><Link to="/verticals" className="hover:text-[var(--color-accent)]">Verticals</Link></li>
            <li><Link to="/ecosystem" className="hover:text-[var(--color-accent)]">Ecosystem</Link></li>
            <li><button onClick={() => openContact()} className="hover:text-[var(--color-accent)] text-left">Contact</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[var(--color-accent)]">Verticals</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/verticals/carbon" className="hover:text-[var(--color-accent)]">Carbon Solutions</Link></li>
            <li><Link to="/verticals/trade" className="hover:text-[var(--color-accent)]">Trade & Processing</Link></li>
            <li><Link to="/verticals/ecotourism" className="hover:text-[var(--color-accent)]">Ecotourism</Link></li>
            <li><Link to="/verticals/incubator" className="hover:text-[var(--color-accent)]">Green Incubator</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[var(--color-accent)]">Reach us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Visakhapatnam, Andhra Pradesh, India</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> connect@layagreenventures.in</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +91 99999 99999</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Laya Green Ventures Pvt. Ltd. · All rights reserved.
      </div>
    </footer>
  );
}
