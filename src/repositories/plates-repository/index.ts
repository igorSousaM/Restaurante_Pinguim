import connection from "../../database/index.js";
import { Plate } from "../../protocols/Plate.js";

function readAll() {
  return connection.query("SELECT * FROM plates;");
}

function readOneById(id: string) {
  return connection.query("SELECT * FROM plates WHERE id=$1;", [id]);
}

function readOneByName(name: string) {
  return connection.query("SELECT * FROM plates WHERE name=$1;", [name]);
}

function readInfo() {
  return connection.query(
    'SELECT type, count(type), min("cookingTime"), max("cookingTime") FROM plates GROUP BY type;'
  );
}

function create(plate: Plate) {
  const { name, price, description, cookingTime, type } = plate;

  return connection.query(
    'INSERT INTO plates (name, price, description,"cookingTime",type) VALUES ($1,$2,$3,$4,$5);',
    [name, price, description, cookingTime, type]
  );
}

function update(plate: Plate, id: string) {
  const { name, price, description, cookingTime, type } = plate;

  return connection.query(
    'UPDATE plates SET name=$1, price=$2, description=$3,"cookingTime"=$4,type=$5 WHERE id=$6;',
    [name, price, description, cookingTime, type, id]
  );
}

function exclude(id: string) {
  return connection.query("DELETE FROM plates WHERE id=$1;", [id]);
}

const platesRepository = {
  readAll,
  readOneById,
  readOneByName,
  readInfo,
  create,
  update,
  exclude,
};

export default platesRepository;
