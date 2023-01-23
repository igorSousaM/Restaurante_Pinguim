import { Router } from "express";
import {
  deletePlate,
  getPlate,
  getPlatesList,
  postPlates,
  updatePlate,
} from "../../controller/plates.controller.js";
import { validateSchema } from "../../middleware/schemaValidation.js";
import { plateSchema } from "../../schemas/plates-schema.js";
const platesRouter = Router();

platesRouter
  .get("/plates", getPlatesList)
  .get("/plates/:id",getPlate)
  .post("/plates", validateSchema(plateSchema), postPlates)
  .patch("/plates/:id", validateSchema(plateSchema), updatePlate)
  .delete("/plates/:id", deletePlate);

export { platesRouter };
