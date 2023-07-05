const express = require("express");
const Mensranking = require("../models/mens");
const router = new express.Router();

// TO POST THE DATA WITH POSTMAN

router.post("/mens", async (req, res) => {
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
router.get("/mens", async (req, res) => {
  try {
    const getMens = await Mensranking.find({}).sort({ _id: 1 }); // it means it's in ascending order
    res.send(getMens);

    console.log("get whole data");
  } catch (err) {
    console.log(`${err}`);
    res.status(400).send(err); // provide status code 400 for duplicate data
  }
});

//TO HANDLE THE REQ OF INDIVIDUAL
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id; //this params.id & /mens/:id  should be same
    const getMen = await Mensranking.find({ _id }); // here's key & value actually {_id : _id}, but the key,value is same so we can write only _id
    res.send(getMen);

    console.log("get whole data");
  } catch (err) {
    console.log(`${err}`);
    res.status(400).send(err); // provide status code 400 for duplicate data
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id; //this params.id & /mens/:id  should be same
    const getMen = await Mensranking.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); // here's key & value actually {_id : _id}, but the key,value is same so we can write only _id
    res.send(getMen);

    //  console.log("get whole data");
  } catch (err) {
    console.log(`${err}`);
    res.status(500).send(err); // error in update data
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id; //this params.id & /mens/:id  should be same
    const getMen = await Mensranking.findByIdAndDelete(_id); // here's key & value actually {_id : _id}, but the key,value is same so we can write only _id
    res.send(getMen);

    //  console.log("get whole data");
  } catch (err) {
    console.log(`${err}`);
    res.status(500).send(err); // error in update data
  }
});

module.exports = router;
