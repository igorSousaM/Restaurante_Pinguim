import { Request, Response } from "express";
import { Plate } from "../protocols/Plate.js";
import { platesService } from "../services/plates.services.js";

async function getPlates(req: Request, res: Response) {
  try {
    const platesList = await platesService.getListOfPlates();

    res.status(200).send(platesList);
  } catch (err) {
    if (err.type === "error_not_found") {
      return res.sendStatus(404);
    } else {
      console.log(err);
      return res.sendStatus(500);
    }
  }
}

async function getPlate(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const plate = await platesService.getPlateById(id);

    res.status(200).send(plate);
  } catch (err) {
    if (err.type === "error_not_found") {
      return res.sendStatus(404);
    } else {
      console.log(err);
      return res.sendStatus(500);
    }
  }
}

async function getInfo(req: Request, res: Response) {}

async function postPlate(req: Request, res: Response) {
  const newPlate = req.body as Plate;

  try {
    await platesService.createPlate(newPlate);

    res.sendStatus(201);
  } catch (err) {
    if (err.type === "unauthorized_attempt") {
      return res.sendStatus(409);
    } else {
      console.log(err);
      return res.sendStatus(500);
    }
  }
}

async function updatePlate(req: Request, res: Response) {
  const { id } = req.params;
  const changePlate = req.body as Plate;

  try {
    await platesService.updatePlateById(changePlate, id);

    res.status(202).send("alterado");
  } catch (err) {
    if (err.type === "error_not_found") {
      return res.sendStatus(404);
    } else {
      console.log(err);
      return res.sendStatus(500);
    }
  }
}

async function deletePlate(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await platesService.deletePlateById(id);
    res.status(200).send("deletado");
  } catch (err) {
    if (err.type === "error_not_found") {
      return res.sendStatus(404);
    } else {
      console.log(err);
      return res.sendStatus(500);
    }
  }
}

export { getPlates, getPlate, postPlate, updatePlate, deletePlate, getInfo };
