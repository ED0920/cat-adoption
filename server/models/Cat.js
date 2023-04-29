const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const catSchema = new Schema({
  state: {
    type: String,
    required: true,
    enum: ['NSW', 'Vic', 'Qld', 'SA', 'WA', 'Tas', 'NT', 'ACT'],
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 40,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  colour: {
    type: String,
    required: true,
    enum: ['Solid', 'Tabby', 'Shaded', 'Particolour', 'Pointed'],
  },
  personality: {
    type: String,
    required: true,
    enum: ['Active', 'Playful', 'Aggressive', 'Sociable'],
  },
  bioText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  imgFilename: {
    type: String,
    required: true,
    match: [/.+\.png/, 'Must be a png file!'],
  },
  adopted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Cat = model('Cat', catSchema);

module.exports = Cat;
