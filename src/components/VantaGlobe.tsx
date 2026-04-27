import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: { GLOBE: (opts: Record<string, unknown>) => { destroy: () => void } };
    THREE: unknown;
  }
}

export function VantaGlobe({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const init = () => {
      if (cancelled || !ref.current) return;
      if (typeof window === "undefined") return;
      if (!window.VANTA || !window.VANTA.GLOBE) {
        setTimeout(init, 120);
        return;
      }
      effectRef.current = window.VANTA.GLOBE({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x4ade80,
        color2: 0xfacc15,
        size: 1.0,
        backgroundColor: 0x0d2818,
      });
    };
    init();
    return () => {
      cancelled = true;
      if (effectRef.current) {
        try { effectRef.current.destroy(); } catch { /* noop */ }
        effectRef.current = null;
      }
    };
  }, []);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
