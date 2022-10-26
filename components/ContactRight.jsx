import { useRef, useState } from "react";
import client from '../sanity/client';
import CircularProgress from '@mui/material/CircularProgress';


const ContactRight = () => {
    const email = useRef('')
    const name = useRef('')
    const message = useRef('')
    const [loading, setLoading] = useState(false);
    const [dialog, setDialog] = useState(null);
    const submit = () => {

        if (email.current.value.length != 0 && message.current.value.length != 0) {
            setLoading(true);
            const doc = {
                _type: 'request',
                name: name.current.value,
                email: email.current.value,
                message: message.current.value

            }
            client.create(doc).then((res) => {
                setLoading(false);
                email.current.value = ""
                name.current.value = ""
                message.current.value = ""
                setDialog({ status: "SUCCESS" })

            }).catch((e) => {
                setLoading(false);
                console.log(e);
                setDialog({ status: "FAILURE" })
            });
        }
    }


    return (
        <div className="flex flex-col justify-center px-2 sm:px-20 xl:px-44 mt-16">
            <div className="text-lg font-paytone">
                Have a Query?
            </div>
            <div className="mt-4">

                <input ref={name} className="px-2 py-2 text-black border-2 border-secondary w-full" placeholder="Enter your name.." type="email" name="" id="" />


                <input ref={email} className="px-2 py-2 mt-4 text-black border-2 border-secondary w-full" placeholder="Enter your email.." type="email" name="" id="" />

                <textarea ref={message} className="px-2 mb-8 py-2 mt-4 text-black border-2 border-secondary w-full" placeholder="Enter your qurey" />


                {
                    (dialog) ? (
                        <div className="bg-secondary text-primary py-4 px-2  rounded font-semibold">
                            {
                                (dialog.status === "SUCCESS")? (<span> Thanks for contacting us . We will reach you back on the provided email soon </span>) : (<span> Sorry { "can't" } send your query at the moment, Try calling / messaging or emailing in the contact links  </span>)
                            }
                        </div>) : (

                        (loading) ? (<CircularProgress />) : (<button onClick={submit} className="font-semibold  mt-4 text-lg hover:opacity-80 bg-secondary text-primary rounded-sm py-1 px-2  border-secondary  hover:bg-secondary hover:text-primary transition-all duration-500">Submit</button>)

                    )
                }
            </div>
        </div>
    );
}

export default ContactRight;