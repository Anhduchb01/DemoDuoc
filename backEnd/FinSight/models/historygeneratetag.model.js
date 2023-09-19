const mongoose = require("mongoose");
var historyGenerateTag = new mongoose.Schema({
  time: {type: String},
  model_id: {type: String},
  listArticleHasProcessed: {type: Array},
  statusTraining:{type: Boolean},
});

mongoose.model("HistoryGenerateTag", historyGenerateTag);