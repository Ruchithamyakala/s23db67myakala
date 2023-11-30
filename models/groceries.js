//const { Double } = require("mongodb")
const mongoose = require("mongoose")
const groceriesSchema = mongoose.Schema({
groceries_name: String,
groceries_quantity: {
  type: Number,
  required: true,
  min: 1.5,
  max: 6,
},
groceries_cost:{
    type: Number,
    required: true,
    min: 100,
    max: 1000,
  },
})
module.exports = mongoose.model("groceries",groceriesSchema)