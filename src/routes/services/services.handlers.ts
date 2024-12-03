import type { AppRouteHandler } from "@/lib/types";

import type { ServicesListRoute } from "./services.routes";

export const listServicesHandler: AppRouteHandler<ServicesListRoute> = (c) => {
  return c.json([
    {
      name: "Service 1",
      description: "This is the first service",
    },
    {
      name: "Service 2",
      description: "This is the second service",
    },
  ]);
};
