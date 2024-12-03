import index from "@/routes/index.routes";

import ConfigureOpenApi from "./lib/configure-open-api";
import createApp from "./lib/create-app";

const app = createApp();

const routes = [
  index,
];

ConfigureOpenApi(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
