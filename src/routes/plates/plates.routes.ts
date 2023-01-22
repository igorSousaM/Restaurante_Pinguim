import { Router } from "express";
import { getPlatesList } from "../../controller/plates.controller.js";
const platesRouter = Router();

platesRouter.get("/plates", getPlatesList);


export { platesRouter };
