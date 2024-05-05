const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  date: { type: Date, default: Date.now },
  title: String,
  content: String
});

module.exports = mongoose.model('Update', updateSchema);
