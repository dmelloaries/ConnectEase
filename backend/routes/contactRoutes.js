const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

// Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching contacts' });
    }
});

// Create a new contact
router.post('/', async (req, res) => {
    try {
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
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedContact);
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(400).json({ error: error.errors });
    }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting contact' });
    }
});

module.exports = router;
