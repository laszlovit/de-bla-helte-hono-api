import type { AppOpenAPI } from "./types";

export default function ConfigureOpenApi(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "De Blå Helte API",
      version: "1.0.0",
    },
  });
}
