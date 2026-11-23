import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/agriculture")({
  beforeLoad: () => { throw redirect({ to: "/industries", hash: "agriculture", statusCode: 301 }); },
});
