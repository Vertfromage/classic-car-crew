const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Define routes here or import them if they're in separate files
app.use('/', require('./src/routes/index'));

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

