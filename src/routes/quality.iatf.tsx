import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quality/iatf")({
  beforeLoad: () => { throw redirect({ to: "/quality", hash: "iatf", statusCode: 301 }); },
});
