const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Sorting = mongoose.model("Sorting");
const { getTopTag, getTagOfArticle } = require("../../service/front-end/tagService");
const { recommendArticle } = require("../../service/front-end/articleService");
const { getType ,getListSourcePage} = require("../../service/front-end/categoryService");




router.get("/get-all-news", async (req, res) => {
  try {
    
    // let objData = req.query.objData;
    let key = req.query.key;
    let number = req.query.page;
    let type = req.query.type;
    let archive = req.query.archive;
    let category = req.query.category;
    let postDisplay
    let totalPost
    if (type === '' | type == null) {
      totalPost = await Post.find({
        content: { $regex: String(key), $options: "i" },
        timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
        status: '0',
      });
      if (category === 'POS') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
          category : 'POS'
        })
          .sort({ timeCreatePostOrigin: -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
      if (category === 'NEG') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
          category : 'NEG'
        })
          .sort({ timeCreatePostOrigin: -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
      if (category === 'NEU') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
          category : 'NEU'
        })
          .sort({ timeCreatePostOrigin: -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
      if (category === '') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
        })
          .sort({ timeCreatePostOrigin: -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
    
    } else {
      totalPost = await Post.find({
        content: { $regex: String(key), $options: "i" },
        urlPageCrawl: type,
        timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
        status: '0',
        isClassification: true,
      });
      if (category === 'POS') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          urlPageCrawl: type,
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
          category : 'POS'
        })
          .sort({ timeCreatePostOrigin : -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
      if (category === 'NEG') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          urlPageCrawl: type,
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
          category : 'NEG'
        })
          .sort({ timeCreatePostOrigin: -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
      if (category === 'NEU') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          urlPageCrawl: type,
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
          category : 'NEU'
        })
          .sort({ timeCreatePostOrigin: -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
      
      if (category === '') {
        postDisplay = await Post.find({
          content: { $regex: String(key), $options: "i" },
          urlPageCrawl: type,
          timeCreatePostOrigin: { $regex: String(archive), $options: "i" },
          status: '0',
          isClassification: true,
        })
          .sort({ timeCreatePostOrigin: -1 })
          .limit(12)
          .skip((number - 1) * 12);
      }
    }
    // let conditionArticle = await Sorting.find({});
    let arrDataPost = [postDisplay, totalPost.length];
    res.send(arrDataPost);
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }
});

router.get("/get-tags", async (req, res) => {
  try {
    const result = await getTagOfArticle(req.query.id)
    res.send(result)
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }
});


router.get("/top-tag", async (req, res) => {
  try {
    const top_tag = await getTopTag();
    return res.send(top_tag);
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }

});

router.get("/recommend-article", async (req, res) => {
  try {
    const article_recommended = await recommendArticle(req.query.id);
    res.send(article_recommended);
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }
});

router.get("/type", async (req, res) => {
  try {
    const data = await getType();
    res.send(data);
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }
});

router.get("/list-source-page", async (req, res) => {
  try {
    const data = await getListSourcePage();
    res.send(data);
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }
});

router.get("/top-archive", async (req, res) => {
  try {
    
    let type = req.query.type;
    let topArchive = [];
    if (type !== "" ) {
      let arrArchive = await Post.aggregate([
        {
          $match: {
            $and: [
              { isClassification: true },
              { urlPageCrawl: { $in: [type] } },
              { status: { $in: ['0'] } },
            ],
          },
        },
        { $group: { _id: "$timeCreatePostOrigin", count: { $sum: 1 } } },
        { $sort: { _id: -1 } },
      ]);
      topArchive = arrArchive;
    }else if (type == "Khác") {
      let arrArchive = await Post.aggregate([
        {
          $match: {
            $and: [
              { urlPageCrawl: null},
              { status: { $in: ['0'] } },
            ],
          },
        },
        { $group: { _id: "$timeCreatePostOrigin", count: { $sum: 1 } } },
        { $sort: { _id: -1 } },
      ]);
      topArchive = arrArchive;
    } else {
      let arrArchive = await Post.aggregate([
        {
          $match: {
                
            $and: [
              { isClassification: true},
              { status: { $in: ['0'] } },
            ],
            
          },
        },
        { $group: { _id: "$timeCreatePostOrigin", count: { $sum: 1 } } },
        { $sort: { _id: -1 } },
      ]);
      topArchive = arrArchive;
    }
    const new_topArchive = []
    for (let index = 0; index < topArchive.length; index++) {
      let date = topArchive[index]._id
      topArchive[index]._id = topArchive[index]._id.substr(0, 7);
      const dateRegex = /^\d{4}\/\d{2}$/;
      if (dateRegex.test(topArchive[index]._id)) {
        new_topArchive.push(topArchive[index])
      } else {
        // It's not in the "year/month" format
        console.log("Invalid date format");
        console.log(date)
        
      }
    }

    var finalArr = new_topArchive.reduce((m, o) => {
      var found = m.find((p) => p._id === o._id);
      if (found) {
        found.count += o.count;
      } else {
        m.push(o);
      }
      return m;
    }, []);

    res.send(finalArr);
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }

});
module.exports = router;
