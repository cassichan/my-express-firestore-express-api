import { dbConnect } from "./fsConnect.js";

export function getAllMusicians(req, res) {
  // connect to db
  const db = dbConnect();
  // get all docs from musicians collection
  db.collection("musicians-cc-1")
    .get()
    .then((collection) => {
      // reshape collection to array
      const musicians = collection.docs.map((doc) => doc.data());
      // send array to response
      res.send(musicians);
    })
    .catch((err) => handleError(err, res));
}

export function addMusician(req, res) {
  // get a new musician from request body
  const newMusician = req.body;
  // connect to database
  const db = dbConnect();
  // add that musician to musicians collection
  db.collection("musicians-cc-1")
    .add(newMusician)
    .then((doc) => {
      res.status(201).send({
        success: true,
        id: doc.id,
      });
    })
    .catch((err) => handleError(err, res));
  // send back new doc id
}

function handleError(err, res) {
  console.error(err);
  res.status(500).send(err);
}
