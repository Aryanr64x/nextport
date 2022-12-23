import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PostBody from "../../components/post/PostBody";
import PostCreator from "../../components/post/PostCreator";
import PostHeader from "../../components/post/PostHeader";
import client from '../../sanity/client'

export default function Home({post}) {

    return (

        <div className="bg-primary text-white min-h-screen ">
            <div className="px-4 sm:px-12 lg:px-32">
             <Navbar />
            </div>
            
            <div className="mt-32">
                <PostHeader />
                <PostBody body={post.body} />
                <PostCreator />
            </div>
            <Footer />

        </div>
    )
}


export async function getStaticProps(context) {
    const slug = context.params.slug;
    const query = '*[_type == "post" && slug.current == "' + slug + '"]';

    const resp = await client.fetch(query);
    console.log(resp[0])

    return {
        props: {
            post: resp[0]
        }, // will be passed to the page component as props
    }
}



export async function getStaticPaths() {


    const query = '*[_type == "post"]';
    const resp = await client.fetch(query);
    const paths = resp.map((post) => {
        return {
            params: {
                slug: post.slug.current
            }
        }
    });
    return {
        paths,
        fallback: false // false or 'blocking'
    };
}






