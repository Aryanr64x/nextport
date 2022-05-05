import Hero from "../components/Hero"
import LatestWorks from "../components/LatestWorks"
import Services from "../components/Services"
import Tool from "../components/Tool"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import "animate.css/animate.min.css";
import axios from 'axios';


export default function Home(props) {

  return (

    <div className="bg-primary text-white">
      <Hero  header={props.header}/>
      <Services />
      <LatestWorks />
      
      <Tool />
      <Contact />
      <Footer />
    </div>
  )
}



export async function getStaticProps(context) {
  const resp = await axios.get("http://localhost:1337/api/hero");
  console.log(resp);
  return {
    props: {
      header: resp.data.data.attributes.mainheading
    }, // will be passed to the page component as props
  }
}
