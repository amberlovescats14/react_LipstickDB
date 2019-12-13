const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LipstickSchema = new Schema({
  brand: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  color: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  desc: {
    type: String,
    required: true,
    min: 3,
    max: 50
  },
  mini: {
    type: Boolean,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Lipstick = mongoose.model('Lipstick', LipstickSchema)
module.exports = Lipstick