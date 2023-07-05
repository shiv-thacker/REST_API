const express = require("express");
require("./db/conn");

const app = express();
const port = process.env.PORT || 8000;
const router = require("./routers/men");

//when we do this api to live at that time we use "process.env.PORT", so environment port number by itself.
// To crate api,we use pose, read:- get, Update : put(replace whole thing),patch(replace only specific thing), delete : delete
app.use(express.json()); //it's necessary to call in createor update the data, because without it, db can't understand the format of data

app.use(router);
app.get("/", (req, res) => {
  res.send("Hello, welcome");
});

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
