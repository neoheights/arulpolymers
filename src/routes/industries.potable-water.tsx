import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/potable-water")({
  beforeLoad: () => { throw redirect({ to: "/industries", hash: "potable-water", statusCode: 301 }); },
});
