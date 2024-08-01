// src/components/Form.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ fetchContacts }) => {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        hobbies: ''
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/contacts', contact);
        fetchContacts();
        setContact({ name: '', phone: '', email: '', hobbies: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required className="p-2 border border-gray-300 rounded" />
            <input type="text" name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" required className="p-2 border border-gray-300 rounded" />
            <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required className="p-2 border border-gray-300 rounded" />
            <input type="text" name="hobbies" value={contact.hobbies} onChange={handleChange} placeholder="Hobbies" required className="p-2 border border-gray-300 rounded" />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </form>
    );
};

export default Form;
