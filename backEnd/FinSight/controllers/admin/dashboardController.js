const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Logger = mongoose.model("Logger");
const { getPostByDay, getTotalPost, getLogCrawler, getPercentArticleSuccess } = require('../../service/admin/dashboard/dashboard.js')

router.get('/admin', (req, res) => {
  res.send('Admin API')
})

router.get("/post-by-day", async (req, res) => {
  let data = await getPostByDay()
  res.send(data);
});
router.get("/get-percent-article-success", async (req, res) => {
  let data = await getPercentArticleSuccess()
  res.send(data);
});

router.get("/total-post", async (req, res) => {
  let data = await getTotalPost()
  res.send(data);
});

router.get("/get-log", async (req, res) => {
  let data = await getLogCrawler()
  res.send(data);
});

module.exports = router;