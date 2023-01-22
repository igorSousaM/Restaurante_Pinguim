import pg from "pg";

const {Pool} = pg;

const connection = new Pool({
   port: 5432,
   host:"localhost",
   password:"driven",
   user:"postgres",
   database:"pinguimRestaurant"
})

export default connection