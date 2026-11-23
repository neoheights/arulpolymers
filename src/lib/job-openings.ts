export type JobOpening = {
  id: string;
  title: string;
  vacancies: number;
  qualification: string;
  experience: string;
  location: string;
  languages?: string;
  salary: string;
  gender: string;
  knowledge: string;
};

export const HR_EMAIL = "appl.hr@arulpolymers.com";
export const HR_WHATSAPP = [
  { label: "89255 52523", number: "918925552523" },
  { label: "94426 38346", number: "919442638346" },
  { label: "63742 31130", number: "916374231130" },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "production-supervisor",
    title: "Production Supervisor",
    vacancies: 1,
    qualification: "Diploma, BE",
    experience: "1–5 years",
    location: "Hosur",
    languages: "Tamil & English",
    salary: "Best in Industry / Based on Experience",
    gender: "Male",
    knowledge: "Candidates should have knowledge related to the Rubber, Mixing and Moulding industry.",
  },
  {
    id: "maintenance-assistant",
    title: "Maintenance Assistant",
    vacancies: 2,
    qualification: "DME, B.EEE",
    experience: "1–2 years",
    location: "Hosur",
    salary: "Best in Industry / Based on Experience",
    gender: "Male",
    knowledge: "Candidates should have knowledge in maintenance of machines.",
  },
];

export function resumeEmailLink(title?: string) {
  const subject = title ? `Application for ${title}` : "Job Application – Arul Polymers";
  return `mailto:${HR_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function whatsappApplicationLink(number: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent("Hello, I am interested in the job openings at Arul Polymers Pvt Ltd.")}`;
}