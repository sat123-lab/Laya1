import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import "../styles.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactDialogProvider } from "@/components/ContactDialog";
import { PageLoader } from "@/components/PageLoader";
import { ScrollTopButton } from "@/components/ScrollTopButton";

function NotFoundComponent() {
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
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Laya Green Ventures — Sustainable Enterprise from the Eastern Ghats" },
      { name: "description", content: "A values-driven social enterprise from Visakhapatnam building carbon, trade, ecotourism and incubation businesses across the Eastern Ghats." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" },
      { src: "/vanta.globe.min.js" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ContactDialogProvider>
      <Header />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollTopButton />
      <PageLoader />
    </ContactDialogProvider>
  );
}
