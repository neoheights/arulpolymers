import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/capabilities/infrastructure")({
  beforeLoad: () => {
    throw redirect({ to: "/facilities/rubber", statusCode: 301 });
  },
});
