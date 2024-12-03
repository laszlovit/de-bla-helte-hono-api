import { pinoLogger } from "@/middlewares/pino-logger";
import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";

import type { AppBindigs } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBindigs>({ strict: false, defaultHook });
}

function createApp() {
  const app = createRouter();
  // To avoid 404 errors when the favicon is requested
  app.use(serveEmojiFavicon("🧼"));

  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}

export default createApp;
