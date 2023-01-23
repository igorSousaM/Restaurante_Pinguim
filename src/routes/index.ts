import {Router } from "express";
import { platesRouter } from "./plates/plates.routes.js";


const router = Router();

router.use(platesRouter)

export default router ;
