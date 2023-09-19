const mongoose = require("mongoose");

var logger = new mongoose.Schema({
  status: { type: String },
  page: { type: String },
  message: { type: String },
  timelog:{ type: String },
});

mongoose.model("Logger", logger);
