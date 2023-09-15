const mongoose = require("mongoose");

var crawler = new mongoose.Schema({
  addressPage: { type: String },
  URL : { type: String },
  modePage: { type: String },
  dateLastCrawler: { type: String },
  sumPost: { type: String },
  statusPageCrawl: { type: String },
  increasePost: { type: String },
  sumPostBlock: { type: String },
  sumPostSkip: { type: String },
  type:  { type: String },
});
mongoose.model("Crawler", crawler);
