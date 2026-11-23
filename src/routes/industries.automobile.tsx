import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/automobile")({
  beforeLoad: () => { throw redirect({ to: "/industries", hash: "automobile", statusCode: 301 }); },
});
