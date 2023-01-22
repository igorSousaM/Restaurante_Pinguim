import express, { json } from "express";
import { router } from "./routes/index.js";
const server = express();

server.use(json())

server.use(router);

server.listen(4000, () => {
  console.log(`Server running on port ${4000}`);
});
