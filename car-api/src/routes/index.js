const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const userController = require('../controllers/User');
const carController = require('../controllers/Car');
const updateController = require('../controllers/Update');

// Home page route
router.get('/', (req, res) => {
    res.send('Welcome to the Online Car Show API');
  });

// Health check or API status route
router.get('/status', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Service is up and running!' });
  });

router.use('/auth', authRoutes);  // For authentication related routes

// User routes
router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.put('/users/update', userController.updateUser);
router.delete('/users/delete', userController.deleteUser);

// Car routes
router.post('/cars', carController.addCar);
router.get('/cars/:id', carController.getCar);
router.put('/cars/:id', carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);

// Update routes
router.post('/updates', updateController.addUpdate);
router.get('/updates/:carId', updateController.getUpdates);
router.delete('/updates/:id', updateController.deleteUpdate);

module.exports = router;
