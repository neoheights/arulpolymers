import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRODUCT_CATEGORIES, type ProductNode } from "@/lib/products-nav";

/** Faint blueprint dot grid used inside the dropdown panels. */
const BLUEPRINT: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(rgba(8,59,112,0.13) 0.8px, transparent 0.8px), linear-gradient(to right, rgba(8,59,112,0.045) 1px, transparent 1px)",
  backgroundSize: "14px 14px, 56px 100%",
};

const ROW =
  "group/i relative flex items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-[0.85rem] font-medium text-navy/80 transition-all duration-[250ms] hover:bg-blue/6 hover:text-navy";

function Rail() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 scale-y-0 rounded-full bg-red transition-transform duration-300 group-hover/i:scale-y-100"
    />
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative min-w-[264px] max-w-[330px] rounded-[1.25rem] border border-hairline bg-white shadow-[0_28px_70px_-32px_rgba(8,59,112,0.4)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.25rem] opacity-[0.55]"
        style={BLUEPRINT}
      />
      <div className="relative px-4 pb-3 pt-4">
        <p className="label-micro flex items-center gap-2 px-2 pb-3 text-steel">
          <span className="h-px w-5 bg-red" />
          {title}
        </p>
        <ul className="border-t border-navy/10 pt-2">{children}</ul>
      </div>
    </div>
  );
}

/**
 * Positions a nested panel to the right of its parent row, flipping to the
 * left when there is not enough room on screen.
 */
function Flyout({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [flip, setFlip] = useState(false);

  useLayoutEffect(() => {
    if (!isOpen || !ref.current) return;
    const parent = ref.current.parentElement?.getBoundingClientRect();
    const width = ref.current.offsetWidth;
    if (parent) setFlip(parent.right + width > window.innerWidth - 12);
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-0 z-10 transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        flip ? "right-full pr-5" : "left-full pl-5",
        isOpen
          ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
          : cn("pointer-events-none scale-[0.98] opacity-0", flip ? "translate-x-1" : "-translate-x-1"),
      )}
    >
      {children}
    </div>
  );
}

/** One level of the products flyout; recurses for grouped sub-categories. */
function Level({
  title,
  nodes,
  onNavigate,
}: {
  title: string;
  nodes: ProductNode[];
  onNavigate: () => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Panel title={title}>
      {nodes.map((node) => {
        const hasChildren = !!node.children?.length;
        const isOpen = active === node.label;
        return (
          <li
            key={node.label}
            className="relative"
            onMouseEnter={() => setActive(node.label)}
            onMouseLeave={() => setActive(null)}
          >
            {node.to ? (
              <Link
                to={node.to}
                {...(node.hash ? { hash: node.hash } : {})}
                onClick={onNavigate}
                activeProps={{ className: "bg-blue/6 text-navy" }}
                className={ROW}
              >
                <Rail />
                <span className="transition-transform duration-300 group-hover/i:translate-x-1">
                  {node.label}
                </span>
                {hasChildren && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-blue transition-all duration-300 group-hover/i:translate-x-0.5" />}
              </Link>
            ) : (
              <div className={ROW} tabIndex={0} aria-haspopup={hasChildren || undefined}>
                <Rail />
                <span className="transition-transform duration-300 group-hover/i:translate-x-1">
                  {node.label}
                </span>
                {hasChildren && (
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-blue transition-all duration-300 group-hover/i:translate-x-0.5" />
                )}
              </div>
            )}

            {hasChildren && (
              <Flyout isOpen={isOpen}>
                <Level title={node.label} nodes={node.children ?? []} onNavigate={onNavigate} />
              </Flyout>
            )}
          </li>
        );
      })}
    </Panel>
  );
}

/** Desktop Products dropdown: categories with nested flyouts. */
export function ProductsDesktopMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Level
      title="Products"
      nodes={PRODUCT_CATEGORIES.map((c) =>
        c.children.length
          ? { label: c.label, to: c.to, children: c.children }
          : { label: c.label, to: c.to },
      )}
      onNavigate={onNavigate}
    />
  );
}

/** Mobile Products navigation: nested accordions, one open per level. */
export function ProductsMobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [cat, setCat] = useState<string | null>(null);
  const [group, setGroup] = useState<string | null>(null);

  return (
    <ul className="mb-3 space-y-1 border-l border-navy/10 pl-3">
      {PRODUCT_CATEGORIES.map((c) => {
        const expanded = cat === c.label;
        return (
          <li key={c.to}>
            <div className="flex items-center justify-between gap-2">
              <Link
                to={c.to}
                onClick={onNavigate}
                activeProps={{ className: "text-red" }}
                className="flex-1 rounded-lg px-3 py-3 text-sm font-semibold text-navy/85 active:bg-blue/6"
              >
                {c.label}
              </Link>
              {c.children.length > 0 && (
                <button
                  type="button"
                  aria-label={`${expanded ? "Collapse" : "Expand"} ${c.label}`}
                  aria-expanded={expanded}
                  onClick={() => {
                    setGroup(null);
                    setCat(expanded ? null : c.label);
                  }}
                  className="rounded-lg p-3 text-blue"
                >
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")}
                  />
                </button>
              )}
            </div>

            {c.children.length > 0 && (
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="min-h-0">
                  <ul className="mb-2 space-y-1 border-l border-navy/10 pl-3">
                    {c.children.map((node) => {
                      const hasChildren = !!node.children?.length;
                      const open = group === `${c.label}/${node.label}`;
                      if (!hasChildren) {
                        return (
                          <li key={node.label}>
                            {node.to ? (
                              <Link
                                to={node.to}
                                {...(node.hash ? { hash: node.hash } : {})}
                                onClick={onNavigate}
                                className="block rounded-lg px-3 py-3 text-sm font-medium text-navy/75 active:bg-blue/6"
                              >
                                {node.label}
                              </Link>
                            ) : (
                              <span className="block px-3 py-2.5 text-sm font-medium text-navy/75">{node.label}</span>
                            )}
                          </li>
                        );
                      }
                      return (
                        <li key={node.label}>
                          <button
                            type="button"
                            aria-expanded={open}
                            onClick={() => setGroup(open ? null : `${c.label}/${node.label}`)}
                            className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left text-sm font-semibold text-navy/85"
                          >
                            {node.label}
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 text-blue transition-transform duration-300",
                                open && "rotate-180",
                              )}
                            />
                          </button>
                          <div
                            className={cn(
                              "grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <div className="min-h-0">
                              <ul className="mb-2 space-y-1 border-l border-navy/10 pl-3">
                                {(node.children ?? []).map((leaf) => (
                                  <li key={leaf.label}>
                                    {leaf.to ? (
                                      <Link to={leaf.to} {...(leaf.hash ? { hash: leaf.hash } : {})} onClick={onNavigate} className="block rounded-lg px-3 py-3 text-sm font-medium text-navy/75 active:bg-blue/6">{leaf.label}</Link>
                                    ) : (
                                      <span className="block px-3 py-2.5 text-sm font-medium text-navy/75">{leaf.label}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
