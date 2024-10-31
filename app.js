import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import errorControllers from "./controllers/errorController.js";
import usuariosRoutes from "./routes/usuarios.js";
import swagger from "./routes/swagger.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api-docs", swagger);
app.use("/usuarios", usuariosRoutes);
app.use(errorControllers.error404);

app.listen(port, () => {
  console.log(`Aplicacion funcionando en http://localhost:${port}/usuarios`);
});
