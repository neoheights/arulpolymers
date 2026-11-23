import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Page, PageHero, Section, PageCta } from "@/components/site/PageShell";
import { ProductsShowcase } from "@/components/site/ProductsShowcase";
import { GROUPS, MATERIALS, PRODUCTS, rangeComposite } from "@/lib/products-data";
import { PRODUCT_CATEGORIES } from "@/lib/products-nav";

const TITLE = "Products | Arul Polymers Pvt. Ltd. — Engineered Rubber Components";
const DESC =
  "Our products are used in Pneumatic Brake Applications, Suspension System, Heat Exchanger and Dust Cover Application. These parts are made out of Natural rubber, EPDM, Vamac, HNBR, NBR+PVC.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://arulpolymers.com/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arulpolymers.com/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Products"
        index="Range"
        title={
          <>
            Engineered
            <br />
            product range.
          </>
        }
        statement="Our products are used in Pneumatic Brake Applications, Suspension System, Heat Exchanger and Dust Cover Application. These parts are made out of Natural rubber, EPDM, Vamac, HNBR, NBR+PVC."
        image={rangeComposite}
        imageAlt="Arul Polymers moulded rubber components product range"
        meta={[
          { k: "Categories", v: String(PRODUCTS.length) },
          { k: "Application Groups", v: String(GROUPS.length) },
          { k: "Compounds", v: `${MATERIALS.length}+` },
        ]}
      />

      <Section id="categories" className="py-10 lg:py-14">
        <div className="shell">
          <p className="label-micro flex items-center gap-2 text-steel">
            <span className="h-px w-6 bg-red" />
            Categories
          </p>
          <h2 className="mt-4 text-navy" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Product categories
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_CATEGORIES.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  className="group flex h-full items-center justify-between gap-3 rounded-[1.25rem] border border-hairline bg-white px-5 py-5 transition-all duration-300 hover:border-blue/30 hover:bg-blue/6 hover:shadow-[0_24px_60px_-34px_rgba(8,59,112,0.4)]"
                >
                  <span className="text-[0.95rem] font-semibold leading-snug text-navy transition-transform duration-300 group-hover:translate-x-1">
                    {c.label}
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-blue opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>


      <Section id="catalogue" className="py-10 lg:py-14">
        <ProductsShowcase />
      </Section>

      <PageCta />
    </Page>
  );
}
