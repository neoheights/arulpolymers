import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/mining-mineral-process")({
  beforeLoad: () => { throw redirect({ to: "/industries", hash: "mining", statusCode: 301 }); },
});
