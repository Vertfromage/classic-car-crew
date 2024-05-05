const Car = require('../models/Car');

exports.addCar = async (req, res) => {
    const { make, model, year, vin } = req.body;
    const newCar = new Car({
        owner: req.user._id, // Assuming req.user is populated from the auth middleware
        make,
        model,
        year,
        vin
    });
    try {
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).send('Car not found');
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).send('Car deleted');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
