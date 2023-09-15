const mongoose = require("mongoose");

var osMonth = new mongoose.Schema({
    timesplit: {type:Object},
    cpu: {type:Object},
    memory: {type:Object}
});

mongoose.model("OsMonth", osMonth);