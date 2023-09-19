const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Category = mongoose.model("Category")
const Post = mongoose.model("Post")

async function getType(){
    const typeArray = []
    const countType = await Post.aggregate([ {$match: {$and: [{ status: { $in: ['0'] } },{ isClassification: true }],},
      }, {"$group": {_id:"$type",  count:{$sum:1}}}, {"$sort": { count: -1 } }])
    for ( let type_id of countType){
      if (type_id._id == null || type_id._id == ''){
        typeArray.push({"name": 'Khác', "count": type_id.count})
      }
      else{
        typeArray.push({"name": type_id._id, "count": type_id.count})
      }
      
    }
    return typeArray
}
async function getListSourcePage(){
  const typeArray = []
  const countType = await Post.aggregate([ {$match: {$and: [{ status: { $in: ['0'] } },{ isClassification: true }],},
    }, {"$group": {_id:"$urlPageCrawl",  count:{$sum:1}}}, {"$sort": { count: -1 } }])
  for ( let type_id of countType){
    typeArray.push({"name": type_id._id, "count": type_id.count})
  }
  return typeArray
}


module.exports = { getType,getListSourcePage }