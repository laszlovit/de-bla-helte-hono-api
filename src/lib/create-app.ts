import { pinoLogger } from "@/middlewares/pino-logger";
import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import type { AppBindigs } from "./types";

function createApp() {
  const app = new OpenAPIHono<AppBindigs>();
  // To avoid 404 errors when the favicon is requested
  app.use(serveEmojiFavicon("🧼"));

  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}

export default createApp;
