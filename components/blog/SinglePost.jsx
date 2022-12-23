import Tilt from 'react-parallax-tilt'



const SinglePost = ({ post }) => {
    
    return (
        <a href={'/blog/'+post.slug.current} className="col-span-1  rounded">
            <Tilt>
                <div>
                    <img src="/Clienttest.png" />
                </div>
                <div className="px-4 flex flex-col justify-between pb-4 bg-white bg-opacity-20">
                    <div>
                        <div className="mt-4 font-bold text-2xl ">
                            {post.title}
                        </div>
                        <div className="mt-2">

                            This is post content
                        </div>
                        <div className="mt-2">
                            By {post.author.name}
                        </div>
                    </div>
                </div>
            </Tilt>

        </a>
    );
}

export default SinglePost;