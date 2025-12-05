import app, { port } from "./config/express.js";
import swaggerUi from "swagger-ui-express";

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
import YAML from "yamljs";

const swaggerDocument = YAML.load("./docs/swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
