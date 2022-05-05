import React from 'react';

const Contact = ()=>{
    return (
        <section className="mt-44">
            <div className="text-center text-3xl sm:text-5xl font-expletussans"  id="contact">
               Wanna connect with me ?
            </div>
            <div className="flex mt-8 px-4 sm:px-20 xl:px-36 lg:flex-row flex-col" >
                <div className="basis-1/3">
                    <input className="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your name ..." />
                </div>
                <div className="w-48  h-8 lg:h-0">

                </div>
                <div className="basis-2/3">
                    <input className="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your email ..." />

                </div>
            </div>
            <div className="px-4 sm:px-20 xl:px-36 mt-8">
                <textarea className="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your message ..." > </textarea>
                <div className="flex justify-center lg:justify-end">
                    <button className="bg-secondary text-primary px-4 py-2 rounded-md mt-4 font-semibold"> SUBMIT MESSAGE </button>
                </div>

            </div>


            <div className="text-center mt-8 text-2xl title">
                    OR
            </div>
            <div className="mt-4 text-center text-3xl underline cursor-pointer">
                Find me on upwork
            </div>
            
    </section>
    );
};

export default Contact;