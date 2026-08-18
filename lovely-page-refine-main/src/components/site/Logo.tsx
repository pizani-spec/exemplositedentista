export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={
          tone === "light"
            ? "inline-flex size-10 items-center justify-center rounded-2xl bg-surface/15 text-primary-foreground"
            : "inline-flex size-10 items-center justify-center rounded-2xl bg-brand/10 text-brand"
        }
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path
            d="M12 3c-1.9 0-3.3.9-4.4.9-1.2 0-2.4-.9-3.8-.9C2.2 3 1 4.9 1 7.4c0 3.6 1.4 7.1 2.5 9.6.8 1.8 1.5 3.5 2.7 3.5 1.2 0 1.4-.8 1.7-2 .3-1.2.6-3 1.1-3s.8 1.8 1.1 3c.3 1.2.5 2 1.7 2 1.2 0 1.9-1.7 2.7-3.5C15.6 14.5 17 11 17 7.4 17 4.9 15.8 3 13.8 3c-1.4 0-2.6.9-3.8.9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(3.5 0)"
          />
        </svg>
      </span>
      <span
        className={
          tone === "light"
            ? "font-display text-lg text-primary-foreground"
            : "font-display text-lg text-ink"
        }
      >
        Sorriso <strong className="font-semibold">Odontológico</strong>
      </span>
    </span>
  );
}