const mongoose = require("mongoose");

var post = new mongoose.Schema({
  urlPost: { type: String },
  title: { type: String },
  description: { type: String },
  namePage: { type: String },
  timeCreatePostOrigin: { type: String },
});

mongoose.model("RssPost", post);
