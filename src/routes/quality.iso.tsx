import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quality/iso")({
  beforeLoad: () => { throw redirect({ to: "/quality", hash: "iso", statusCode: 301 }); },
});
