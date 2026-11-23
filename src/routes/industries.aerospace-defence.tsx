import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/aerospace-defence")({
  beforeLoad: () => { throw redirect({ to: "/industries", hash: "aerospace-defence", statusCode: 301 }); },
});
