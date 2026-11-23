# Facilities → Standards page

## What will be built

- Replace the placeholder at `/facilities/standards` with a complete bright, premium engineering page using the existing Arul Polymers header, footer, typography, blue/white/red palette, curves, and CTA style.
- Create a large central `STANDARDS` composition with NFL, DTD, MIL, and MSRR as text-only badges moving slowly around concentric technical rings.
- Add blueprint grid lines, calibrated circular marks, restrained red datum points, soft blue radial light, and subtle nodes without fake logos or decorative stock imagery.
- Follow the opening with four document-ready sections for NFL, DTD, MIL, and MSRR. Each will show only the confirmed abbreviation and a neutral “Reference document not yet available” state until matching files are supplied.
- Do not use the current Drive images because they are labeled ASTM, BSI, DIN, HAL, ISI, JIS, and SAE and do not match the four requested standards. No unrelated image will be relabeled or presented as NFL, DTD, MIL, or MSRR.

## Motion and responsive behavior

- Rotate the outer apparatus slowly while counter-rotating each badge so its text remains upright and readable.
- Use restrained fade, line-draw, node pulse, and hover-lift motion; disable orbital motion for reduced-motion users.
- Keep the full circular composition on desktop and scale it to a smaller collision-free orbit on 360–430px mobile screens.
- Use stable dimensions and responsive type so labels never overlap the center title or leave the viewport.

## Technical details

- Build the page directly in the existing Standards route and add scoped Standards styles to the global design system.
- Keep all colors semantic and reuse existing page shell, reveal behavior, and closing enquiry pattern.
- Update route-specific title, description, Open Graph metadata, and canonical link for the completed page.
- Keep future document slots data-driven so matching approved files can be connected later without redesigning the page.

## Verification

- Check desktop and 390px/360px mobile views for legibility, orbit spacing, no overlap, and no horizontal overflow.
- Verify motion and reduced-motion states, links, metadata, console output, and the latest preview build.
