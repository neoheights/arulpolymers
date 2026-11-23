import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/capabilities/research-development")({
  beforeLoad: () => {
    throw redirect({ to: "/facilities/r-and-d", statusCode: 301 });
  },
});
