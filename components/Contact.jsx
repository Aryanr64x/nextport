import React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';


import client from '../sanity/client';
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
        <section className="mt-44">
            <div className="text-center text-3xl sm:text-5xl font-expletussans" id="contact">
                Wanna connect with me ?
            </div>
            <div className="flex mt-8 px-4 sm:px-20 xl:px-36 lg:flex-row flex-col" >
                <div className="basis-1/3">
                    <input className="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your name ..." value={name} onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>
                <div className="w-48  h-8 lg:h-0">

                </div>
                <div className="basis-2/3">
                    <input className="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your email ..." value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                </div>
            </div>
            <div className="px-4 sm:px-20 xl:px-36 mt-8">
                <textarea className="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your message ..." value={message} onChange={(e) => {
                    setMessage(e.target.value);
                }} /> 
                <div className="flex justify-center lg:justify-end">
                    {
                        (loading) ? (      <CircularProgress color="inherit" className="mt-8" />) : (<button className="bg-secondary text-primary px-4 py-2 rounded-md mt-4 font-semibold" onClick={submitMessage}> SUBMIT MESSAGE </button>
                        )
                    }
                </div>

            </div>


            <div className="text-center mt-8 text-2xl title">
                OR
            </div>
            <div className="mt-4 text-center text-3xl underline cursor-pointer">
                <a href="https://www.upwork.com/freelancers/~01109abaab5284b818"> Find me on upwork </a>
            </div>
            <div className="text-center mt-8 text-2xl title">
                OR
            </div>
            <div className="mt-4 text-center text-3xl underline cursor-pointer">
                Call or whatsapp now : <strong>  +91 6290341107 </strong>
            </div>

          
                <Dialog
                    open={dialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                   
                >
                    <DialogTitle id="alert-dialog-title"  className="bg-secondary font-bold">
                        Thanks for contacting !
                    </DialogTitle>
                    <DialogContent  className="bg-secondary font-bold">
                        <DialogContentText id="alert-dialog-description" className=" font-bold">
                            I will reach you out soon on the email you provided, I will try my best to help
                            you 😊😊
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions  className="bg-secondary text-white">
                    <button className="bg-secondary text-primary px-4 py-2 rounded-md mt-4 font-semibold" onClick={()=>{setDialog(false)}}> NOICE !! </button>
                    </DialogActions>
                </Dialog>
            
        </section>
    );
};

export default Contact;