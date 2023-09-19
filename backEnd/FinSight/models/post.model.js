const mongoose = require("mongoose");

var post = new mongoose.Schema({
  url: { type: String },
  title: { type: String },
  description: { type: String },
  urlimage: { type: String },
  contenthtml: { type: String },
  urlPageCrawl: { type: String },
  timeCrawlPage: { type: String },
  timeCreatePostOrigin: { type: String },
  category: { type: String },
  status:{ type: String },
  isTag:{type: Boolean},
  isTagAi:{type: Boolean},
  classificationStatus:{type: Number},
  classificationScore:{type: Object},
  view:{type: Number},
  hotPoint:{type: Number},
  isClassification:{type: Boolean},
});

mongoose.model("Post", post);
