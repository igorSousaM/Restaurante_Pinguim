import Joi from "joi";
import { Plate } from "../protocols/Plate.js";

const plateSchema = Joi.object<Plate>({
  name: Joi.string().required(),
  price: Joi.number().min(0),
  description: Joi.string().required(),
  cookingTime: Joi.number().min(0),
  type: Joi.string().required(),
});

export { plateSchema };
