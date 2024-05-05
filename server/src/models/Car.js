const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  make: String,
  model: String,
  year: Number,
  vin: { type: String, required: true, unique: true },
  trackers: [{
    title: String,
    value: String
  }]
});

module.exports = mongoose.model('Car', carSchema);
