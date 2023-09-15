const mongoose = require("mongoose");
var tagmapai = new mongoose.Schema({
  article_id: { type: mongoose.Schema.Types.ObjectId },
  tag_id: { type: mongoose.Schema.Types.ObjectId },
  year:{type: String}
  // dateLastCrawler: { type: String },
  // statusPageCrawl: { type: String },
});

mongoose.model("Tagmapai", tagmapai);