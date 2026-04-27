import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function PageLoader() {
  const status = useRouterState({ select: (s) => s.status });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status === "pending") {
      setVisible(true);
    } else {
      // tiny delay so the loader is perceptible on fast transitions
      const t = setTimeout(() => setVisible(false), 250);
      return () => clearTimeout(t);
    }
  }, [status]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex flex-col items-center gap-6">
        {/* Logo on top */}
        <img src={logo} alt="Loading" className="h-20 w-auto object-contain" />
        {/* Rotating circle below */}
        <div className="relative h-12 w-12">
          <svg className="absolute inset-0 h-full w-full animate-spin" style={{ animationDuration: "1.1s" }} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="44" stroke="var(--color-border)" strokeWidth="6" />
            <circle
              cx="50" cy="50" r="44"
              stroke="url(#loaderGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="70 230"
            />
            <defs>
              <linearGradient id="loaderGrad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="oklch(0.55 0.16 145)" />
                <stop offset="100%" stopColor="oklch(0.78 0.16 130)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
