import type { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import type { PinoLogger } from "hono-pino";

export interface AppBindigs {
  Variables: {
    logger: PinoLogger;
  };
}

export type AppOpenAPI = OpenAPIHono<AppBindigs>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindigs>;
