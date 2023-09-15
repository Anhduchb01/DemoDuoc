const mongoose = require("mongoose");

var Report = new mongoose.Schema({
        id_item: {type:String},
        date: {type: String},
        title: {type:String},
        source: {type:Number},
        number_CK: {type:Number},
        id_pdf: {type:Number},
});

mongoose.model("Report", Report);