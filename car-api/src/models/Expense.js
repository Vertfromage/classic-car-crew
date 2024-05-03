const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    date: Date,
    type: String, // e.g., 'part', 'labor', 'emergency'
    amount: Number,
    description: String
});

module.exports = mongoose.model('Expense', expenseSchema);
