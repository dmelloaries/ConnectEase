require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const contactRoutes = require('./routes/contactRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

app.use('/contacts', contactRoutes);
app.use('/send', emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
