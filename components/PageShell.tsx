import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Standard wrapper for the interior destination pages (Story, Darius, Services,
 * Contact). Provides the header, a main landmark, and the footer. The landing
 * page intentionally does NOT use this — it stays minimal and chrome-free.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
