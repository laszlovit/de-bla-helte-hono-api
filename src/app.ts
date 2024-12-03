import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";

import { pinoLogger } from "./middlewares/pino-logger";

interface AppBindigs {
  Variables: {
    logger: PinoLogger;
  };
}

const app = new OpenAPIHono<AppBindigs>();
app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.var.logger.info("This is an info log");
  throw new Error("This is an error");
});

app.notFound(notFound);
app.onError(onError);

export default app;
