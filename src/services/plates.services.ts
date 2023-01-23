import {
  notFoundError,
  unauthorizedError,
} from "../middleware/error-handling.js";
import { Plate, PlateEntity } from "../protocols/Plate.js";
import platesRepository from "../repositories/plate.repository.js";

async function getListOfPlates(): Promise<PlateEntity[]> {
  const listOfPlates = await platesRepository.readAll();

  if (listOfPlates.rows.length === 0) {
    throw notFoundError();
  }

  return listOfPlates.rows;
}

async function getPlateById(id: string): Promise<PlateEntity> {
  const plateConsult = await platesRepository.readOneById(id);

  if (plateConsult.rows.length === 0) {
    throw notFoundError();
  }

  return plateConsult.rows[0];
}

async function getInfoPlates() {
  const list = await platesRepository.readInfo();

  if (list.rows.length === 0) {
    throw notFoundError();
  }

  return list.rows;
}

async function createPlate(plate: Plate): Promise<void> {
  const plateConsult = await platesRepository.readOneByName(plate.name);

  if (plateConsult.rows.length !== 0) {
    throw unauthorizedError();
  }

  await platesRepository.create(plate);
}

async function updatePlateById(plate: Plate, id: string): Promise<void> {
  const plateConsult = await getPlateById(id);

  if (!plateConsult) {
    throw notFoundError();
  }

  await platesRepository.update(plate, id);
}

async function deletePlateById(id: string): Promise<void> {
  const plateConsult = await getPlateById(id);

  if (!plateConsult) {
    throw notFoundError();
  }

  await platesRepository.exclude(id);
}

export const platesService = {
  getListOfPlates,
  getPlateById,
  getInfoPlates,
  createPlate,
  updatePlateById,
  deletePlateById,
};

