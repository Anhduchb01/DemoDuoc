const mongoose = require("mongoose");
var newsletter = new mongoose.Schema({
  email: {type: String},
  subscribe:{type: Boolean},
  timeCreate: { type: String },
});

mongoose.model("Newsletter", newsletter);