const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Logger = mongoose.model("Logger");

async function getPostByDay() {
    let topDailyPost = await Post.aggregate([
        { $group: { _id: "$timeCreatePostOrigin", count: { $sum: 1 } } },
        { $sort: { _id: -1 } },
        { $limit: 7 },
    ]);
    return topDailyPost
}

async function getTotalPost() {
    let sumPostCafeF = await Post.find({
        urlPageCrawl: "cafef",
        status: '0',
    });
    let sumPostCafeBiz = await Post.find({
        urlPageCrawl: "cafebiz",
        status: '0',
    });
    let sumPostBaodautu = await Post.find({
        urlPageCrawl: "baodautu",
        status: '0',
    });
    let sumVneconomy = await Post.find({
        urlPageCrawl: "vneconomy",
        status: '0',
    });
    let arrData = [];
    arrData.push(sumPostCafeF.length, sumPostCafeBiz.length, sumPostBaodautu.length, sumVneconomy.length);
    return arrData
}

async function getPercentArticleSuccess() {
    let article = await Post.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);
    return article
}

async function getLogCrawler() {
    let data = await Logger.find().sort({ _id: -1 }).limit(20);
    return data
}

module.exports = { getPostByDay, getTotalPost, getLogCrawler, getPercentArticleSuccess }
