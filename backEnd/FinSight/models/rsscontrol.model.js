const mongoose = require("mongoose");

var rssControl = new mongoose.Schema({
  namePage: { type: String },
  urlPage: { type: String },
  modeTime: { type: String },
  dateLastCrawler: { type: String },
  time: { type: String },
  modePublic: { type: String },
  sumPost: { type: String },
  status: { type: String },
});

mongoose.model("RssControl", rssControl);
