import Header from "../../components/blog/Header";
import Posts from "../../components/blog/Posts";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Home(props) {

  return (

    <div className="bg-primary text-white min-h-screen">
        <Header />
        <Posts />
        <Footer />
    </div>
  )
}

