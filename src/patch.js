const express = require("express");
require("./db/conn");

const Mensranking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 8000;

//when we do this api to live at that time we use "process.env.PORT", so environment port number by itself.
// To crate api,we use pose, read:- get, Update : put(replace whole thing),patch(replace only specific thing), delete : delete

//TO HANDLE THE REQ OF INDIVIDUAL patch
app.use(express.json());
app.patch("/mens/:id", async (req, res) => {
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

app.get("/", (req, res) => {
  res.send("Hello, welcome");
});

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
