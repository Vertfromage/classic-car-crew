const mongoose = require('mongoose');

const maintenanceRecordSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    dateOfService: Date,
    serviceType: String,
    serviceDetails: String,
    cost: Number,
    provider: String // Name of the mechanic or service center
});

module.exports = mongoose.model('MaintenanceRecord', maintenanceRecordSchema);
