const mongoose = require("mongoose");
var historyClassification = new mongoose.Schema({
  model_id: {type: String},
  time:{type: String},
  article_id: { type: mongoose.Schema.Types.ObjectId },
  classificationScore: {type: Object},
  category:{type: String},
});

mongoose.model("HistoryClassification", historyClassification);