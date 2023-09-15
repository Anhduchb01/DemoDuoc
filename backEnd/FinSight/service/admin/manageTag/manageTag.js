const mongoose = require("mongoose");
const Post = mongoose.model("Post");
var slugify = require('slugify');
const { ObjectID } = require("bson");
const Model = mongoose.model('Model')
const HistoryGenerateTag = mongoose.model('HistoryGenerateTag')
const TagHistory = mongoose.model('TagHistorys')
const Tags = mongoose.model("Tag")
const Tagmap = mongoose.model("Tagmap");
var _ = require('lodash');
slugify('some string', {
    lower: true,

})
var capitalize = require('capitalize')

async function getListGenerateHistory() {
    let data = await HistoryGenerateTag.find({})
    let array = []
    for (let i = 0; i < data.length; i++) {
        let model_id = data[i].model_id
        if (model_id === 'Library (Underthesea)') { lang = await Model.find({ name: 'Library (Underthesea)' }) }
        else if (model_id === 'default') { lang = await Model.find({ name: 'AI NER Base' }) }
        else { lang = await Model.find({ _id: ObjectID(model_id) }) }

        let obj = { model_id: data[i].model_id, time: data[i].time, name: lang[0].name ,isPlayGround:lang[0].isPlayGround}
        array.push(obj)
    }
    return array
}

async function getListTagHistory(idModel, time, charSelectFilter) {
    let data
    idModel = String(idModel)
    time = String(time)
    if (idModel === 'Library (Underthesea)' || idModel === 'default' ) {
        data = await TagHistory.find({ 'model_id': idModel, 'name': { '$regex': '^' + charSelectFilter, '$options': 'i' } })
    }
    else data = await TagHistory.find({ 'model_id': idModel, time: time, 'name': { '$regex': '^' + charSelectFilter, '$options': 'i' } })
    return data
}

async function applyResultTagHistory(idModel, time) {
    let data
    idModel = String(idModel)
    time = String(time)
    let source = ''
    let lang
    let modelFind
    let tagId

    if (idModel === 'Library (Underthesea)' || idModel === 'default' ) data = await TagHistory.find({ 'model_id': idModel })
    else data = await TagHistory.find({ 'model_id': idModel, time: time })
    if (idModel === 'Library (Underthesea)') { modelFind = await Model.find({ name: 'Library (Underthesea)' }) }
    else if (idModel === 'default') { modelFind = await Model.find({ name: 'AI NER Base' }) }
    else { modelFind = await Model.find({ _id: ObjectID(idModel) }) }


    if (idModel === 'Library (Underthesea)') source = '0'
    else source = '1'

    let listTagRemove = await Tags.find({ source: source })
    let arrayIdTag = []
    for (let j = 0; j < listTagRemove.length; j++) {
        tagId = listTagRemove[j]._id
        tagId = String(tagId)
        arrayIdTag.push(ObjectID(tagId))
    }
    await Tagmap.deleteMany({ 'tag_id': { '$in': arrayIdTag } })
    await Tags.deleteMany({ '_id': { '$in': arrayIdTag } })


    for (let i = 0; i < data.length; i++) {
        let tag = data[i]
        let tags = new Tags();
        tags.name = tag.name
        tags.type = tag.type
        tags.score = tag.score
        tags.slug = tag.slug
        tags.source = source
        tags.tagStatus = 1
        tags.save();
        let tag_id = tags._id
        for (let j = 0; j < tag.listTagMap.length; j++) {
            let tagMap = tag.listTagMap[j]
            let tagMapDB = new Tagmap();
            tagMapDB.article_id = tagMap.article_id
            tagMapDB.year = tagMap.year

            tagMapDB.tag_id = ObjectID(tag_id)
            tagMapDB.save();
        }
    }
    if (idModel === 'Library (Underthesea)' ) {
        
        await Post.updateMany({ }, { $unset: { isTag: "" } })
        
        let dataHistoryGenerateTag = await HistoryGenerateTag.find({ 'model_id': idModel })
        let arrayDataHistoryGenerateTag = dataHistoryGenerateTag[0].listArticleHasProcessed
        for (let k = 0; k < arrayDataHistoryGenerateTag.length; k++) {
            let idArticleHasProcessed = arrayDataHistoryGenerateTag[k].article_id
            let status = arrayDataHistoryGenerateTag[k].isTag
            status = Boolean(status)
            idArticleHasProcessed = String(idArticleHasProcessed)
            await Post.updateOne({ "_id": ObjectID(idArticleHasProcessed) }, { $set: { 'isTag': status } })
        }
    } else {
        await Post.updateMany({  }, { $unset: { isTagAi: "" } })
        let dataHistoryGenerateTag = await HistoryGenerateTag.find({ 'model_id': idModel })
        let arrayDataHistoryGenerateTag = dataHistoryGenerateTag[0].listArticleHasProcessed
        for (let k = 0; k < arrayDataHistoryGenerateTag.length; k++) {
            let idArticleHasProcessed = arrayDataHistoryGenerateTag[k].article_id
            let status = arrayDataHistoryGenerateTag[k].isTagAi
            status = Boolean(status)
            idArticleHasProcessed = String(idArticleHasProcessed)
            await Post.updateOne({ "_id": ObjectID(idArticleHasProcessed) }, { $set: { 'isTagAi': status } })
        }
    }
    return 'finish'
}

async function mergeResultTagHistory(idModel, time) {
    let data
    idModel = String(idModel)
    time = String(time)
    let source = ''
    if (idModel === 'Library (English)' || idModel === 'Library (Japanese)' || idModel === 'defaultEN' || idModel === 'defaultJP') data = await TagHistory.find({ 'model_id': idModel })
    else data = await TagHistory.find({ 'model_id': idModel, time: time })

    if (idModel === 'Library (English)' || idModel === 'Library (Japanese)') source = '0'
    else source = '1'

    for (let i = 0; i < data.length; i++) {
        let tag = data[i]
        let nameTag = tag.name
        let tagExist = await Tags.find({ 'source': source, 'name': nameTag })
        if (tagExist.length !== 0) continue
        else {
            let tags = new Tags();
            tags.name = tag.name
            tags.type = tag.type
            tags.score = tag.score
            tags.slug = tag.slug
            tags.source = source
            tags.tagStatus = 1
            tags.save();
            let tag_id = tags._id
            for (let j = 0; j < tag.listTagMap.length; j++) {
                let tagMap = tag.listTagMap[j]
                let tagMapDB = new Tagmap();
                tagMapDB.article_id = tagMap.article_id
                tagMapDB.year = tagMap.year
                tagMapDB.language = tagMap.language
                tagMapDB.tag_id = ObjectID(tag_id)
                tagMapDB.save();
            }
        }
    }

    if (idModel === 'Library (English)' || idModel === 'Library (Japanese)') {
        let dataHistoryGenerateTag = await HistoryGenerateTag.find({ 'model_id': idModel, time: time })
        let arrayDataHistoryGenerateTag = dataHistoryGenerateTag[0].listArticleHasProcessed
        for (let k = 0; k < arrayDataHistoryGenerateTag.length; k++) {
            let idArticleHasProcessed = arrayDataHistoryGenerateTag[k].article_id
            let status = arrayDataHistoryGenerateTag[k].isTag
            status = Boolean(status)
            idArticleHasProcessed = String(idArticleHasProcessed)
            await Post.updateOne({ "_id": ObjectID(idArticleHasProcessed) }, { $set: { 'isTag': status } })
        }
    } else {
        let dataHistoryGenerateTag = await HistoryGenerateTag.find({ 'model_id': idModel, time: time })
        let arrayDataHistoryGenerateTag = dataHistoryGenerateTag[0].listArticleHasProcessed
        for (let k = 0; k < arrayDataHistoryGenerateTag.length; k++) {
            let idArticleHasProcessed = arrayDataHistoryGenerateTag[k].article_id
            let status = arrayDataHistoryGenerateTag[k].isTagAi
            status = Boolean(status)
            idArticleHasProcessed = String(idArticleHasProcessed)
            await Post.updateOne({ "_id": ObjectID(idArticleHasProcessed) }, { $set: { 'isTagAi': status } })
        }
    }
    console.log('finish');
    return 'finish'
}


async function getDataProcessTag(idModelOne, timeOne, idModelTwo, timeTwo) {
    let arrayStatusTag = []
    let arrayTypeTag = []
    let arrayTypeTagResultOne = []
    let arrayTypeTagResultTwo = []
    arrayStatusTag = await Tags.aggregate([
        { "$group": { _id: { type: "$tagStatus" }, count: { $sum: 1 } } }
    ])

    arrayTypeTag = await Tags.aggregate([
        { "$group": { _id: { type: "$type" }, count: { $sum: 1 } } }
    ])
    if (idModelOne !== '') {
        if (idModelOne === 'Library (Underthesea)' || idModelOne === 'default' ) {
            arrayTypeTagResultOne = await TagHistory.aggregate([
                { "$match": { 'model_id': idModelOne } },
                { "$group": { _id: '$type', count: { $sum: 1 } } }
            ])
        }
        else {
            arrayTypeTagResultOne = await TagHistory.aggregate([
                { "$match": { 'model_id': idModelOne, time: timeOne } },
                { "$group": { _id: '$type', count: { $sum: 1 } } }
            ])
        }

    }

    if (idModelTwo !== '') {
        if (idModelTwo === 'Library (Underthesea)'  || idModelTwo === 'default' ) {
            arrayTypeTagResultTwo = await TagHistory.aggregate([
                { "$match": { 'model_id': idModelTwo } },
                { "$group": { _id: '$type', count: { $sum: 1 } } }
            ])
        }
        else {
            arrayTypeTagResultTwo = await TagHistory.aggregate([
                { "$match": { 'model_id': idModelTwo, time: timeTwo } },
                { "$group": { _id: '$type', count: { $sum: 1 } } }
            ])
        }

    }
    let array = [arrayStatusTag, arrayTypeTag, arrayTypeTagResultOne, arrayTypeTagResultTwo]
    return array
}

async function getDataStatusCharSelectFilter() {
    let arrayChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let arrData = []
    let countStatusVerify = 0
    let countStatusPending = 0
    let countStatusIgnore = 0
    let objitem = {}
    const lisTag = []
    for (let i = 0; i < arrayChar.length; i++) {
        countStatusVerify = 0
        countStatusPending = 0
        countStatusIgnore = 0
        objitem = {}
        
        const lisTag = await Tags.aggregate([
            { "$match": {  "name": { $regex: '^' + arrayChar[i], $options: "i" } } },
            { "$project": { "name": 1, "tagStatus": 1, 'source': 1 } },
            { $group: { _id: "$name", tagStatus: { $push: "$tagStatus" }, source: { $push: "$source" } } }
        ]);


        for (let j = 0; j < lisTag.length; j++) {
            let status
            if (lisTag[j].source.length === 2) {
                if (lisTag[j].source[0] === '0') status = lisTag[j].tagStatus[1]
                if (lisTag[j].source[0] === '1') status = lisTag[j].tagStatus[0]
            } else { status = lisTag[j].tagStatus[0] }

            if (status === 2) countStatusIgnore += 1
            if (status === 1) countStatusPending += 1
            if (status === 0) countStatusVerify += 1
        }
        objitem = { 'char': arrayChar[i], 'verify': countStatusVerify, 'pending': countStatusPending, 'ignore': countStatusIgnore }
        arrData.push(objitem)
        
        
    }
    return arrData
}

async function getListTagSame(charSelectFilter, idModelOne, timeOne, idModelTwo, timeTwo) {
    let dataTable = []
    let dataOne = []
    let dataTwo = []
    let dataSame = []
    let objdata
    //query result Tag 
    
    
    const lisTag = await Tags.aggregate([
        { "$match": {  "name": { $regex: '^' + charSelectFilter, $options: "i" } } },
        {
            "$project": { "name": 1, "type": 1, "tagStatus": 1, 'source': 1, 'score': 1 }
        },

        { $group: { _id: "$name", type: { $push: "$type" }, tagStatus: { $push: "$tagStatus" }, source: { $push: "$source" }, score: { $push: "$score" } } }
    ]);
    let dataListTag = []
    for (let index = 0; index < lisTag.length; index++) {
        let tag = lisTag[index]
        dataListTag.push({ name: tag._id, type: tag.type[0], status: tag.tagStatus, source: tag.source, scoreOrigin: tag.score })
    }
    dataSame = _.cloneDeep(dataListTag)
    dataTable = _.cloneDeep(dataListTag)

    //query result 1 
    if (idModelOne === 'Library (Underthesea)' || idModelOne === 'default' ) {
        dataOne = await TagHistory.find({ 'model_id': idModelOne, 'name': { '$regex': '^' + charSelectFilter, '$options': 'i' } })
    }
    else dataOne = await TagHistory.find({ 'model_id': idModelOne, time: timeOne, 'name': { '$regex': '^' + charSelectFilter, '$options': 'i' } })

    //query result 2
    if (idModelTwo === 'Library (Underthesea)'  || idModelTwo === 'default' ) {
        dataTwo = await TagHistory.find({ 'model_id': idModelTwo, 'name': { '$regex': '^' + charSelectFilter, '$options': 'i' } })
    }
    else dataTwo = await TagHistory.find({ 'model_id': idModelTwo, time: timeTwo, 'name': { '$regex': '^' + charSelectFilter, '$options': 'i' } })
    for (let i = 0; i < dataOne.length; i++) {
        let itemSame = dataSame.find(x => x.name === dataOne[i].name)
        if (!itemSame) {
            dataSame.push(dataOne[i])
        }
    }
    for (let j = 0; j < dataTwo.length; j++) {
        let itemSame = dataSame.find(x => x.name === dataTwo[j].name)

        if (!itemSame) {
            dataSame.push(dataTwo[j])
        }
    }

    objdata = { table: dataTable, dataOne: dataOne, dataTwo: dataTwo, dataSame: dataSame }

    
    return objdata
}

async function getPercentTagVerify(pointVerify,verifyAiLib) {
    
    pointVerify = Number(pointVerify / 100)
    let tagVerify
    if(verifyAiLib==true|| verifyAiLib =='true'){
        tagVerify = await Tags.aggregate([
            {
              $match: {
                $or: [
                  {
                    score: {
                      $gt: pointVerify,
                    },
                  },
                  {
                    score: null,
                  },
                ],
              },
            },
            {
              $group: {
                _id: "$name",
                count: {
                  $sum: 1,
                },
              },
            },
            {
              $match: {
                count: 2,
              },
            },
          ])

    }else{
        let tagVerifyAI = await Tags.find({ score: { $gt: pointVerify } })
        const tagNames = tagVerifyAI.map(tag => tag.name);
        tagVerify = await Tags.find({ name: { $in: tagNames }});
    }
    let totalTagAi = await Tags.find({})
    let data = Math.ceil(tagVerify.length *100/ totalTagAi.length )
    return String(data)
}

async function savePercentTagVerify(pointVerify,verifyAiLib) {
    pointVerify = Number(pointVerify / 100)
    if(verifyAiLib==true|| verifyAiLib =='true'){
        await Tags.updateMany({ }, { $set: { tagStatus: 1 } })
        // await Tags.updateMany({ score: { $gt: pointVerify },tagStatus:1 }, { $set: { tagStatus: 0 } })
        // const listTag = await Tags.find({ tagStatus: 0 }).exec();

        // for (const tag of listTag) {
        //     const name = tag.name;
        //     await Tags.updateMany({ name: name }, { $set: { tagStatus: 0 } });
        // }

        const groupedTags = await Tags.aggregate([
            {
              $match: {
                $or: [
                  {
                    score: {
                      $gt: pointVerify,
                    },
                  },
                  {
                    score: null,
                  },
                ],
              },
            },
            {
              $group: {
                _id: "$name",
                count: {
                  $sum: 1,
                },
              },
            },
            {
              $match: {
                count: 2,
              },
            },
          ])
        for (const group of groupedTags) {
            const name = group._id;
            await Tags.updateMany({ name :name},  { $set: { tagStatus: 0 } });
        }
        

    }else{
        await Tags.updateMany({ }, { $set: { tagStatus: 1 } })
        await Tags.updateMany({ score: { $gt: pointVerify },tagStatus:1 }, { $set: { tagStatus: 0 } })
        const listTag = await Tags.find({ tagStatus: 0 }).exec();

        for (const tag of listTag) {
            const name = tag.name;
            await Tags.updateMany({ name: name }, { $set: { tagStatus: 0 } });
        }


    }
    console.log('Finish Verify')
    

   
            
    return 'finish'
}




module.exports = { getListGenerateHistory, getListTagHistory, applyResultTagHistory, mergeResultTagHistory, getDataProcessTag, getDataStatusCharSelectFilter, getListTagSame, savePercentTagVerify, getPercentTagVerify }