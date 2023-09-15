const mongoose = require("mongoose");
var category = new mongoose.Schema({
  name: {type: String}
});

mongoose.model("Category", category);