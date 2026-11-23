import { describe, expect, test } from "bun:test";
import { JOB_OPENINGS, HR_EMAIL, HR_WHATSAPP, resumeEmailLink, whatsappApplicationLink } from "./job-openings";

describe("approved job openings", () => {
  test("only the two supplied roles are open", () => {
    expect(JOB_OPENINGS.map((job) => job.title)).toEqual(["Production Supervisor", "Maintenance Assistant"]);
  });
  test("Production Supervisor requirements match the supplied notice", () => {
    expect(JOB_OPENINGS[0]).toMatchObject({ vacancies: 1, qualification: "Diploma, BE", experience: "1–5 years", location: "Hosur", languages: "Tamil & English", gender: "Male", salary: "Best in Industry / Based on Experience" });
    expect(JOB_OPENINGS[0].knowledge).toContain("Rubber, Mixing and Moulding");
  });
  test("Maintenance Assistant requirements match the supplied notice", () => {
    expect(JOB_OPENINGS[1]).toMatchObject({ vacancies: 2, qualification: "DME, B.EEE", experience: "1–2 years", location: "Hosur", gender: "Male", salary: "Best in Industry / Based on Experience" });
    expect(JOB_OPENINGS[1].languages).toBeUndefined();
    expect(JOB_OPENINGS[1].knowledge).toContain("maintenance of machines");
  });
  test("applications go to the approved HR email with the selected role", () => {
    expect(HR_EMAIL).toBe("appl.hr@arulpolymers.com");
    expect(resumeEmailLink("Production Supervisor")).toBe("mailto:appl.hr@arulpolymers.com?subject=Application%20for%20Production%20Supervisor");
  });
  test("all three WhatsApp contacts use the supplied Indian phone numbers", () => {
    expect(HR_WHATSAPP.map((contact) => contact.number)).toEqual(["918925552523", "919442638346", "916374231130"]);
    for (const contact of HR_WHATSAPP) expect(whatsappApplicationLink(contact.number)).toStartWith(`https://wa.me/${contact.number}?text=`);
  });
});