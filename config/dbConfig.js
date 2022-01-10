const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/artistify";

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log(
      `connected to mongo data base name : ${result.connections[0].name} `
    );
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });
