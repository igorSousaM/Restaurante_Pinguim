import { Router } from "express";
import {
  deletePlate,
  getPlate,
  getPlates,
  postPlate,
  updatePlate,
} from "../../controller/plates.controller.js";
import { validateSchema } from "../../middleware/schemaValidation.js";
import { plateSchema } from "../../schemas/plates-schema.js";
const platesRouter = Router();

platesRouter
  .get("/plates", getPlates)
  .get("/plates/:id",getPlate)
  .post("/plates", validateSchema(plateSchema), postPlate)
  .patch("/plates/:id", validateSchema(plateSchema), updatePlate)
  .delete("/plates/:id", deletePlate);

export { platesRouter };
