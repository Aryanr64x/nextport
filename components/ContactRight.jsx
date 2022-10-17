const ContactRight = ()=>{
    return (
        <div className="flex flex-col justify-center px-44">
            <div className="text-lg font-paytone">
                    Have a Query? 
            </div>
            <div className="mt-4">
                
                <input className="px-2 py-2 text-black border-2 border-secondary w-full" placeholder="Enter your email.." type="email" name="" id="" />
                <textarea   className="px-2 mb-8 py-2 mt-4 text-black border-2 border-secondary w-full"  placeholder="Enter your qurey"/>
                    <a href="#" className="font-semibold  mt-8 text-lg hover:opacity-80 bg-secondary text-primary rounded-sm py-1 px-2  border-secondary  hover:bg-secondary hover:text-primary transition-all duration-500">Submit</a>

            </div>
        </div>
    );
}

export default ContactRight;