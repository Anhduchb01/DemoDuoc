const mongoose = require("mongoose");
var contacts = new mongoose.Schema({
  customerName: {type: String},
  customerEmail: {type: String},
  customerPhone: {type: String},
  customerMsg: {type: String},
  customerSub: {type: String},
  scoreCaptcha: {type: Number},
  status:{type: Boolean},
  statusSpam:{type: Boolean},
  statusTrash:{type: Boolean},
  timeCreateContacts: { type: String },
});

mongoose.model("Contacts", contacts);