import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Arrow } from "./primitives";
import { LogoMark } from "./LogoMark";
import { ProductsDesktopMenu, ProductsMobileMenu } from "./ProductsMenu";

type Item = { label: string; to: string; hash?: string };
type Group = { label: string; to?: string; hash?: string; children?: Item[]; products?: boolean };

const NAV: Group[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "The Company", to: "/about/the-company" },
      { label: "Vision & Mission", to: "/about/vision-mission" },
      { label: "Award & Recognition", to: "/about/awards-recognition" },
      { label: "Job Openings", to: "/about/current-openings" },
      { label: "CSR", to: "/about/csr" },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    children: [
      { label: "Automobile", to: "/industries", hash: "automobile" },
      { label: "Mining & Mineral Processing", to: "/industries", hash: "mining" },
      { label: "Potable Water", to: "/industries", hash: "potable-water" },
      { label: "Aerospace & Defence", to: "/industries", hash: "aerospace-defence" },
      { label: "Oil & Gas", to: "/industries", hash: "oil-gas" },
      { label: "Agriculture", to: "/industries", hash: "agriculture" },
    ],
  },
  {
    label: "Facilities",
    children: [
      { label: "Infrastructure Rubber", to: "/facilities/rubber" },
      { label: "Infrastructure Plastics", to: "/facilities/plastics" },
      { label: "R&D", to: "/facilities/r-and-d" },
      { label: "Design", to: "/facilities/design" },
      { label: "Standards", to: "/facilities/standards" },
    ],
  },
  { label: "Products", to: "/products", products: true },
  {
    label: "Quality",
    to: "/quality",
    children: [
      { label: "IATF", to: "/quality", hash: "iatf" },
      { label: "WRAS", to: "/quality", hash: "wras" },
      { label: "BIS Licence", to: "/quality", hash: "bis" },
      { label: "ISO", to: "/quality", hash: "iso" },
      { label: "EN", to: "/quality", hash: "en" },
    ],
  },
  { label: "Clients", to: "/", hash: "trusted-partners" },
];

/** Faint blueprint dot grid used inside the dropdown panels. */
const BLUEPRINT: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(rgba(8,59,112,0.13) 0.8px, transparent 0.8px), linear-gradient(to right, rgba(8,59,112,0.045) 1px, transparent 1px)",
  backgroundSize: "14px 14px, 56px 100%",
};

export function SiteNav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
  };

  const chrome = solid || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        chrome
          ? "border-b border-hairline bg-white"
          : "border-b border-white/10 bg-navy-deep",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-all duration-500",
          chrome ? "h-16" : "h-24",
        )}
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Arul Polymers — Home">
          <LogoMark compact={chrome} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            if (item.products) {
              const isOpen = openGroup === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => enter(item.label)}
                  onMouseLeave={leave}
                  onFocus={() => enter(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenGroup(null);
                  }}
                >
                  <div
                    className={cn(
                      "nav-link group relative flex items-center gap-1.5 py-1 transition-colors",
                      chrome ? "text-navy/85 hover:text-navy" : "text-white/85 hover:text-white",
                    )}
                  >
                    {item.to ? <Link to={item.to} onClick={() => setOpenGroup(null)}>{item.label}</Link> : <span>{item.label}</span>}
                    <button type="button" aria-label={`${isOpen ? "Close" : "Open"} ${item.label} menu`} aria-expanded={isOpen} aria-haspopup="true" onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))} className="grid h-7 w-7 place-items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", isOpen && "rotate-180", !chrome && "text-white/85")} />
                    </button>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-red transition-transform duration-300",
                        isOpen ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0",
                    )}
                  >
                    <ProductsDesktopMenu onNavigate={() => setOpenGroup(null)} />
                  </div>
                </div>
              );
            }

            if (item.children) {
              const isOpen = openGroup === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => enter(item.label)}
                  onMouseLeave={leave}
                  onFocus={() => enter(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenGroup(null);
                  }}
                >
                  <div
                    className={cn(
                      "nav-link group relative flex items-center gap-1.5 py-1 transition-colors",
                      chrome ? "text-navy/85 hover:text-navy" : "text-white/85 hover:text-white",
                    )}
                  >
                    {item.to ? (
                      <Link
                        to={item.to}
                        onClick={() => setOpenGroup(null)}
                        className="transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    <button
                      type="button"
                      aria-label={`${isOpen ? "Close" : "Open"} ${item.label} menu`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                      className="grid h-7 w-7 place-items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                    >
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          isOpen && "rotate-180",
                          !chrome && "text-white/85",
                        )}
                      />
                    </button>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-red transition-transform duration-300",
                        isOpen ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0",
                    )}
                  >
                    <div
                      className="relative min-w-[280px] max-w-[340px] overflow-hidden rounded-[1.25rem] border border-hairline bg-white shadow-[0_28px_70px_-32px_rgba(8,59,112,0.4)]"
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.55]"
                        style={BLUEPRINT}
                      />
                      <div className="relative px-4 pb-3 pt-4">
                        <p className="label-micro flex items-center gap-2 px-2 pb-3 text-steel">
                          <span className="h-px w-5 bg-red" />
                          {item.label}
                        </p>
                        <ul className="border-t border-navy/10 pt-2">
                          {item.children.map((c) => (
                            <li key={`${c.to}-${c.hash ?? c.label}`}>
                              <Link
                                to={c.to}
                                {...(c.hash ? { hash: c.hash } : {})}
                                onClick={() => setOpenGroup(null)}
                                activeProps={{ className: "bg-blue/6 text-navy" }}
                                className="group/i relative flex items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-[0.85rem] font-medium text-navy/80 transition-all duration-[250ms] hover:bg-blue/6 hover:text-navy"
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 scale-y-0 rounded-full bg-red transition-transform duration-300 group-hover/i:scale-y-100"
                                />
                                <span className="transition-transform duration-300 group-hover/i:translate-x-1">
                                  {c.label}
                                </span>
                                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-blue opacity-0 transition-all duration-300 group-hover/i:translate-x-0.5 group-hover/i:opacity-100" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to!}
                {...(item.hash ? { hash: item.hash } : {})}
                activeOptions={{ exact: item.to === "/" && !item.hash }}
                {...(!item.hash
                  ? { activeProps: { className: "text-red" } }
                  : {})}
                className={cn(
                  "nav-link transition-colors",
                  chrome ? "text-navy/85 hover:text-navy" : "text-white/85 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-header group">
            Discuss a Requirement{" "}
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn("lg:hidden", chrome ? "text-navy" : "text-white")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-hairline bg-white lg:hidden">
          <div className="shell flex flex-col py-4">
            {NAV.map((item) => {
              if (item.products) {
                const expanded = mobileGroup === item.label;
                return (
                  <div key={item.label} className="border-b border-hairline">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-2 text-[0.95rem] font-semibold text-navy">
                      {item.to ? <Link to={item.to} onClick={() => setOpen(false)} className="flex min-h-12 items-center">{item.label}</Link> : <span className="flex min-h-12 items-center">{item.label}</span>}
                      <button type="button" aria-label={`${expanded ? "Close" : "Open"} ${item.label} menu`} aria-expanded={expanded} onClick={() => setMobileGroup(expanded ? null : item.label)} className="grid h-12 w-12 place-items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                        <ChevronDown className={cn("h-4 w-4 text-blue transition-transform duration-300", expanded && "rotate-180")} />
                      </button>
                    </div>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="min-h-0">
                        <ProductsMobileMenu onNavigate={() => setOpen(false)} />
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.children) {
                const expanded = mobileGroup === item.label;
                return (
                  <div key={item.label} className="border-b border-hairline">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                      {item.to ? (
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="flex min-h-12 items-center text-[0.95rem] font-semibold text-navy"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="flex min-h-12 items-center text-[0.95rem] font-semibold text-navy">
                          {item.label}
                        </span>
                      )}
                      <button
                        type="button"
                        aria-label={`${expanded ? "Close" : "Open"} ${item.label} menu`}
                        aria-expanded={expanded}
                        onClick={() => setMobileGroup(expanded ? null : item.label)}
                        className="grid h-12 w-12 place-items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-blue transition-transform duration-300",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                    </div>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="min-h-0">
                        <ul className="mb-3 space-y-1 border-l border-navy/10 pl-3">
                          {item.children.map((c) => (
                            <li key={`${c.to}-${c.hash ?? c.label}`}>
                              <Link
                                to={c.to}
                                {...(c.hash ? { hash: c.hash } : {})}
                                onClick={() => setOpen(false)}
                                activeProps={{ className: "text-red" }}
                                className="block rounded-lg px-3 py-3 text-sm font-medium text-navy/80 active:bg-blue/6"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to!}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-4 text-[0.95rem] font-semibold text-navy"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-red mt-5 justify-center">
              Discuss a Requirement <Arrow />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
