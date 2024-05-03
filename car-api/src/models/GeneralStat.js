const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    dateRecorded: { type: Date, default: Date.now },
    type: String, // General category or user-defined category
    key: String,  // Specific stat name, user-defined
    value: mongoose.Schema.Types.Mixed, // Could be number, string, or even JSON object
    description: String, // Any additional details the user wants to add
    cost: { type: Number, default: 0 } // Cost involved, if applicable
});

module.exports = mongoose.model('Stats', statsSchema);
