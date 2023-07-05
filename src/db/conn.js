const mongoose = require("mongoose");

// if you got depreciation error then use this 4 {use...},ex.  mongoose.connect("mongodb://0.0.0.0:27017",{useCreateIndex:true},{useNewUrlParser:true},{useUnifiedTopology:true})  etc.
mongoose
  .connect("mongodb://0.0.0.0:27017/olympics", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("dtabase connected successfully");
  })
  .catch((err) => {
    console.log(`database not connected because of this error : ${err}`);
  });
