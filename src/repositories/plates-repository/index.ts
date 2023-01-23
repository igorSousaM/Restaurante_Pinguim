import connection from "../../database/index.js";
import { Plate } from "../../protocols/Plate.js";

function readPlates() {
  return connection.query("SELECT * FROM plates;");
}

function readPlateById(id: string) {
  return connection.query("SELECT * FROM plates WHERE id=$1;", [id]);
}

function createPlate(plate: Plate) {
  const { name, price, description, cookingTime, type } = plate;

  return connection.query(
    'INSERT INTO plates (name, price, description,"cookingTime",type) VALUES ($1,$2,$3,$4,$5);',
    [name, price, description, cookingTime, type]
  );
}

function updatePlate(plate: Plate,id) {
  const { name, price, description, cookingTime, type } = plate;

  return connection.query(
    'UPDATE plates SET name=$1, price=$2, description=$3,"cookingTime"=$4,type=$5 WHERE id=$6;',
    [name, price, description, cookingTime, type,id]
  );
}

function deletePlate(id: string){
  return connection.query('DELETE FROM plates WHERE id=$1;',[id])
}

const platesRepository = {
  readPlates,
  readPlateById,
  createPlate,
  updatePlate,
  deletePlate
};

export default platesRepository;
