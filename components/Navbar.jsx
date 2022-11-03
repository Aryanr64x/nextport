const Navbar = () => {
    return (<div className="flex justify-between pt-8 items-center">
        <div className="text-secondary text-2xl font-paytone text-shadow">
            SAKEDES
        </div>
        <div className="hidden md:flex items-center ">

            <div className="font-semibold mr-8 text-lg hover:opacity-80"> <a href="#last-works">Past Works</a></div>
            <div className="font-semibold mr-8 text-lg hover:opacity-80"> <a href="#testimonials">Testimonials</a> </div>
            <div className="font-semibold mr-8 text-lg hover:opacity-80 bg-secondary text-primary rounded-lg py-1 px-2  border-secondary  hover:bg-secondary hover:text-primary transition-all duration-500"><a href="#contact">Contact Me</a></div>
        </div>
    </div>)
}


export default Navbar;