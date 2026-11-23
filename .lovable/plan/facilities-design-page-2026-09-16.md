# Facilities → Design page

## What will be built

- Replace the current Design placeholder with a complete page using the existing Arul Polymers header, footer, typography, and blue/white/red visual system.
- Build an engineering-focused opening with the supplied MillTraj report as the genuine visual evidence.
- Add a Solid Edge section that states only the confirmed licensed CAD software use and reserves a clearly labeled space for a future approved screenshot or model.
- Build the main MillTraj section around the original report, including an enlarged zoomable viewer and a separate circular-diagram presentation that does not alter the source data.
- Present the approved example ore, operating, and mill inputs in two readable technical panels, explicitly labeled as report-specific example parameters.
- Add a lifter-design section using an accurate crop from the supplied report and explanatory text without guessing measurements.
- Finish with the requested Contact call-to-action.

## Interaction and layout

- Desktop uses large asymmetric 55/45 engineering layouts; mobile stacks images and content with no horizontal overflow.
- The report viewer opens as an accessible full-screen modal with zoom controls, reset, keyboard closing, and touch-friendly controls.
- Motion stays decorative: clip reveals, line drawing, subtle depth, and restrained hover emphasis. Reduced-motion and touch users receive a stable version.
- Technical values remain static and unchanged.

## Technical details

- Store the original uploaded MillTraj image through the project asset service and retain it unchanged.
- Produce pixel-preserving crops only for the circular simulation and lifter-detail presentations; the full original remains available in the viewer.
- Reuse the existing page shell, navigation, footer, reveal behavior, and semantic color tokens.
- Add route-specific title, description, social metadata, and canonical URL for `/facilities/design`.

## Verification

- Check laptop and mobile widths for readable imagery, aligned data panels, working modal zoom, keyboard access, reduced motion, and zero horizontal overflow.
- Run the project type check and inspect the rendered page before completion.
