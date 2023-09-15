const mongoose = require("mongoose");

var Bert = new mongoose.Schema({
    time: {type:String},
    name: {type:String},
    status: {type:Number},
    score: {type:Number},
});

mongoose.model("Bert", Bert);