import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useContactDialog } from "./ContactDialog";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/verticals", label: "Verticals" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/blog", label: "Blog" },
  { to: "/team", label: "Team" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactDialog();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Laya Green Ventures — Home">
          <img src={logo} alt="Laya Green Ventures" className="h-12 md:h-14 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md data-[status=active]:text-primary data-[status=active]:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => openContact()}
            className="ml-3 inline-flex items-center px-5 py-2 rounded-full bg-gradient-leaf text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow"
          >
            Partner with us
          </button>
        </nav>
        <button onClick={() => setOpen((o) => !o)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden absolute top-full left-0 right-0 border-t border-border/50 bg-background/95 backdrop-blur px-5 py-4 flex flex-col gap-1 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-md text-foreground/80 hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-primary text-base font-medium"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); openContact(); }}
            className="mt-3 inline-flex justify-center items-center px-5 py-3 rounded-full bg-gradient-leaf text-primary-foreground text-sm font-semibold w-full"
          >
            Partner with us
          </button>
        </nav>
      )}
    </header>
  );
}
