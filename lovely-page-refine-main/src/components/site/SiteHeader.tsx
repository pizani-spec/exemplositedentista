import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, whatsappLink } from "./data";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface/85 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1180px] items-center gap-6 px-5">
        <a href="#inicio" className="mr-auto" aria-label="Sorriso Odontológico — início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-brand-deep sm:inline-flex"
        >
          Agendar avaliação
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-ink lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navegação principal (mobile)"
          className="border-t border-border bg-surface px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-base font-medium text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}