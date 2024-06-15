const User = require('../models/user');

exports.registerUser = async (req, res) => {
    const { name, email, image } = req.body;
    try {
        const newUser = new User({
            name,
            email,
            image
        });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { name, email, image } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.user._id, { name, email }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user._id);
        res.status(200).send('User deleted');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
