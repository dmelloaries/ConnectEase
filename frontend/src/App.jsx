// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
import './index.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);

    const fetchContacts = async () => {
        const response = await axios.get('http://localhost:5000/contacts');
        setContacts(response.data);
    };

    const handleSend = async () => {
        const email = prompt('Enter email address to send selected contacts');
        await axios.post('http://localhost:5000/send', { selectedContacts, email });
        setSelectedContacts([]);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <Router>
            <Navbar />
            <div className="flex flex-col items-center space-y-6 p-6">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Form fetchContacts={fetchContacts} />
                            <Table contacts={contacts} fetchContacts={fetchContacts} setSelectedContacts={setSelectedContacts} />
                            <button onClick={handleSend} className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
                        </>
                    } />
                    <Route path="/contacts" element={
                        <Table contacts={contacts} fetchContacts={fetchContacts} setSelectedContacts={setSelectedContacts} />
                    } />
                    <Route path="/send" element={
                        <button onClick={handleSend} className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
                    } />
                    <Route path="/add-contact" element={
                        <Form fetchContacts={fetchContacts} />
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
