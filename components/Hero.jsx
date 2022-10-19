import React from "react";
import Tilt from 'react-parallax-tilt';

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = (props)=>{
    useEffect(()=>{
      AOS.init({
        duration: 1000
      })
    }, [])
    return (
        <div className="min-h-screen  px-4 sm:px-12 lg:px-32">
          <div className="flex justify-between pt-8 items-center">
            <div className="text-secondary text-2xl font-paytone text-shadow">
                SAKET 
            </div>
            <div className="hidden md:flex items-center ">
               
                <div className="font-semibold mr-8 text-lg hover:opacity-80"> <a href="#last-works">Past Works</a></div>
                <div className="font-semibold mr-8 text-lg hover:opacity-80"> <a href="#testimonials">Testimonials</a> </div>
                <div className="font-semibold mr-8 text-lg hover:opacity-80 bg-secondary text-primary rounded-lg py-1 px-2  border-secondary  hover:bg-secondary hover:text-primary transition-all duration-500"><a href="#contact">Contact Me</a></div>
            </div>
          </div>
          <div className="pt-40 ">
            <div className="grid grid-cols-3">
              <div className="col-span-3 md:col-span-2">
                <div  className="text-4xl sm:text-5xl lg:text-6xl font-paytone text-shadow" data-aos="fade-right">
                    I CREATE WEBSITES  FOR <span className="ml-1 text-secondary"> SMALL BUSINESSES </span> AT THE MOST AFFORDABLE COST
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
