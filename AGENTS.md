<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Facilities manufacturing infrastructure is split into `/facilities/rubber` and `/facilities/plastics`; the former `/facilities/infrastructure` URL permanently redirects to Rubber to preserve existing links.
- The Awards & Recognition route uses permanent asset pointers and an accessible image-preview dialog, keeping approved award photographs independent of Drive access.
- The CSR page uses permanent supplied-photo pointers and an accessible gallery dialog; captions describe visible activities without inventing dates, beneficiaries, or impact figures.
- Latest client product photography is resolved through the shared product manifest and gallery component so navigation, permanent assets, and affected product pages remain synchronized.
- Product catalogue galleries share ApprovedProductGallery with Embla's looping track so autoplay, click pause, scroll resume, and accessible previews stay consistent without rewinding at the last photograph.
- Aerospace product photography is deduplicated from the approved product collection into one shared gallery, preserving every permanent image without category-specific presentation.
- Oil & Gas product photography is deduplicated from its approved collection into one shared gallery, preserving permanent images without category-specific sections.
- Rubber factory imagery uses one permanent asset collection and a three-slot Embla photo-only carousel for Manufacturing Flow; recycle offscreen photos on selection, not settle, so two-second playback cannot repeat only the initial slots.
- Job Openings renders a typed, browser-safe role collection and shared HR application links at the existing careers URL so future approved roles can be added without duplicating page markup.
- Product catalogue descriptions share the global product-description style so overview and expanded copy stay visually consistent across product pages.
- The homepage hero is a single full-width video with only a small "ENGINEERED INTO MOTION." caption; it has no industry labels, so no label sync is needed.
- Trusted Partners uses artwork-preserving normalized asset canvases and equal contain-fit slots so varying source margins cannot shrink or clip logos.
