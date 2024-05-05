const Update = require('../models/Update');

exports.addUpdate = async (req, res) => {
    const { carId, title, content } = req.body;
    const update = new Update({
        car: carId,
        title,
        content
    });
    try {
        await update.save();
        res.status(201).json(update);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUpdates = async (req, res) => {
    try {
        const updates = await Update.find({ car: req.params.carId });
        res.status(200).json(updates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUpdate = async (req, res) => {
    try {
        await Update.findByIdAndDelete(req.params.id);
        res.status(200).send('Update deleted');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
