const mongoose = require("mongoose");
var tagHistory = new mongoose.Schema({
  model_id: {type: String},
  name: {type: String},
  slug: {type: String},
  type: {type: String},
  score: {type: Number},
  listTagMap: {type: Array},
  time:{type: String}
});

mongoose.model("TagHistorys", tagHistory);