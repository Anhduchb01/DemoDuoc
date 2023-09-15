const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Sorting = mongoose.model("Sorting");
var dayjs = require("dayjs")

router.get("/", (req, res) => {
    message = "<h1>API FINSIGHT</h1>"
    res.send(message);

});



router.get("/home/getnews", async (req, res) => {
  //get data config sorting
  try {
    let arrayPost = []
    arrayPost = await Post.find({ status: '0' }).limit(8).sort({ timeCrawlPage: -1 });
      for (let i = 0; i < arrayPost.length; i++) {
          let article = arrayPost[i]
          let timeHasPassed = dayjs().diff(article.timeCrawlPage, 'days')
          timeHasPassed = Number(timeHasPassed)
          arrayPost[i].timeCrawlPage = timeHasPassed + ' day ago'
      }
    res.send(arrayPost)
  }
  catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }

});

module.exports = router;
