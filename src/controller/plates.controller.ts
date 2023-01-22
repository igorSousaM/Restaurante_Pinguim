import { Request, Response } from "express";
import connection from "../database/index.js";

async function getPlatesList(req: Request, res: Response) {
  try {
    const platesList = await connection.query("SELECT * FROM plates;");

    if (platesList.rows.length === 0) {
      return res.status(404).send("não tem pratos");
    }

    res.status(200).send(platesList.rows)
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { getPlatesList };
