import type { PinoLogger } from "hono-pino";

export interface AppBindigs {
  Variables: {
    logger: PinoLogger;
  };
}
