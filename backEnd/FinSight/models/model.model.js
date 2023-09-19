const mongoose = require("mongoose");

var Model = new mongoose.Schema({
    time: {type:String},
    name: {type:String},
    status: {type:Number},
    lastScore: {type:Number},
    score: {type:Number},
    isAi: {type:Number},
    isSystem: {type:Number},
    source: {type:String},
    articleHasTraining: {type: Array},
    lastTotalTag :{type:Number},
    totalTag:{type:Number},
    isPlayGround:{type:Number},
});

mongoose.model("Model", Model);