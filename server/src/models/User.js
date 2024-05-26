const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String, unique: true, sparse: true },
  profilePic: String
});

module.exports = mongoose.model('User', userSchema);