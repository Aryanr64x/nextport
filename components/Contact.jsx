import React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';


import client from '../sanity/client';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [dialog, setDialog] = useState(false);
    const submitMessage = () => {
        if (name.length != 0 && email.length != 0 && message.length != 0) {
            setLoading(true);
            const doc = {
                _type: 'request',
                name,
                email,
                message

            }
            client.create(doc).then((res) => {
                setLoading(false);
                setDialog(true);
                setEmail('');
                setName('');
                setMessage('');
            }).catch((e) => {

            });
        } else {

        }
    }



    return (
        <section className="pt-44 bg-primary px-2 sm:px-12 xl:px-32">
            <h2 className="text-3xl sm:text-5xl lg:6xl text-center font-paytone">
                CONTACT NOW
            </h2>
            <div className="lg:grid grid-cols-2 mt-16">
                <ContactLeft />
                <ContactRight />
            </div>
        </section>
    );
};

export default Contact;