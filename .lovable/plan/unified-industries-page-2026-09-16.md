# Unified Industries Page

## Goal

Replace the six placeholder industry pages with one premium, accessible `/industries` experience. Header dropdown links will open the correct anchored section, while existing industry URLs remain usable through redirects.

## Build

1. **Create the unified page and content model**
   - Add a dedicated Industries page with route-specific metadata and canonical URL.
   - Organize only the supplied headings, products, applications, strengths, customer names, markets, certification wording, and 60°C limit in a structured data module.
   - Reuse the client-provided Automobile, Mining, Potable Water, Aerospace, Oil & Gas, Agriculture, product, partner, and certification images already in the project.

2. **Build the bright cinematic opening**
   - Compose the six existing industry images into one layered industrial scene using masks, depth, and a soft blue technical treatment rather than a pasted collage.
   - Add the requested headline, concise factual summary, and six accessible navigation markers.
   - Make the industry selector sticky below the fixed header on smaller screens and preserve generous touch targets.

3. **Give every industry a distinct composition**
   - **Automobile:** asymmetrical image/text opening, keyboard tabs for six application groups, capability strip, customer/market strip, and six compact strengths.
   - **Mining:** rugged visual opening, vertical solution rail, grouped wear/material-handling content, application labels, customer names, and India/UAE/Africa reach.
   - **Potable Water:** light aqua curved composition, product and application flow grids, strong WRAS feature with the exact 60°C statement, and supplied references.
   - **Aerospace & Defence:** precision blueprint composition, four interactive product panels, capability strengths, and HAL/BEL/DRDO names.
   - **Oil & Gas:** light/dark-blue contrast composition, key product grid, supplied strengths, and HPCL/BPCL/ONGC names.
   - **Agriculture:** warm technical composition, component grid, wide application strip, and supplied manufacturing strengths.

4. **Add restrained interaction and motion**
   - Implement section-specific reveals, subtle image depth, maximum 3° tilt, 3px active lifts, and 1.03 image scaling.
   - Add technical line, conveyor, wave, radar, pressure-flow, and mechanical motion treatments using semantic design tokens.
   - Respect reduced-motion preferences and disable unnecessary depth/parallax on touch and mobile layouts.

5. **Update navigation and preserve URLs**
   - Change the Industries dropdown to `/industries#automobile`, `#mining`, `#potable-water`, `#aerospace-defence`, `#oil-gas`, and `#agriculture` with the requested labels.
   - Make the top-level Industries control open `/industries` while retaining its dropdown behavior.
   - Convert existing `/industries/...` pages into redirects to their matching anchors so published links do not break.
   - Apply header-offset scrolling and robust hash handling after direct loads and client navigation.

6. **Verify the complete experience**
   - Check keyboard behavior, focus states, tabs/panels, anchor scrolling, image loading, and reduced motion.
   - Visually test desktop widths 1440, 1366, 1280, and 1024, plus mobile widths 430, 390, 375, and 360.
   - Confirm no horizontal overflow, hidden scroll targets, content overlap, browser errors, or broken legacy URLs.

## Technical Notes

- Keep the current Arul Polymers typography, logo, navigation animation, button styling, semantic color tokens, curved section language, footer, and enquiry call-to-action.
- Build focused Industries components rather than enlarging the homepage section file.
- Use native semantic sections and accessible tab/panel controls; all imagery receives descriptive alt text.
- Do not add claims or descriptions beyond the user-provided material and existing approved site content.