const mongoose = require("mongoose");

var keywordCrawler = new mongoose.Schema({
  keyword: { type: String },
  site: { type: String },
  modeTime: { type: String },
  dateLastCrawler: { type: String },
  timeSchedule: { type: Object },
  sumPost: { type: String },
  statusPageCrawl: { type: String },
  increasePost: { type: String },
});

mongoose.model("KeywordCrawler", keywordCrawler);