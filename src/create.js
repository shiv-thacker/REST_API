const express = require("express");
require("./db/conn");

const Mensranking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 8000;

//when we do this api to live at that time we use "process.env.PORT", so environment port number by itself.
// To crate api,we use pose, read:- get, Update : put(replace whole thing),patch(replace only specific thing), delete : delete

// TO POST THE DATA WITH POSTMAN
app.use(express.json()); //it's necessary to call, because without it, db can't understand the format of data

app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new Mensranking(req.body);
    console.log(req.body);
    const insertMens = await Mensranking.insertMany([addingMensRecords]);
    res.status(201).send(insertMens); // provide status code 201 to send request

    console.log(insertMens);
  } catch (err) {
    console.log(`${err}`);
    res.status(400).send(err); // provide status code 400 for duplicate data
  }
});

app.get("/", (req, res) => {
  res.send("Hello, welcome");
});

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
