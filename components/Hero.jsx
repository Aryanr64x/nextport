import React from "react";
import Tilt from 'react-parallax-tilt';


const Hero = (props)=>{
    return (
      <Tilt>
        <section className="min-h-screen flex items-center px-4 sm:px-20 xl:px-36">
   
   <div className="xl:basis-2/3">
      <div
        className="text-3xl sm:text-5xl xl:text-left text-center  font-expletussans animate__animated     animate__flipInX"

      >
        { props.header }
        <span className="text-secondary"> ACTUALLY WORK! </span>
      </div>
      <div
        className="text-xl mt-2 xl:text-left text-center font-light animate__fadeInDown animate__animated "
       
      >
        I help small businesses reach there true potential by designing and
        developing custom websites for them that are not only professional but
        also cost effective
      </div>
      <div
        className="mt-8 flex xl:justify-start justify-center animate__fadeInDown animate__animated"
       
      >
        <a
          className="
            bg-secondary
            text-primary
            px-4
            py-2
            rounded-md
            mr-4
            font-semibold
          "
         href="#contact"
        >
          HIRE ME
        </a>
        <a
          className="
            bg-primary
            text-white
            px-4
            py-2
            rounded-md
            border-secondary border-2
            hover:bg-secondary hover:text-primary
            duration-500
            transition-all
          "
          href="#services"
        >
          VIEW SERVICES
        </a>
      </div>
    </div>

  </section>
</Tilt>
    );
}


export default Hero;
