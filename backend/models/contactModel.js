const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    hobbies: String
});

module.exports = mongoose.model('Contact', contactSchema);
