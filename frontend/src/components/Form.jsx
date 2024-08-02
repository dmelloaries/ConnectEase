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
            await axios.post('https://connectease-backend.onrender.com/contacts', contact);
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
        <div className="flex flex-col items-center p-4 md:p-8 space-y-4 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md w-full">
                <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="hobbies"
                    value={contact.hobbies}
                    onChange={handleChange}
                    placeholder="Hobbies"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Save
                </button>
            </form>

            {showSuccessPopup && (
                <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                    {successMessage}
                </div>
            )}
            {showErrorPopup && (
                <div className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default Form;
