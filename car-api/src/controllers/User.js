const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    // Authentication is usually handled by middleware; just a placeholder
    res.send('User logged in');
};

exports.updateUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.user._id, { username, email }, { new: true });
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
