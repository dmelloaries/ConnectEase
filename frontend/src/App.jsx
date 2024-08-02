import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
import Table2 from "./components/Table2"
import Home from "./components/Home";
import EmailModal from './components/EmailModal';
import './index.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const fetchContacts = async () => {
        const response = await axios.get('http://localhost:5000/contacts');
        setContacts(response.data);
    };

    const handleSend = async (email) => {
        try {
            const response = await axios.post('http://localhost:5000/send', { selectedContacts, email });
            console.log('Email sent:', response.data);
            setSelectedContacts([]);
            setIsEmailModalOpen(false);
        } catch (error) {
            console.error('Error sending email:', error.response ? error.response.data : error.message);
        }
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
                            <Home></Home>
                        </>
                    } />
                    <Route path="/contacts" element={
                        <Table2 contacts={contacts} fetchContacts={fetchContacts} setSelectedContacts={setSelectedContacts} />
                    } />
                    <Route path="/send" element={
                        <>
                            <Table contacts={contacts} fetchContacts={fetchContacts} setSelectedContacts={setSelectedContacts} />
                            <button onClick={() => setIsEmailModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
                            <EmailModal 
                                open={isEmailModalOpen} 
                                onClose={() => setIsEmailModalOpen(false)} 
                                onSend={handleSend} 
                            />
                        </>
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
