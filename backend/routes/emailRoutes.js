const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

router.post('/', async (req, res) => {
    const { selectedContacts, email } = req.body;

    console.log('Selected Contacts:', selectedContacts);
    console.log('Recipient Email:', email);
    console.log('Gmail User:', process.env.GMAIL_USER);

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Selected Contacts',
        text: JSON.stringify(selectedContacts, null, 2),
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            if (error.response) {
                console.error('Error response:', error.response);
            }
            if (error.stack) {
                console.error('Error stack:', error.stack);
            }
            return res.status(500).json({ error: error.message });
        }
        console.log('Email sent successfully:', info);
        res.json({ message: 'Message sent', info });
    });
});

module.exports = router;
