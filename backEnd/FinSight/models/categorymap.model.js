const mongoose = require("mongoose");
var categorymap = new mongoose.Schema({
  article_id: { type: mongoose.Schema.Types.ObjectId },
  category_id: { type: mongoose.Schema.Types.ObjectId },
  // dateLastCrawler: { type: String },
  // statusPageCrawl: { type: String },
});

mongoose.model("Categorymap", categorymap);