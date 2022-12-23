import Hero from "../components/Hero"
import LatestWorks from "../components/LatestWorks"

import Contact from "../components/Contact"
import Footer from "../components/Footer"
import "animate.css/animate.min.css";
import Testimonials from "../components/Testimonials"
import Head from "next/head";

export default function Home() {

  return (

    <div className="bg-primary text-white">
      <Head>
        <title>SAKEDES</title>
        <link rel="shortcut icon" href="/Webclip.png" />
        <meta property="og:title" content="Sakedes: Affordable WebDesign and WebDevelopment Services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/RPxKWM4/hero.png" />

       
      </Head>
      <Hero />
      <LatestWorks />
      <Testimonials />
      <Contact />
      <Footer />
     
    </div>
  )
}




