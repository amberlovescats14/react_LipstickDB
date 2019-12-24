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
  name: {
    type: String,
    required: true,
    min: 2,
    max: 3
  },
  desc: {
    type: String,
    required: true,
    min: 3,
    max: 50
  },
  full: {
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