import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Mail, MapPin, MessageCircle, Users } from "lucide-react";
import { Page } from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import factoryPhoto from "@/assets/site/manufacturing-shop-floor.webp.asset.json";
import { HR_EMAIL, HR_WHATSAPP, JOB_OPENINGS, resumeEmailLink, whatsappApplicationLink } from "@/lib/job-openings";

const TITLE = "Job Openings in Hosur | Arul Polymers Pvt. Ltd.";
const DESC =
  "Arul Polymers is hiring a Production Supervisor and Maintenance Assistants in Hosur. View qualifications and send your resume to appl.hr@arulpolymers.com.";

export const Route = createFileRoute("/about/current-openings")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JobOpeningsPage,
});

function JobOpeningsPage() {
  return (
    <Page>
      <section className="section-curve relative isolate overflow-hidden bg-navy-deep text-background">
        <img src={factoryPhoto.url} alt="Manufacturing shop floor at Arul Polymers" data-flat="" loading="eager" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-deep/75" />
        <div className="shell py-12 sm:py-14 lg:py-16">
          <Reveal>
            <div className="label-micro flex flex-wrap items-center gap-3 text-background/80"><span className="h-px w-8 bg-red" />About Us / Careers</div>
            <h1 className="mt-6 text-[2rem] leading-tight text-background sm:text-5xl">Job Openings</h1>
            <p className="mt-4 text-lg text-background/85">Arul Polymers Pvt Ltd · Hosur</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-background/25 pt-5">
              <span className="flex items-center gap-2 text-sm font-semibold"><BriefcaseBusiness className="size-4 text-background/75" aria-hidden="true" />{JOB_OPENINGS.length} open positions</span>
              <span className="flex items-center gap-2 text-sm text-background/85"><span className="size-2 rounded-full bg-red" />Urgent Hiring · Apply at the earliest</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cool py-10 sm:py-14">
        <div className="shell">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
              <div><MicroLabel>Current Opportunities</MicroLabel><h2 className="mt-3 text-2xl text-navy sm:text-3xl">Join our team in Hosur</h2></div>
              <span className="text-sm text-steel">{JOB_OPENINGS.reduce((count, job) => count + job.vacancies, 0)} vacancies across {JOB_OPENINGS.length} roles</span>
            </div>
          </Reveal>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {JOB_OPENINGS.map((job, index) => (
              <Reveal key={job.id} delay={index * 80} className="h-full min-w-0">
                <article id={job.id} className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-lg border border-hairline bg-background">
                  <div className="border-b border-hairline px-5 py-6 sm:px-7">
                    <div className="mb-4 flex items-center justify-between gap-3 text-xs font-semibold text-blue"><span className="flex items-center gap-2"><MapPin className="size-3.5" aria-hidden="true" />{job.location}</span><span className="flex items-center gap-2 text-steel"><Users className="size-3.5" aria-hidden="true" />{String(job.vacancies).padStart(2, "0")} {job.vacancies === 1 ? "vacancy" : "vacancies"}</span></div>
                    <h3 className="text-xl leading-snug text-navy sm:text-2xl">{job.title}</h3>
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-6 sm:px-7">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-5 text-sm">
                      <div><dt className="flex items-center gap-1.5 text-steel"><GraduationCap className="size-4" aria-hidden="true" />Qualification</dt><dd className="mt-1.5 font-semibold text-navy">{job.qualification}</dd></div>
                      <div><dt className="text-steel">Experience</dt><dd className="mt-1.5 font-semibold text-navy">{job.experience}</dd></div>
                      <div><dt className="text-steel">Gender</dt><dd className="mt-1.5 font-semibold text-navy">{job.gender}</dd></div>
                      {job.languages && <div><dt className="text-steel">Languages Required</dt><dd className="mt-1.5 font-semibold text-navy">{job.languages}</dd></div>}
                      <div className="col-span-2"><dt className="text-steel">Salary</dt><dd className="mt-1.5 font-semibold leading-relaxed text-navy">{job.salary}</dd></div>
                    </dl>
                    <div className="mt-6 border-l-2 border-blue bg-cool px-4 py-4"><h4 className="text-sm font-semibold text-navy">Required Knowledge</h4><p className="mt-2 text-sm leading-relaxed text-steel">{job.knowledge}</p></div>
                    <div className="mt-auto pt-6"><Button asChild className="w-full"><a href={resumeEmailLink(job.title)} aria-label={`Apply by email for ${job.title}`}><Mail aria-hidden="true" />Apply by Email<ArrowUpRight aria-hidden="true" /></a></Button></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-background py-10 sm:py-14">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div><MicroLabel>Applications</MicroLabel><h2 className="mt-4 text-2xl text-navy sm:text-3xl">Send your resume</h2><a href={resumeEmailLink()} className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-sm font-semibold text-blue underline-offset-4 hover:underline sm:text-base"><Mail className="size-4 shrink-0" aria-hidden="true" />{HR_EMAIL}</a><p className="mt-4 text-sm text-steel">Apply at the earliest!</p></div>
          <div><h3 className="flex items-center gap-2 text-base font-semibold text-navy"><MessageCircle className="size-5 text-blue" aria-hidden="true" />Contact HR on WhatsApp</h3><div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{HR_WHATSAPP.map((contact) => <Button key={contact.number} asChild variant="outline" className="px-3"><a href={whatsappApplicationLink(contact.number)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp HR at ${contact.label}`}><MessageCircle aria-hidden="true" />{contact.label}<ArrowUpRight aria-hidden="true" /></a></Button>)}</div></div>
        </div>
      </section>
    </Page>
  );
}
