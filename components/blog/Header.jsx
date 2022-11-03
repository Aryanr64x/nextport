import Navbar from "../Navbar";

const Header = () => {
    return (
        <div className="px-4 sm:px-12 lg:px-32">
            <Navbar />
            <div>
                <h1 className="text-4xl font-paytone pt-32">
                    <span className="ml-1 text-secondary"> SAKEDES BLOG |</span>   Design , Marketing and Technology articles
                </h1>
            </div>
        </div>
    );
}

export default Header;