import express from "express";
import cors from "cors";
import { addMusician, getAllMusicians } from "./src/functions.js";

const app = express();
app.use(express.json());
const PORT = 4012;

//Routes
app.get("/musicians", getAllMusicians);
app.post("/add-musician", addMusician);

app.listen(PORT, () => {
  console.log(`Now listening on port: http://localhost:${PORT}`);
});
