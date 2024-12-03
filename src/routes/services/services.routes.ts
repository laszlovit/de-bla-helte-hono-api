import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";

const tags = ["Services"];

export const listServices = createRoute({
  tags,
  path: "/services",
  method: "get",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(z.object({
        name: z.string(),
        description: z.string(),
      })),
      "List of services",
    ),
  },
});

export type ServicesListRoute = typeof listServices;
