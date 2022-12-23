import Header from "../../components/blog/Header";
import Posts from "../../components/blog/Posts";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import client from "../../sanity/client";

export default function Home({ posts }) {

  return (

    <div className="bg-primary text-white min-h-screen">
        <Header />
        <Posts posts={posts} />
        <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
   
  const query = '*[_type == "post"]{...,author->}'; 
  const resp = await client.fetch(query);
  console.log(resp);
  return {
    revalidate: 20,
    props: {
      posts: resp
    }, // will be passed to the page component as props
  }
}


