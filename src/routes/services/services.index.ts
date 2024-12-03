import { createRouter } from "@/lib/create-app";

import * as handlers from "./services.handlers";
import * as routes from "./services.routes";

const router = createRouter()
  .openapi(routes.listServices, handlers.listServicesHandler);

export default router;
