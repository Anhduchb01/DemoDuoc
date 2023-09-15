const mongoose = require("mongoose");

var ConfigCrawlerPDF = new mongoose.Schema({
  titlePage:{ type: String },
  urlPage:{ type: String },
  namePage: { type: String },
  modeSchedule: { type: Boolean },
  timeSchedule: { type: Object },
  modePublic: { type: Boolean },
  modeCookies: { type: Boolean },
  modeRobotsParser: { type: Boolean },
  timeOutCrawl: { type: Number },
  timeRetryCrawl: { type: Number },
  timeDelayCrawl: { type: Number },
  cookies: { type: String },
  userAgent: { type: String },
  httpHeader: { type:Object },
  number_page_query: { type: Number },
  article_url_query: { type: String },
  article_url_query1: { type: String },
  title_query: { type: String },
  timeCreatePostOrigin_query: { type: String },
  source: { type: String },
  number_CK: { type: String },
  id_pdf: { type: String },
});

mongoose.model("ConfigCrawlerPDF", ConfigCrawlerPDF);
