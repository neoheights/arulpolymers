import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Arrow, MicroLabel } from "@/components/site/primitives";

/** Permanent redirects preserving the previously indexed .php URLs. */
const LEGACY: Record<string, string> = {
  "the-company.php": "/about/company",
  "vision-and-mission.php": "/about/vision-mission",
  "r-and-d.php": "/capabilities/research-development",
  "experience.php": "/capabilities/experience",
  "facilities.php": "/capabilities/facilities",
  "facility.php": "/capabilities/facilities",
  "infrastructure.php": "/capabilities/infrastructure",
  "standards.php": "/quality/standards",
  "quality.php": "/quality",
  "products.php": "/products",
  "general-moulded-rubber-components.php": "/products",
  "rubber-to-metal-components.php": "/products",
  "suspension-and-seals.php": "/products",
  "control-cables-and-boots.php": "/products",
  "seals-and-gasket.php": "/products",
  "o-rings-and-bellows.php": "/products",
  "wear-resistance-ceramic-pad-and-gasket.php": "/products",
  "serving-bowls-and-industrial-seals.php": "/products",
  "sealing-wedge-and-de-leafer.php": "/products",
  "contact-us.php": "/contact",
  "index.php": "/",
};

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const raw = (params._splat ?? "").replace(/^\/+/, "").toLowerCase();
    const target = LEGACY[raw];
    if (target) throw redirect({ to: target, statusCode: 301 });
  },
  head: () => ({
    meta: [
      { title: "Page not found | Arul Polymers Pvt. Ltd." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav solid />
      <main className="anim-page-in pt-16">
        <section className="shell flex min-h-[60vh] flex-col justify-center py-14">
          <MicroLabel tone="red">Error / 404</MicroLabel>
          <h1 className="mt-7" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
            This page isn&apos;t here.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
            The page you requested could not be found. Explore our capabilities or get in touch with
            the Arul Polymers team.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/" className="btn-navy group">
              Back to Home{" "}
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <Link to="/contact" className="btn-outline-navy">
              Contact Us <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
