import connection from "../../database/index.js";
import { Plate } from "../../protocols/Plate.js";

function readPlates() {
  return connection.query("SELECT * FROM plates;");
}

function createPlate(plate: Plate) {
  const { name, price, description, cookingTime, type } = plate;

  return connection.query(
    'INSERT INTO plates (name, price, description,"cookingTime",type) VALUES ($1,$2,$3,$4,$5);',
    [name, price, description, cookingTime, type]
  );
}

const platesRepository = {
  readPlates,
  createPlate,
};

export default platesRepository;
