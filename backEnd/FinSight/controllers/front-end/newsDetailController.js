const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");



router.get("/detail-new/:id",async (req, res) => {
    
    
    let postData = await  Post.find({
      _id: req.params.id
      },(err, docs) => {
        if (!err) {
            return docs;
        } else {
            return false;
        }
    });
   res.send(postData);
});
          

module.exports = router;
