const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');
const contactSchema = require('../validations/contactValidation');

// Get all contacts
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// Create a new contact
router.post('/', async (req, res) => {
    try {
        
        contactSchema.parse(req.body);
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json(newContact);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
});

// Update a contact
router.put('/:id', async (req, res) => {
    try {
        
        contactSchema.parse(req.body);
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
});

module.exports = router;
