const { ObjectId, Long } = require("bson");
const { Logger } = require("mongodb");
const mongoose = require("mongoose");
const Tagmap = mongoose.model("Tagmap");
const Tag = mongoose.model("Tag")
const Tagmapai = mongoose.model("Tagmapai");
const Tagai = mongoose.model("Tagai")
const chroma = require('chroma-js');
const { limits } = require("chroma-js");

async function generateWordCloud(time) {
    let year = '2023/12/31'
    let last_year =  '2023/01/01'
    if (time) {
        year = time + '/31'
        last_year = time + '/01'
    }
    const countTable = await Tagmap.aggregate([
        { "$match": { "$and": [
            { "year": { "$lt": year } },
            { "year": { "$gt": last_year } }
          ] } },
        
        { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
        {
            $unwind: {
                path: "$tags",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $match: {
              $or: [
                { "tags.tagStatus": 0 },
                { "tags.tagStatus": 1 }
              ]
            }
        },
        {
            $match: {
              "tags.type":"ORG"
            }
        },
        {
            "$project": {
                "tags.name": 1,
            }
        },
        {
            "$group": {
                "_id": {
                    "name": "$tags.name",
                },
                "count": { $sum: 1 },
            }
        }, { "$sort": { "count": -1 } },
    ]);
    const countTableTop = countTable.slice(0, 100)
    var tag_count = []
    for (let tag of countTableTop) {
        tag_count.push({ "name": tag._id.name, "count": tag.count })
    }

    var total = 0
    for (let i in tag_count) {
        total += tag_count[i].count
    }
    var palett_domain = []
    for (let i in tag_count) {
        tag_count[i].percent = parseFloat((tag_count[i].count / total * 100).toFixed(1))
        if (!palett_domain.includes(tag_count[i].percent)) {
            palett_domain.push(tag_count[i].percent)
        }

    }
    palett_domain = palett_domain.sort((a, b) => (a > b ? -1 : 1))
    var color = chroma.scale(['#00E396', '#0DE6C5', '#0CDCE6', '#0AA8DB', '#008FFB']).colors(palett_domain.length)
    for (let i in tag_count) {
        tag_count[i].color = color[palett_domain.indexOf(tag_count[i].percent)]
    }
    return tag_count
}

async function generateDataByYear(time) {
    let year = '2023/12/31'
    let last_year =  '2023/01/01'
    if (time) {
        year = time + '/31'
        last_year = time + '/01'
    }
    
    const result = await Tagmap.aggregate([
        { "$match": { "$and": [
            { "year": { "$lt": year } },
            { "year": { "$gt": last_year } }
          ] } },
        { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
        {
            $unwind: {
                path: "$tags",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            "$match": {
              $or: [
                { "tags.tagStatus": 0 },
                { "tags.tagStatus": 1 }
              ]
            }
       },
       {
        $match: {
          "tags.type":"ORG"
        }
    },
       
        { "$lookup": { from: "posts", localField: "article_id", foreignField: "_id", as: "post" } },
        {
            $unwind: {
                path: "$post",
                preserveNullAndEmptyArrays: true
            },
        },
        { "$match": { "post.status": '0' } },
        {
            "$project": {
                "_id": 0,
                "tags.name": 1,
                "post.category": 1
            }
        },
        {
            "$group": {
                "_id": {
                    "category": "$post.category",
                    "name": "$tags.name",
                },
                "count": { $sum: 1 },
            }
        }, { "$sort": { "count": -1 } },

        {
            "$group": {
                "_id": "$_id.category",
                "children": {
                    "$push": {
                        "name": "$_id.name",
                        "count": "$count",
                    },
                },
            }
        },
        { $project: { name: "$_id", children: { $slice: ["$children", 25] } } },
    ]);
    return result;
}
async function countTotalTagAllYear() {
    let arrResult = []
    let year = '2023/12/31'
    const arrayTagLib = await Tagmap.aggregate([
        { "$match": { year: { "$lt": year } } },
        { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
        {
            $unwind: {
                path: "$tags",
                preserveNullAndEmptyArrays: true
            }
        }, { "$match": { "tags.source": '0',"$or": [
            { "tags.tagStatus": 0 },
            { "tags.tagStatus": 1 }
          ] } },
          {
            $match: {
              "tags.type":"ORG"
            }
        },
        { "$lookup": { from: "posts", localField: "article_id", foreignField: "_id", as: "post" } },
        {
            $unwind: {
                path: "$post",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            "$project": {
                "_id": 0,
                "tag_id": 1,
                "year": {
                    $concat: [
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 0] },
                      "/",
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 1] }
                    ]
                    },
                "tags.name": 1,

            }
        },
        {
            "$group": {
                "_id": {

                    "tag_id": "$tag_id",
                    "year": "$year",
                    "name": "$tags.name",
                },

            }
        },
        {
            "$group": {
                "_id": "$_id.year",
                "data": {
                    "$push": {
                        "name": "$_id.name",
                        "count": "$tagIdCount",

                    },
                },
                "count": { $sum: 1 }
            }
        }, { "$sort": { "_id": 1 } },
    ]);
    const arrayTagAI = await Tagmap.aggregate([
        { "$match": { year: { "$lt": year } } },
        { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
        {
            $unwind: {
                path: "$tags",
                preserveNullAndEmptyArrays: true
            }
        }, { "$match": { "tags.source": '1',"$or": [
            { "tags.tagStatus": 0 },
            { "tags.tagStatus": 1 }
          ] } },
          {
            $match: {
              "tags.type":"ORG"
            }
        },
        { "$lookup": { from: "posts", localField: "article_id", foreignField: "_id", as: "post" } },
        {
            $unwind: {
                path: "$post",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            "$project": {
                "_id": 0,
                "tag_id": 1,
                "year": {
                    $concat: [
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 0] },
                      "/",
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 1] }
                    ]
                    },
                "tags.name": 1,
            }
        },
        {
            "$group": {
                "_id": {
                    "tag_id": "$tag_id",
                    "year": "$year",
                    "name": "$tags.name",
                },
            }
        },
        {
            "$group": {
                "_id": "$_id.year",
                "data": {
                    "$push": {
                        "name": "$_id.name",
                        "count": "$tagIdCount",
                    },
                },
                "count": { $sum: 1 }
            }
        }, { "$sort": { "_id": 1 } },
    ]);
    arrResult = [arrayTagLib, arrayTagAI]
    return arrResult;
}


async function countTopTag(time) {
    {
        let last_year =  '2023/01/01'
        let year = '2023/12/31'
        if (time) {
            year = time + '/31'
            last_year = time + '/01'
        }
        const result = await Tagmap.aggregate([
            { "$match": { "$and": [
                { "year": { "$lt": year } },
                { "year": { "$gt": last_year } }
              ] } },
            { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
            {
                $unwind: {
                    path: "$tags",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: {
                  $or: [
                    { "tags.tagStatus": 0 },
                    { "tags.tagStatus": 1 }
                  ]
                }
              },
              {
                $match: {
                "tags.type":"ORG"
                }
            },
            { "$lookup": { from: "posts", localField: "article_id", foreignField: "_id", as: "post" } },
            {
                $unwind: {
                    path: "$post",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "tag_id": 1,
                    "year": {
                        $concat: [
                          { $arrayElemAt: [{ $split: ["$year", "/"] }, 0] },
                          "/",
                          { $arrayElemAt: [{ $split: ["$year", "/"] }, 1] }
                        ]
                        },
                    "tags.name": 1,
                    // "post.category": 1
                }
            },
            {
                "$group": {
                    "_id": {
                        "name": "$tags.name",
                    },
                    "count": { $sum: 1 },
                }
            }, { "$sort": { "count": -1 } },
            { "$limit": 25 },
        ]);
        return result;
    }
}
async function countTagByCategoryAllYear() {
    let arrResult
    let year = '2023/12/31'
    const resultLib = await Tagmap.aggregate([
        { "$match": { year: { "$lt": year } } },
        { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
        {
            $unwind: {
                path: "$tags",
                preserveNullAndEmptyArrays: true
            }
        }, {
            "$match": { "tags.source": '0' ,"$or": [
            { "tags.tagStatus": 0 },
            { "tags.tagStatus": 1 }
          ]} 
        },
        {
            $match: {
              "tags.type":"ORG"
            }
        },
        
        { "$lookup": { from: "posts", localField: "article_id", foreignField: "_id", as: "post" } },
        {
            $unwind: {
                path: "$post",
                preserveNullAndEmptyArrays: true
            },
        },
        { "$match": { "post.status": '0' } },
        {
            "$project": {
                "_id": 0,
                "tags.name": 1,
                "post.category": 1,
                "year": {
                    $concat: [
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 0] },
                      "/",
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 1] }
                    ]
                    },
            }
        },
        {
            "$group": {
                "_id": {
                    "category": "$post.category",
                    "name": "$tags.name",
                    "year": "$year",
                },
                "count": { $sum: 1 },
            }
        }, { "$sort": { "count": -1 } },

        {
            "$group": {
                "_id": {
                    "year": "$_id.year",
                    "category": "$_id.category",

                },
                "count": { $sum: 1 },
            }
        },
        {
            $group: {
                _id: "$_id.year", value: {
                    "$push": {
                        "category": "$_id.category",
                        "count": "$count",
                    },
                }
            }
        }, { "$sort": { "_id": 1 } },

    ]);

    const resultAI = await Tagmap.aggregate([
        { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
        {
            $unwind: {
                path: "$tags",
                preserveNullAndEmptyArrays: true
            }
        }, { "$match": { "tags.source": '1' ,"$or": [
            { "tags.tagStatus": 0 },
            { "tags.tagStatus": 1 }
          ]} },
          {
            $match: {
              "tags.type":"ORG"
            }
        },
        { "$lookup": { from: "posts", localField: "article_id", foreignField: "_id", as: "post" } },
        {
            $unwind: {
                path: "$post",
                preserveNullAndEmptyArrays: true
            },
        },
        { "$match": { "post.status": '0' } },
        {
            "$project": {
                "_id": 0,
                "tags.name": 1,
                "post.category": 1,
                "year": {
                    $concat: [
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 0] },
                      "/",
                      { $arrayElemAt: [{ $split: ["$year", "/"] }, 1] }
                    ]
                    },
            }
        },
        {
            "$group": {
                "_id": {
                    "category": "$post.category",
                    "name": "$tags.name",
                    "year": "$year",
                },
                "count": { $sum: 1 },
            }
        }, { "$sort": { "count": -1 } },

        {
            "$group": {
                "_id": {
                    "year": "$_id.year",
                    "category": "$_id.category",
                },
                "count": { $sum: 1 },
            }
        },
        {
            $group: {
                _id: "$_id.year", value: {
                    "$push": {
                        "category": "$_id.category",
                        "count": "$count",
                    },
                }
            }
        }, { "$sort": { "_id": 1 } },
    ]);
    arrResult = [resultLib, resultAI]
    return arrResult
}

module.exports = {
    generateWordCloud,
    generateDataByYear,
    countTotalTagAllYear,
    countTopTag,
    countTagByCategoryAllYear
}