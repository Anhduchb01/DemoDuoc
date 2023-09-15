const mongoose = require("mongoose");
var tagai = new mongoose.Schema({
  name: { type: String },
  slug: { type: String },
  type: { type: String },
  score: { type: Number },
});

mongoose.model("Tagai", tagai);