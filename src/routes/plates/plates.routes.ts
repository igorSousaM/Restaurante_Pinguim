import { Router } from "express";
import {
  getPlatesList,
  postPlates,
} from "../../controller/plates.controller.js";
import { validateSchema } from "../../middleware/schemaValidation.js";
import { plateSchema } from "../../schemas/plates-schema.js";
const platesRouter = Router();

platesRouter.get("/plates", getPlatesList);

platesRouter.post("/plates",validateSchema(plateSchema),postPlates);

export { platesRouter };
