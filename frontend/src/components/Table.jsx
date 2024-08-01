// src/components/Table.jsx
import React from 'react';
import axios from 'axios';

const Table = ({ contacts, fetchContacts, setSelectedContacts }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/contacts/${id}`);
        fetchContacts();
    };

    const handleUpdate = async (id) => {
        const updatedName = prompt('Enter new name');
        await axios.put(`http://localhost:5000/contacts/${id}`, { name: updatedName });
        fetchContacts();
    };

    const handleSelect = (contact) => {
        setSelectedContacts((prevSelected) => [...prevSelected, contact]);
    };

    return (
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/12 py-2">Select</th>
                    <th className="w-1/12 py-2">ID</th>
                    <th className="w-2/12 py-2">Name</th>
                    <th className="w-2/12 py-2">Phone</th>
                    <th className="w-3/12 py-2">Email</th>
                    <th className="w-3/12 py-2">Hobbies</th>
                    <th className="w-2/12 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {contacts.map((contact, index) => (
                    <tr key={contact._id} className="text-center border-b">
                        <td className="py-2"><input type="checkbox" onChange={() => handleSelect(contact)} /></td>
                        <td className="py-2">{index + 1}</td>
                        <td className="py-2">{contact.name}</td>
                        <td className="py-2">{contact.phone}</td>
                        <td className="py-2">{contact.email}</td>
                        <td className="py-2">{contact.hobbies}</td>
                        <td className="py-2 space-x-2">
                            <button onClick={() => handleUpdate(contact._id)} className="px-2 py-1 bg-green-500 text-white rounded">Update</button>
                            <button onClick={() => handleDelete(contact._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
