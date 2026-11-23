import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/about/company")({
  beforeLoad: () => {
    throw redirect({ to: "/about/the-company", statusCode: 301 });
  },
});
