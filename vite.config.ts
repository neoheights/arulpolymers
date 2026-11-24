// The shared base config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Uploaded images, videos and PDFs are referenced as /__l5e/assets-v1/... paths, which only
// Lovable hosting serves. On Vercel, rewrite those requests to the Lovable-published site.
const LOVABLE_ASSET_ORIGIN = "https://arulpolymers.capsley.site";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(process.env.VERCEL
    ? {
        nitro: {
          routeRules: {
            "/__l5e/**": { proxy: `${LOVABLE_ASSET_ORIGIN}/__l5e/**` },
          },
        },
      }
    : {}),
});
