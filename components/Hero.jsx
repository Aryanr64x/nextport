import React from "react";
import Tilt from 'react-parallax-tilt';



const Hero = (props)=>{
    return (
        <div className="min-h-screen  px-4 sm:px-12 lg:px-32">
          <div className="flex justify-between pt-8 items-center">
            <div className="text-secondary text-2xl font-paytone text-shadow">
                SAKET 
            </div>
            <div className="hidden md:flex items-center ">
               
                <div className="font-semibold mr-8 text-lg hover:opacity-80"> <a href="#">Past Works</a></div>
                <div className="font-semibold mr-8 text-lg hover:opacity-80"> <a href="#">Testimonials</a> </div>
                <div className="font-semibold mr-8 text-lg hover:opacity-80 bg-secondary text-primary rounded-lg py-1 px-2  border-secondary  hover:bg-secondary hover:text-primary transition-all duration-500"><a href="#">Contact Me</a></div>
            </div>
          </div>
          <div className="pt-40 ">
            <div className="grid grid-cols-3">
              <div className="col-span-3 md:col-span-2">
                <div  className="text-4xl sm:text-5xl lg:text-6xl font-paytone text-shadow">
                    I CREATE WEBSITES  FOR <span className="ml-1 text-secondary"> SMALL BUSINESSES </span> AT THE MOST AFFORDABLE COST
                </div>
                <div className="mt-4 text-2xl">
                    I dont just create websites . I create websites that actually work ! That is they help in visitor conversions. I follow 
                    modern and professional guideline. 
                </div>
                <div className="mt-16">
                  <a href="#" className="bg-secondary text-primary py-2 px-4 text-xl font-bold mr-4"> CONTACT ME </a>
                  <a href="#" className="bg-primary py-2 px-4 border-2 border-secondary font-bold hover:bg-secondary hover:text-primary transition-all duration-500"> SEE MY PAST WORK </a>
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
