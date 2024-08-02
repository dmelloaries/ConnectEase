import React, { useState, useEffect } from 'react';

const UpdateContactCard = ({ contact, onClose, onUpdate }) => {
    const [updatedContact, setUpdatedContact] = useState(contact);

    useEffect(() => {
        setUpdatedContact(contact);
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedContact);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    value={updatedContact.name || ''}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={updatedContact.phone || ''}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    value={updatedContact.email || ''}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Hobbies</label>
                <input
                    type="text"
                    name="hobbies"
                    value={updatedContact.hobbies || ''}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="flex justify-end">
                
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Update
                </button>
            </div>
        </form>
    );
};

export default UpdateContactCard;
