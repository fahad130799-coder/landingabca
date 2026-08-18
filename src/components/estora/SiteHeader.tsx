import { useEffect, useState } from "react";

const NAV = [
  { label: "Properties", href: "#discover" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Our Vision", href: "#vision" },
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone = solid ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-border bg-background/95 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-5 sm:px-8">
        <a
          href="#top"
          className={`text-sm font-normal tracking-[0.28em] transition-colors duration-500 ${tone}`}
        >
          ESTORA
        </a>

        <nav className="ml-6 hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[13px] transition-opacity duration-300 hover:opacity-60 ${tone}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-7 md:flex">
          <span className={`text-[13px] opacity-70 ${tone}`}>+91 98110 24466</span>
          <a
            href="#contact"
            className={`text-[13px] transition-opacity duration-300 hover:opacity-60 ${tone}`}
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`ml-auto flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden ${tone}`}
        >
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-muted-foreground"
            >
              Contact · +91 98110 24466
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}