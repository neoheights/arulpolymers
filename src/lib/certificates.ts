const previews = import.meta.glob<{ url: string }>("../assets/certificates/previews/*.asset.json", {
  eager: true,
  import: "default",
});
const pdfs = import.meta.glob<{ url: string }>("../assets/certificates/original-pdfs/*.asset.json", {
  eager: true,
  import: "default",
});

const pv = (n: string) => previews[`../assets/certificates/previews/${n}.webp.asset.json`]!.url;
const pdf = (n: string) => pdfs[`../assets/certificates/original-pdfs/${n}.asset.json`]!.url;

export type CertDoc = {
  id: string;
  title: string;
  label: string;
  fileName: string;
  pdf: string;
  pages: string[];
};

const doc = (id: string, title: string, label: string, fileName: string, pageCount = 1): CertDoc => ({
  id,
  title,
  label,
  fileName,
  pdf: pdf(`${id}.pdf`),
  pages: Array.from({ length: pageCount }, (_, i) => pv(`${id}-${i + 1}`)),
});

export const IATF_DOCS: [CertDoc, CertDoc] = [
  doc("iatf-unit-1", "IATF 16949", "Unit 1", "U1-IATF-16949.pdf"),
  doc("iatf-unit-2", "IATF 16949", "Unit 2", "U2-IATF-16949.pdf", 2),
];
export const ISO_DOCS: [CertDoc, CertDoc, CertDoc] = [
  doc("iso-9001-unit-1", "ISO 9001", "Unit 1", "U1-ISO9001.pdf"),
  doc("iso-9001-unit-2", "ISO 9001", "Unit 2", "U2-ISO 9001.pdf"),
  doc("iso-4633", "ISO 4633:2023", "Rubber seals — joint rings", "ISO 46332023.pdf"),
];
export const BIS_DOC = doc("bis", "BIS Licence", "Licence", "BIS certificate.pdf", 2);
export const EN_DOC = doc("en-681", "BS EN 681-1:1996", "Elastomeric seals", "BS EN 681-11996.pdf");

export const WRAS_DETAILS_FILE = pdf("wras-details.docx");

/** Verbatim from the client-supplied WRAS.docx. */
export const WRAS_APPROVALS = [
  {
    title: "WRAS - Certification for EPDM Rubber",
    rows: [
      ["Approval No.", "2302547"],
      ["Hardness", "40 to 80° Shore A"],
      ["Temperature", "Up to 65°C"],
      ["Validity", "Up to February 28"],
    ],
  },
  {
    title: "WRAS 61813 E80 - Certification for Hard Ebonite Rubber",
    rows: [
      ["Approval No.", "240155009"],
      ["Hardness", "80° Shore A"],
      ["Temperature", "Up to 60°C"],
      ["Validity", "Up to January 29"],
    ],
  },
];
