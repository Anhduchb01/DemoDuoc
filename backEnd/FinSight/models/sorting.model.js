const mongoose = require("mongoose");
var sorting = new mongoose.Schema({
    percentLaster: { type: Number },
    percentViewed: { type: Number },
    pointDecreasePerDay: { type: Number },
    pointIncreasePerView: { type: Number },
    pointRequiredForTag: { type: Number },
    viewRequiredForTag: { type: Number },
});

mongoose.model("Sorting", sorting);