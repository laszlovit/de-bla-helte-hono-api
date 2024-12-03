import ConfigureOpenApi from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import index from "@/routes/index.routes";
import services from "@/routes/services/services.index";

const app = createApp();

const routes = [
  index,
  services,
];

ConfigureOpenApi(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
