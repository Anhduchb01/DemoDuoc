const mongoose = require("mongoose");

var osMetric = new mongoose.Schema({
    time: { type:String },
    timesplit: {type:Object},
    cpu: {type:Object},
    memory: {type:Object},
    isAvg: {type: Boolean, default: false}
});

mongoose.model("OsMetric", osMetric);