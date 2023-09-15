const mongoose = require("mongoose");
const Bert = mongoose.model('Bert')

// service create model
async function createModel(time, name, language) {
    let model = { "time": time, "name": name, "language": language, status: 0, score: 0 }
    let id = await Bert.create(model)
    return id
}

// service list all model
async function listModel() {
    let model = await Bert.find().sort("time")
    return model
}

// service remove model with id
async function deleteModel(id){
    await Bert.deleteOne({"_id": id})
}

// service update model with id
async function updateModel(id, name){
    await Bert.updateOne({"_id": id}, {"name": name})
}


module.exports = {createModel, listModel, deleteModel, updateModel}