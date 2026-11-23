import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quality/en")({
  beforeLoad: () => { throw redirect({ to: "/quality", hash: "en", statusCode: 301 }); },
});
