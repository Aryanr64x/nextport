import { Navbar } from "react-bootstrap";

const PostHeader = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-32">
                <div className="text-5xl font-paytone ">
                    5 ways to promote your website on social Media
                </div>

                <div className="post_image mt-8" style={{ backgroundImage: 'url("/Clienttest.png")' }} >

                </div>
            </div>
        </div>
    );
}

export default PostHeader;