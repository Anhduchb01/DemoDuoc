const mongoose = require("mongoose");
const Tagmap = mongoose.model("Tagmap");
const Tags = mongoose.model("Tag")
const Post = mongoose.model("Post");
const TagHistory = mongoose.model("TagHistorys");
const logToFile = require("../logger")
var slugify = require('slugify');
const { ObjectId } = require("bson");
slugify('some string', {
    lower: true,

})
var capitalize = require('capitalize')
function tagExist(arr, tag_name, tag_type) {
    for (let tag of arr) {
        if (tag.name === tag_name && tag.type === tag_type) {
            return true
        }
    }
    return false
}

async function getTopTag(lang) {

    {

        const result = await Tagmap.aggregate([
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
            { "$lookup": { from: "posts", localField: "article_id", foreignField: "_id", as: "post" } },
            {
                $unwind: {
                    path: "$post",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                "$project": {
                    // "_id": 0,
                    // "tag_id": 1,
                    "year": { $arrayElemAt: [{ "$split": ["$year", "/"] }, 0] },
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
            { "$limit": 10 },
        ]);
        return result;
    }
}

async function getListTag(charSelectFilter) {
    
        const lisTag = await Tagmap.aggregate([
            { "$lookup": { from: "tags", localField: "tag_id", foreignField: "_id", as: "tags" } },
            {
                $unwind: {
                    path: "$tags",
                    preserveNullAndEmptyArrays: true
                }
            },
            { "$match": { "tags.name": {$regex: '^'+charSelectFilter, $options:"i"} } },
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
                   
                }
            }
        ]);

        for (let index = 0; index < lisTag.length; index++) {
            let tag = lisTag[index]
                let arrayTag = await Tags.find({ name: tag._id.name });
                tag.data = arrayTag
        }
        let data = lisTag
        return data
    
}

async function getTagOfArticle(article_id) {

    //get tag which is processed by nltk or spacy tag
    let articleHasTags = await Tagmap.find({ article_id: article_id });
    let tagLibs = [];
    for (let article of articleHasTags) {
        let tag = await Tags.findOne({ _id: article.tag_id, source: '0' });
        if (tag !== null) tagLibs.push({ 'name': tag.name, 'type': tag.type, 'score': tag.tagStatus });
    }

    //get tag which is processed by Machine learning
    articleHasTags = await Tagmap.find({ article_id: article_id });
    let tagAis = [];
    for (let article of articleHasTags) {
        let tag = await Tags.findOne({ _id: article.tag_id, source: '1' });
        if (tag !== null) tagAis.push({ 'name': tag.name, 'type': tag.type, 'score': tag.tagStatus });
    }

    let filterSameTag = []
    //get tag in both tagLibs and tagAis
    for (let tag of tagLibs) {
        if (tagExist(tagAis, tag.name, tag.type)) {
            filterSameTag.push({ 'name': tag.name, 'type': tag.type, 'score': tag.score })
        }
    }

    //sort tag by alphabetical order
    tagLibs = tagLibs.sort(function (a, b) {
        var keyA = a.name
        keyB = b.name
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    })

    tagAis = tagAis.sort(function (a, b) {
        var keyA = a.name
        keyB = b.name
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    })

    // sort tag by tag in filterSameTag
    let tagLibSorts = []
    let tagAiSorts = []

    tagLibSorts = await tagAiSorts.concat(filterSameTag)
    tagAiSorts = await tagAiSorts.concat(filterSameTag)

    for (let tag of tagLibs) {
        if (!tagExist(filterSameTag, tag.name, tag.type)) {
            tagLibSorts.push({ 'name': tag.name, 'type': tag.type, 'score': tag.score })
        }
    }

    for (let tag of tagAis) {
        if (!tagExist(filterSameTag, tag.name, tag.type)) {
            tagAiSorts.push({ 'name': tag.name, 'type': tag.type, 'score': tag.score })
        }
    }

    let sameTagName = []
    for (let tag of filterSameTag) {
        sameTagName.push(tag.name)
    }

    const result = {
        tag: tagLibSorts,
        tagai: tagAiSorts,
        same: sameTagName
    }
    return result
}

async function updateScoreTag(tag, score) {
    await Tags.updateMany(
        { name: tag },
        {
            $set: {
                score: score,
            },
        }
    );
    return 'finish'
}

async function addTag(arrayAddTag) {
    for (let index = 0; index < arrayAddTag.length; index++) {
        let tag = arrayAddTag[index].name
        let checkType = arrayAddTag[index].type
        let TagCapital = capitalize.words(tag)
        let slug = slugify(tag)
        let findTag = await Tags.find({ name: TagCapital, source: '1' })
        // Khi Tag Chưa tồn tại
        if (findTag.length === 0) {
            // tạo tag trong bảng tags
            let newTag = new Tags();
            newTag.name = TagCapital;
            newTag.slug = slug;
            newTag.type = checkType;
            newTag.score = 100;
            newTag.source = '1';
            newTag.save();
            let _idTag = newTag._id

            //Tìm các bài viết chứa tag và lưu Obj tagmap

            let arayArticle = await Post.find({ description: { $regex: tag, $options: "i" }, })
            for (let i = 0; i < arayArticle.length; i++) {
                let newTagMap = new Tagmap();
                newTagMap.article_id = ObjectId(arayArticle[i]._id);
                newTagMap.language = arayArticle[i].languageCrawl;
                newTagMap.year = arayArticle[i].timeCreatePostOrigin;
                newTagMap.tag_id = ObjectId(_idTag);
                newTagMap.save();
            }
        } else {
            let _idTagFind
            for (let i = 0; i < findTag.length; i++) {
                _idTagFind = findTag[i]._id
            }
            await Tags.updateMany(
                { name: TagCapital },
                {
                    $set: {
                        score: 100,
                        type: checkType,
                    },
                }
            );
            let flagCheckId
            let arayArticle = await Post.find({ description: { $regex: tag, $options: "i" }, })
            let arrayTagArticleAlreadyExist = await Tagmap.find({ tag_id: _idTagFind })
            for (let x = 0; x < arayArticle.length; x++) {
                flagCheckId = false
                for (let y = 0; y < arrayTagArticleAlreadyExist.length; y++) {
                    if (arayArticle[x]._id.toString() === arrayTagArticleAlreadyExist[y].article_id.toString()) {
                        flagCheckId = true
                        break;
                    }
                }
                if (!flagCheckId) {
                    let newTagMap = new Tagmap();
                    newTagMap.article_id = ObjectId(arayArticle[x]._id);
                    newTagMap.language = arayArticle[x].languageCrawl;
                    newTagMap.year = arayArticle[x].timeCreatePostOrigin;
                    newTagMap.tag_id = ObjectId(_idTagFind);
                    newTagMap.save();
                }
            }
        }
    }

    return 'finish'

}


function calculateTag(arr) {
    let type_person = 0
    let type_org = 0
    let type_misc = 0
    let type_loc = 0

    if (arr.find(d => d._id === 'PER')) {
        type_person = arr.find(d => d._id === 'PER').count
    }
    if (arr.find(d => d._id === 'ORG')) {
        type_org = arr.find(d => d._id === 'ORG').count
    }
    if (arr.find(d => d._id === 'MISC')) {
        type_misc = arr.find(d => d._id === 'MISC').count
    }
    if (arr.find(d => d._id === 'LOC')) {
        type_loc = arr.find(d => d._id === 'LOC').count
    }


    let total = type_person + type_org + type_misc + type_loc

    return { "total": total, "person": type_person, "org": type_org, "misc": type_misc, "loc": type_loc }
}
function calculatePostTag(arr) {

    let totalPostTagComplete = 0
    let totalPostTagCompleteTrue = 0
    let totalPostTagCompleteFalse = 0
    let totalPostTagUnfinished = 0
    let totalPost = 0

    if (arr.find(d => d._id === null)) {
        totalPostTagUnfinished = arr.find(d => d._id === null).count
    }
    if (arr.find(d => d._id === true)) {
        totalPostTagCompleteTrue = arr.find(d => d._id === true).count
    }
    if (arr.find(d => d._id === false)) {
        totalPostTagCompleteFalse = arr.find(d => d._id === false).count
    }
    totalPostTagComplete = totalPostTagCompleteTrue + totalPostTagCompleteFalse
    totalPost = totalPostTagUnfinished + totalPostTagComplete
    return { "totalPost": totalPost, "postTagComplete": totalPostTagComplete, "PostTagUnfinished": totalPostTagUnfinished }

}


async function getStatisticTag() {
    let tagLibs = await Tags.aggregate([
        { "$match": { source: '0' } },
        { "$group": { _id: "$type", count: { $sum: 1 } } }
    ])
    let tagAis = await Tags.aggregate([
        { "$match": { source: '1' } },
        { "$group": { _id: "$type", count: { $sum: 1 } } }
    ])
    let totalTagPostLib = await Post.aggregate([
        { "$match": { status: '0' } },
        { "$group": { _id: "$isTag", count: { $sum: 1 } } }
    ])
    let totalTagPostAi = await Post.aggregate([
        { "$match": { status: '0' } },
        { "$group": { _id: "$isTagAi", count: { $sum: 1 } } }
    ])
    let totalPostLib = calculatePostTag(totalTagPostLib)
    let totalPostAi = calculatePostTag(totalTagPostAi)


    let statAi = calculateTag(tagAis)
    let statLib = calculateTag(tagLibs)
    let statAll = {
        "total": statAi.total + statLib.total,
        "person": statAi.person + statLib.person,
        "org": statAi.org + statLib.org,
        "loc": statAi.loc + statLib.loc,
        "misc": statAi.misc + statLib.misc,
    }
    let summary = {
        "sum": statAll,
        "ai": statAi,
        'lib': statLib,
        'postLib': totalPostLib,
        'postAi': totalPostAi,
    }

    return summary
}

async function getEditTag(tag, type, status) {
    await Tags.updateMany(
        { name: tag },
        {
            $set: {
                tagStatus: status,
                type: type,
            },
        }
    );
    return 'finish'
}


module.exports = { getTopTag, getTagOfArticle, getStatisticTag, getListTag, updateScoreTag, addTag, getEditTag }