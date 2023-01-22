import express from "express";
import { router } from "./routes/index.js";
const server = express();

server.use(router);

server.listen(4000, () => {
  console.log(`Server running on port ${4000}`);
});
