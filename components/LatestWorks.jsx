import React from 'react';
import Fade from 'react-reveal/Fade'
import Tilt from 'react-parallax-tilt';

const LatestWorks = () => {
  return (
    <section className="mt-48 px-4 sm:px-20 xl:px-36">
      <div className="text-3xl sm:text-5xl text-center font-expletussans">
        Latest Works
      </div>
      <div className="mt-8 grid grid-cols-1   lg:grid-cols-2 gap-y-4">
        <div className="p-8 order-1">
          <Fade left>
            <Tilt>
              <img className="h-full rounded-md hover:shadow-lg hover:shadow-black transition-all duration-300 cursor-pointer"
                src="https://i.ibb.co/L9tZYsT/cap2.png" alt="" />
            </Tilt>
          </Fade>
        </div>
        <div className="flex flex-col justify-center order-2">
          <Fade right>
            <div className="text-center underline text-2xl cursor-pointer">
              chatgram.com
            </div>
            <div className="text-md xl:text-lg  p-4 xl:p-8 text-center lg:text-left">
              A Concept website for a team collaboration app , The website is enriched with up to date
              professional practices and is not just a static site as it has blog feature too!
            </div>
          </Fade>
        </div>
        <div className="order-3 h-20 lg:hidden">

        </div>
        <div className="flex flex-col justify-center order-5 lg:order-4">
          <Fade left>
            <div className="text-center underline text-2xl cursor-pointer">
              <a href="https://glistening-dasik-8e85c0.netlify.app/"> bangloremandarin.com </a>
            </div>
            <div className="text-md xl:text-lg  p-4 xl:p-8 text-center lg:text-left">
              This is a concept  website recently built for  a chinese restaurant at the heart of city
              of Bengaluru . The website&aposs intent is to help increase  the restaurant&aposs sales by its conversion centric design
            </div>
          </Fade>
        </div>
        <div className="p-8 order-4 lg:order-5">
          <Fade right>
            <Tilt>

              <a href="https://glistening-dasik-8e85c0.netlify.app/">
                <img className="h-full rounded-md hover:shadow-lg hover:shadow-black transition-all duration-300 cursor-pointer" src="https://i.ibb.co/0p7RvYC/bmandar.png" alt="bmandar" border="0" />

              </a>
            </Tilt>
          </Fade>

        </div>
        <div className="order-6 h-20 lg:hidden">

        </div>
        <div className="p-8 order-7 lg:order-6">
          <Fade right>
            <Tilt>

            <img className="h-full rounded-md hover:shadow-lg hover:shadow-black transition-all duration-300 cursor-pointer"
                    src="https://i.ibb.co/yV3nwY1/Capture.png" alt="" />
            </Tilt>
          </Fade>

        </div>
        <div className="flex flex-col justify-center order-8 lg:order-7">
          <Fade left>
            <div className="text-center underline text-2xl cursor-pointer">
              <a href="https://glistening-dasik-8e85c0.netlify.app/"> teamcolab.com </a>
            </div>
            <div className="text-md xl:text-lg  p-4 xl:p-8 text-center lg:text-left">
              This is a concept  website recently built for  a chinese restaurant at the heart of city
              of Bengaluru . The website&aposs intent is to help increase  the restaurant&aposs sales by its conversion centric design
            </div>
          </Fade>
        </div>

      </div>
    </section>
  );
};


export default LatestWorks;