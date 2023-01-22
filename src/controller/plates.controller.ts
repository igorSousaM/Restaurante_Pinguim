import { Request, Response } from "express";
import connection from "../database/index.js";
import { Plate } from "../protocols/Plate.js";
import platesRepository from "../repositories/plates-repository/index.js";

async function getPlatesList(req: Request, res: Response) {
  try {
    const platesList = await platesRepository.readPlates();

    if (platesList.rows.length === 0) {
      return res.status(404).send("não tem pratos");
    }

    res.status(200).send(platesList.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function postPlates(req: Request, res: Response) {
  const newPlate = req.body as Plate;

  try {
    await platesRepository.createPlate(newPlate)

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { getPlatesList, postPlates };
