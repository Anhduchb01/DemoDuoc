const mongoose = require("mongoose");

var Schedule = new mongoose.Schema({
  day: { type: String },
  hour: [String],
});

mongoose.model("Schedule", Schedule);
