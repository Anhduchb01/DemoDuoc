const request = require("request");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const {savePercentArticleVerify, getPercentArticleVerify, getListModelClassificationHistory, applyArticleHasProcessed, getListArticle,getDataFlowChart,getArticleSelectPopup,getArticleSelect ,getEditArticle,createModelDefault,createModel,listModelClassification,updateModelClassification,deleteModelClassification,queryArticleClassificationSuccess, getArticleAppend} = require('../../service/admin/classification/classification')
const Model = mongoose.model('Model')
const { ObjectID } = require("bson");
const dotenv = require('dotenv');
dotenv.config();

router.get("/admin/classification", (req, res) => {
    res.render("admin/main/classification", { title: 'Classification' });
});

router.get("/classification/get-article", async (req, res) => {
    let number = req.query.page || 1
    let data = await getListArticle(number)
    res.send(data)
})
router.get("/classification/data-flow-chart", async (req, res) => {
    let data = await getDataFlowChart()
    res.send(data)
})

router.get("/classification/article-classification-success", async (req, res) => {
    let data = await queryArticleClassificationSuccess()
    res.send(data)
})

router.get("/classification/get-article-select", async (req, res) => {   
    let number = req.query.page || 1
    let data = await getArticleSelect(number,req.query.idModel,req.query.time)
    res.send(data)
})

router.get("/classification/get-article-select-popup", async (req, res) => {
    let data = await getArticleSelectPopup(req.query.id)
    res.send(data)
})

router.get("/classification/get-article-append", async (req, res) => {   
    let number = req.query.page || 1
    let data = await getArticleAppend(number,req.query.idModel,req.query.time)
    res.send(data)
})


router.get("/classification/apply-article-has-processed", async (req, res) => {   
    let data = await applyArticleHasProcessed(req.query.idModel,req.query.time)
    res.send(data)
})

router.get('/classification/save-edit-article', async (req, res) => {
    let articleEdit = await getEditArticle(req.query.id,req.query.category,req.query.status)
    res.send(articleEdit)
})

//model classification

// api POST: create Default model
router.post("/models/classification/create-model-default", async (req, res) => {
    let message = await createModelDefault(req.query.sourceModel)
    res.send(message)
})

// api POST: create BERT model
router.post("/models/classification/create-model", async (req, res) => {
    let model = await createModel(req.body.time, req.body.name, req.body.idModelParent,req.body.sourceModel)
    res.send(model)
})

// api GET: list model
router.get("/models/classification/get-list-model", async (req, res) => {
    let data = await listModelClassification(req.query.sourceModel)
    res.send(data)
})


// api PUT: change BERT model name with ID
router.put("/models/classification/update-model/:id", async (req, res) => {
    console.log(req.params.id)
    console.log(req.body.name)
    await updateModelClassification(req.params.id, req.body.name)
    res.send({ "message": "model has updated successfully" })
})

router.get('/classification/get-percent-article-verify', async (req, res) => {
    let data = await getPercentArticleVerify(req.query.pointVerify)
    res.send(data)

})

router.get("/classification/save-percent-article-verify", async (req, res) => {
    let data = await savePercentArticleVerify(req.query.pointVerify)
    res.send('finish')
})

// api DELETE: remove BERT model with ID
router.delete("/models/classification/delete-model/:id", async (req, res) => {
    await deleteModelClassification(req.params.id)
    res.send({ "message": "model has been successfully" })
})

router.get("/classification/get-list-model-classification-history", async (req, res) => {
    let data = await getListModelClassificationHistory()
    res.send(data)
})
// extract data for sentiment
router.get("/getdata/sentiment", async (req, res) => {
    request(`http://localhost:5000/extract-data-for-sentiment`, function (error, response, body) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
          } else {
            res.send(body);
          }
    })
    
})
// execute model classification
router.get("/models/classification/execute-model", async (req, res) => {
    let result =request(`http://localhost:5000/process-classification/model-ai?id=${req.query.id}&time=${req.query.time}&page=finsight`, async function (error, response, body) {
        if (error) {
            if (req.query.id === 'default') {
                await Model.updateOne({ "name": 'AI Sentiment Analysis Base' }, { "status": 2 })
            }
            else {await Model.updateOne({"_id": ObjectID(req.query.id)}, { "status": 2 })}
        }
    })
    res.send('request execute cussess')
})
// training model classification
router.get("/models/classification/training-model", async (req, res) => {
    console.log('request training classification js success')
    console.log(`API : ${process.env.API_URL}/training-classification/model-ai?id=${req.query.id}&page=finsight`)
    await Model.updateOne({"_id": ObjectID(req.query.id)}, { "status": 1 })
    let result =request(`http://localhost:5000/training-classification/model-ai?id=${req.query.id}&page=finsight`, async function (error, response, body) {
        if (error) { await Model.updateOne({"_id": ObjectID(req.query.id)}, { "status": 2 })}
    })
    res.send('request train cussess')
})

module.exports = router;
