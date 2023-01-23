import Joi from "joi";
import { Plate } from "../protocols/Plate.js";

const plateSchema = Joi.object<Plate>({
  name: Joi.string().required().min(3),
  price: Joi.number().integer().min(0),
  description: Joi.string().required(),
  cookingTime: Joi.number().integer().min(10),
  type: Joi.string().required().valid("entrada","sobremesa","prato principal"),
});

export { plateSchema };
