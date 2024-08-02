import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const EmailModal = ({ open, onClose, onSend }) => {
    const [email, setEmail] = useState('');

    const handleSend = () => {
        onSend(email);
        setEmail('');
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Send Contacts</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={handleSend} color="primary">Send</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EmailModal;
