import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { BotMark, GithubMark, InstallButton, INSTALL_URL } from "./primitives";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "RAG", href: "#rag" },
  { label: "Security", href: "#security" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <BotMark className="h-5 w-5" />
            <span className="font-display text-sm font-semibold tracking-[-0.01em] md:text-base">
              Senior Dev Bot
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTALL_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              <GithubMark className="h-3.5 w-3.5" /> GitHub
            </a>
          </div>

          <InstallButton size="sm" label="Install on GitHub" className="hidden sm:inline-flex" />
        </nav>
      </header>

      {/* Mobile persistent CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-xl sm:hidden">
        <InstallButton className="w-full justify-center" label="Install on GitHub" />
      </div>
    </>
  );
}
