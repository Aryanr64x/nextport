import Hero from "../components/Hero"
import LatestWorks from "../components/LatestWorks"

import Contact from "../components/Contact"
import Footer from "../components/Footer"
import "animate.css/animate.min.css";
import axios from 'axios';
import Testimonials from "../components/Testimonials"
import Head from "next/head";

export default function Home(props) {

  return (

    <div className="bg-primary text-white">
      <Head>
        <title>SAKEDES</title>
        <link rel="shortcut icon" href="/Webclip.png" />
        <meta property="og:title" content="Sakedes: Affordable WebDesign and WebDevelopment Services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/RPxKWM4/hero.png" />

       
      </Head>
      <Hero  header={props.header}/>
      <LatestWorks />
      <Testimonials />
      <Contact />
      <Footer />
     
    </div>
  )
}



export async function getStaticProps(context) {
  const resp = await axios.get("https://q8j4bmr9.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22hero%22%5D%20");
  console.log(resp.data.result[0].mainheading);
  return {
    props: {
      header: resp.data.result[0].mainheading
    }, // will be passed to the page component as props
  }
}
