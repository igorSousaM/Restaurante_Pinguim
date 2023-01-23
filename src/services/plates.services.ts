import { Plate } from "../protocols/Plate.js";
import platesRepository from "../repositories/plates-repository/index.js";

async function getListOfPlates() {
  const listOfPlates = await platesRepository.readAll();

  if (listOfPlates.rows.length === 0) {
    return null;
  }

  return listOfPlates.rows;
}

async function getPlateById(id: string) {
  const plateConsult = await platesRepository.readOneById(id);

  if (plateConsult.rows.length === 0) {
    return null;
  }

  return plateConsult.rows[0];
}

async function createPlate(plate: Plate) {
    
    const plateConsult = await platesRepository.readOneByName(plate.name);

    if (plateConsult.rows.length !== 0) {
      throw 404 // arrumar esse erro logo
    }

    await platesRepository.create(plate)
}

async function updatePlateById(plate: Plate,id: string){
    const plateConsult = await getPlateById(id)

    if (!plateConsult) {
      throw 404
    }

    await platesRepository.update(plate, id);
}

async function deletePlateById(id:string) {
    const plateConsult = await getPlateById(id)

    if (!plateConsult) {
      throw 404
    }

    await platesRepository.exclude(id);
}

export const platesService = {
  getListOfPlates,
  getPlateById,
  createPlate,
  updatePlateById,
  deletePlateById
};
