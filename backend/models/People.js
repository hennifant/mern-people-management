const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let peopleSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: Number,
    },
  },
  {
    collection: "peoples",
  }
);

module.exports = mongoose.model("People", peopleSchema);
