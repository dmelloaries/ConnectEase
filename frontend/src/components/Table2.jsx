import React, { useState } from 'react';
import axios from 'axios';
import UpdateContactModal from './UpdateContactCard';
import {
    Box,
    IconButton,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Table = ({ contacts, fetchContacts, setSelectedContacts }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://connectease-backend.onrender.com/contacts/${id}`);
            fetchContacts();
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    const handleUpdateClick = (contact) => {
        setSelectedContact(contact);
        setIsModalOpen(true);
    };

    const handleUpdate = async (updatedContact) => {
        try {
            await axios.put(`https://connectease-backend.onrender.com/contacts/${updatedContact._id}`, updatedContact);
            setIsModalOpen(false);
            fetchContacts();
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    const handleSelect = (contact) => {
        setSelectedContacts((prevSelected) => [...prevSelected, contact]);
    };

    return (
        <Box sx={{ width: '100%', marginTop: 4 }}>
            <TableContainer component={Paper} elevation={3}>
                <MuiTable>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="subtitle2">ID</Typography></TableCell>
                            <TableCell><Typography variant="subtitle2">Name</Typography></TableCell>
                            <TableCell><Typography variant="subtitle2">Phone</Typography></TableCell>
                            <TableCell><Typography variant="subtitle2">Email</Typography></TableCell>
                            <TableCell><Typography variant="subtitle2">Hobbies</Typography></TableCell>
                            <TableCell><Typography variant="subtitle2">Actions</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact, index) => (
                            <TableRow key={contact._id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>{contact.phone}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.hobbies}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleUpdateClick(contact)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(contact._id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            <Dialog
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Update Contact</DialogTitle>
                <DialogContent>
                    {selectedContact && (
                        <UpdateContactModal
                            contact={selectedContact}
                            onClose={() => setIsModalOpen(false)}
                            onUpdate={handleUpdate}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsModalOpen(false)} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Table;
