const mongoose = require("mongoose");

var configQueryDefaultCrawler = new mongoose.Schema({
    titlePage:{ type:Object },
    number_page_query: { type: Number },
    article_url_query: { type: String },
    title_query: { type: String },
    timeCreatePostOrigin_query: { type: String },
    category_query: { type: String },
    author_query: { type: String },
    content_query: { type: String },
    summary_query: { type: String },
    content_html_query: { type: String },
    summary_html_query: { type: String },
    start_urls:{ type: Object },
    correct_url_contain: { type: Object },
    incorrect_url_contain: { type: Object },
    type :{type: String}
});

mongoose.model("ConfigDefaultCrawler", configQueryDefaultCrawler);
