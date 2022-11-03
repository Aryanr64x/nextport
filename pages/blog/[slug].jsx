import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PostBody from "../../components/post/PostBody";
import PostCreator from "../../components/post/PostCreator";
import PostHeader from "../../components/post/PostHeader";


export default function Home(props) {

    return (

        <div className="bg-primary text-white min-h-screen ">
            <Navbar />
            
            <div className="mt-32 px-4 sm:px-12 lg:px-32">
                <PostHeader />
                <PostBody />
                <PostCreator />
            </div>
            <Footer />

        </div>
    )
}

