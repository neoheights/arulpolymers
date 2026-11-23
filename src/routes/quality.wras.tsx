import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quality/wras")({
  beforeLoad: () => { throw redirect({ to: "/quality", hash: "wras", statusCode: 301 }); },
});
