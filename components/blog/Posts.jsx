import SinglePost from "./SinglePost";

const Posts = ({ posts }) => {
    return (
        <div className="mt-12 px-4 sm:px-12 lg:px-32">
            <div className="grid grid-cols-3 gap-x-8 gap-y-8">
               {
                    posts.map((post)=>{
                        return (<SinglePost post = {post} key={post.slug.current} />)
                    })
               }
            </div>
        </div>
    );
}


export default Posts;