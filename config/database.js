import mongoose from "mongoose";

// ES6 Promises
mongoose.Promise = global.Promise;

mongoose.connect(
  // `mongodb+srv://root:Chetu%40123@cluster0.ljtvv7m.mongodb.net/sample_mflix`
  `mongodb://localhost:27017/test`
);

mongoose.connection
  .once("open", function () {
    console.log("Connection has been made, now make fireworks...");
    //done();
  })
  .on("error", function (error) {
    console.log("Connection error:", error);
  });

export default mongoose;
