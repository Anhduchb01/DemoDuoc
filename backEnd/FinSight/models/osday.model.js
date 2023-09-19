const mongoose = require("mongoose");

var osDay = new mongoose.Schema({
    time: {type:String},
    timesplit: {type:Object},
    cpu: {type:Object},
    memory: {type:Object}
});

mongoose.model("OsDay", osDay);