const { request } = require("express");
const express = require("express");
var router = express.Router();
var dayjs = require("dayjs");
const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const Post = mongoose.model("Post");
const Crawler = mongoose.model("Crawler");
const Logger = mongoose.model("Logger");


const Categorymap = mongoose.model("Categorymap");


// router.get('*', function(req, res){
//     res.status(404).render('admin/main/404',{ layout:'./admin/layouts/container404' });
//   });
  
module.exports = router;