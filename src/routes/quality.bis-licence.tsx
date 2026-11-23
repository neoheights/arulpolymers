import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quality/bis-licence")({
  beforeLoad: () => { throw redirect({ to: "/quality", hash: "bis", statusCode: 301 }); },
});
