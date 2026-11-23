import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/oil-gas")({
  beforeLoad: () => { throw redirect({ to: "/industries", hash: "oil-gas", statusCode: 301 }); },
});
