import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

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
