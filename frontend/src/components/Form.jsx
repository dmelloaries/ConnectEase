import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ fetchContacts }) => {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        hobbies: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/contacts', contact);
            fetchContacts();
            setContact({ name: '', phone: '', email: '', hobbies: '' });
            setSuccessMessage('User created successfully!');
            setShowSuccessPopup(true);
            setShowErrorPopup(false);
            setTimeout(() => {
                setShowSuccessPopup(false);
            }, 3000); 
        } catch (error) {
            setErrorMessage('Error creating user. Please try again.');
            setShowErrorPopup(true);
            setShowSuccessPopup(false);
            setTimeout(() => {
                setShowErrorPopup(false);
            }, 3000); 
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required className="p-2 border border-gray-300 rounded" />
                <input type="text" name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" required className="p-2 border border-gray-300 rounded" />
                <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required className="p-2 border border-gray-300 rounded" />
                <input type="text" name="hobbies" value={contact.hobbies} onChange={handleChange} placeholder="Hobbies" required className="p-2 border border-gray-300 rounded" />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            </form>

            {showSuccessPopup && (
                <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                    {successMessage}
                </div>
            )}
            {showErrorPopup && (
                <div className="mt-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg">
                    {"Enter Valid Details"}
                </div>
            )}
        </div>
    );
};

export default Form;
