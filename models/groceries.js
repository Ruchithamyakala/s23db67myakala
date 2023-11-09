//const { Double } = require("mongodb")
const mongoose = require("mongoose")
const groceriesSchema = mongoose.Schema({
groceries_name: String,
groceries_quantity: String,
groceries_cost:Number,
})
module.exports = mongoose.model("groceries",groceriesSchema)