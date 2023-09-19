const mongoose = require("mongoose");
var tags = new mongoose.Schema({
  name: {type: String},
  slug: {type: String},
  type: {type: String},
  score: {type: Number},
  source:{type: String},
  tagStatus:{type: Number}
});

mongoose.model("Tag", tags);