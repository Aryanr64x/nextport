import React from "react";

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Hero = ()=>{
    useEffect(()=>{
      AOS.init({
        duration: 1000
      })
    }, [])
    return (
        <div className="min-h-screen  px-4 sm:px-12 lg:px-32">
        
          <Navbar />
          <div className="pt-36 ">
            <div className="grid grid-cols-3">
              <div className="col-span-3 md:col-span-2">
                <div  className="text-4xl sm:text-5xl lg:text-6xl font-paytone text-shadow" data-aos="fade-right">
                    AFFORDABLE WEBDESIGN AND WEB DEVELOPMENT SERVICES FOR <span className="ml-1 text-secondary"> SMALL BUSINESSES </span> 
                    
                </div>
                <div className="mt-4 text-xl " data-aos="fade-right"   data-aos-delay="350">
                    Be it a blog or a personal portfolio, Be it a clinic website or maybe a restaurant website or may be bakery website or may any other
                   SMALL BUSINESS! Get a professional website built that actually works and get it hosted for FREE
                </div>
                <div className="mt-16" data-aos="fade-right"   data-aos-delay="700">
                  <a href="#contact" className="bg-secondary text-primary py-2 px-4 text-xl font-bold mr-4"> CONTACT ME </a>
                  <a href="#last-works" className="bg-primary py-2 px-4 border-2 border-secondary font-bold hover:bg-secondary hover:text-primary transition-all duration-500"> SEE MY PAST WORK </a>
                </div>
              </div>
              <div className="md:cold-span-1">

              </div>
            </div>
          </div>
        </div>
      
    );
}


export default Hero;
