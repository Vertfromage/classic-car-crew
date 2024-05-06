const express = require('express');
const session = require('express-session');
//const passport = require('./passport-config'); // Adjust path as necessary
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Setting up the session middleware
// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false
// }));

// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

// Define routes here or import them if they're in separate files
app.use('/', require('./src/routes/index'));

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

