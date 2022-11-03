import Tilt from 'react-parallax-tilt'
const SinglePost = () => {
    return (
        <a href={ '/blog/hello' } className="col-span-1  rounded">
            <Tilt>
                <div>
                    <img src="/Clienttest.png" />
                </div>
                <div className="px-4 flex flex-col justify-between pb-4 bg-white bg-opacity-20">
                    <div>
                        <div className="mt-4 font-bold text-2xl ">
                            5 ways to promote your website on social Media
                        </div>
                        <div className="mt-2">
                            These days social media is all the buzz for various types of content. In such cases why stay  behind
                            in using social media for your seo strategy
                        </div>
                        <div className="mt-2">
                            By Boris Johnson
                        </div>
                    </div>
                </div>
            </Tilt>

        </a>
    );
}

export default SinglePost;