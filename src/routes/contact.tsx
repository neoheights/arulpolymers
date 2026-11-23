import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ContactHero } from "@/components/site/ContactHero";
import { Page, Section } from "@/components/site/PageShell";
import { Arrow, MicroLabel, Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const TITLE = "Contact | Arul Polymers Pvt. Ltd. — Hosur, Tamil Nadu";
const DESC =
  "Contact Arul Polymers Pvt. Ltd. for product enquiries, engineering requirements and manufacturing discussions. Head office and factory in Hosur, Krishnagiri District, Tamil Nadu, India.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { subject?: string } => {
    const raw = search["subject"];
    return typeof raw === "string" && raw ? { subject: raw } : {};
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arulpolymers.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arulpolymers.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Arul Polymers Pvt. Ltd.",
          url: "https://arulpolymers.com",
          foundingDate: "1998",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "A–6C, SIDCO Industrial Estate",
              addressLocality: "Hosur",
              postalCode: "635 126",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "No. 16/12A, Plot No. 1 to 5, Zuzuwadi",
              addressLocality: "Hosur",
              postalCode: "635 126",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
          ],
          email: "bdh@arulpolymers.com",
          telephone: "+91 99945 55845",
        }),
      },
    ],
  }),
  component: ContactPage,
});

const LOCATIONS = [
  {
    label: "Head Office",
    name: "ARUL POLYMERS PVT. LTD.",
    lines: ["A – 6C, SIDCO Industrial Estate", "Hosur – 635 126", "Krishnagiri Dt., Tamil Nadu, India."],
    maps: "https://www.google.com/maps/search/?api=1&query=SIDCO+Industrial+Estate+Hosur+635126+Tamil+Nadu",
  },
  {
    label: "Factory / Unit 2",
    name: "ARUL POLYMERS PVT. LTD. (Unit – 2)",
    lines: [
      "No.: 16/12A, Plot No.: 1 TO 5, Zuzuwadi",
      "Hosur – 635 126",
      "Krishnagiri Dt., Tamil Nadu, India.",
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Zuzuwadi+Hosur+635126+Krishnagiri+Tamil+Nadu",
  },
];

const PEOPLE = [
  { n: "G. Raja", t: "+91 99945 55845", tel: "+919994555845" },
  { n: "V R P Muralikrishnan", t: "+91 99524 11730", tel: "+919952411730" },
];

const MAILS = ["bdh@arulpolymers.com", "gm.marketing@arulpolymers.com"];

type Errors = Partial<Record<"name" | "mail" | "mobile" | "subject" | "message", string>>;

function Field({
  id,
  label,
  children,
  error,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-micro text-steel">
        {label} <span className="text-red">*</span>
      </label>
      <div className="mt-3">{children}</div>
      {error && <p className="mt-2 text-xs font-semibold text-red">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full border-b border-navy/25 bg-transparent pb-3 text-base text-navy outline-none transition-colors placeholder:text-steel/60 focus:border-blue";

function ContactPage() {
  const { subject: prefillSubject } = Route.useSearch();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");


  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("name")) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("mail"))) next.mail = "Please enter your valid Mail ID";
    if (!/^[0-9+\s-]{8,16}$/.test(get("mobile")))
      next.mobile = "Please enter your valid phone number";
    if (!get("subject")) next.subject = "Please enter the enquiry subject";
    if (!get("message")) next.message = "Please enter your message";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }
    const body = `Name: ${get("name")}\nMail ID: ${get("mail")}\nMobile: ${get("mobile")}\n\n${get("message")}`;
    window.location.href = `mailto:bdh@arulpolymers.com?subject=${encodeURIComponent(
      get("subject"),
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <Page>
      <ContactHero />

      <Section>
        <div className="shell grid gap-10 lg:grid-cols-[55fr_45fr]">
          {/* Form */}
          <div id="enquiry-form" className="scroll-mt-28">
            <MicroLabel>Send Your Query</MicroLabel>
            <h2 className="mt-6" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)" }}>
              Enquiry form
            </h2>

            <form onSubmit={onSubmit} noValidate className="mt-10 space-y-9">
              <div className="grid gap-9 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input id="name" name="name" className={inputCls} placeholder="Your name" />
                </Field>
                <Field id="mail" label="Mail ID" error={errors.mail}>
                  <input
                    id="mail"
                    name="mail"
                    type="email"
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                </Field>
                <Field id="mobile" label="Mobile" error={errors.mobile}>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    className={inputCls}
                    placeholder="+91"
                  />
                </Field>
                <Field id="subject" label="Subject" error={errors.subject}>
                  <input
                    id="subject"
                    name="subject"
                    defaultValue={prefillSubject ?? ""}
                    className={inputCls}
                    placeholder="Enquiry subject"
                  />
                </Field>
              </div>

              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className={cn(inputCls, "resize-y")}
                  placeholder="Describe your component or polymer requirement"
                />
              </Field>

              <div className="flex flex-wrap items-center gap-6">
                <button type="submit" className="btn-red group">
                  Send Enquiry{" "}
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
                <p aria-live="polite" className="text-sm font-semibold">
                  {status === "sent" && (
                    <span className="text-blue">Thank you, your message is ready to send.</span>
                  )}
                  {status === "error" && (
                    <span className="text-red">Sorry, please check the highlighted fields.</span>
                  )}
                </p>
              </div>
            </form>
          </div>

          {/* Contact information */}
          <div className="space-y-12 border-navy/12 lg:border-l lg:pl-14">
            <div>
              <MicroLabel>Contact Numbers</MicroLabel>
              <div className="mt-6 space-y-5">
                {PEOPLE.map((p) => (
                  <div key={p.n} className="border-b border-navy/10 pb-5">
                    <p className="text-base font-semibold text-navy">{p.n}</p>
                    <a
                      href={`tel:${p.tel}`}
                      className="mt-1 inline-block text-lg text-steel transition-colors hover:text-red"
                    >
                      {p.t}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <MicroLabel>Mail</MicroLabel>
              <div className="mt-6 space-y-3">
                {MAILS.map((m) => (
                  <a
                    key={m}
                    href={`mailto:${m}`}
                    className="block text-base text-navy transition-colors hover:text-red"
                  >
                    {m}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Locations */}
      <Section tone="navy">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="rounded-2xl shell relative grid gap-px border border-white/15 bg-white/15 lg:grid-cols-2">
          {LOCATIONS.map((l) => (
            <Reveal key={l.label}>
              <div className="h-full bg-navy-deep p-9">
                <MicroLabel tone="light">{l.label}</MicroLabel>
                <p className="mt-6 text-lg font-semibold text-white">{l.name}</p>
                <address className="mt-4 text-base leading-relaxed text-white/70 not-italic">
                  {l.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={l.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-light group mt-8"
                >
                  Open in Maps{" "}
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Map */}
      <Section>
        <div className="shell">
          <MicroLabel>Location</MicroLabel>
          <h2 className="mt-6" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)" }}>
            Find us in Hosur.
          </h2>
          <Reveal>
            <div className="rounded-2xl relative mt-10 border border-navy/15">
              <div className="pointer-events-none absolute inset-0 z-10 border-[6px] border-white/0 shadow-[inset_0_0_0_1px_rgba(8,59,112,0.08)]" />
              <iframe
                title="Arul Polymers Pvt. Ltd. location map, Hosur, Tamil Nadu"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3891.229708760846!2d77.790697!3d12.763589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0d1547dbe3f20a6!2sArul+Polymers+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1490015714487"
                width="100%"
                height={460}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
                style={{ height: "min(60vh, 460px)" }}
              />
            </div>
          </Reveal>
        </div>
      </Section>

    </Page>
  );
}
