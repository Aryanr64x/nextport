import React from 'react';
import Fade from 'react-reveal/Fade'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import SingleWork from './SingleWork';

const LatestWorks = () => {
  return (
    <section className="mt-48 px-4 sm:px-20 xl:px-36 pb-40">
      <h2 className="text-3xl sm:text-5xl lg:6xl text-center font-paytone">
        LATEST WORKS
      </h2>
      <div className="works mt-24">
        <SingleWork  reverse={true} image={'/Sample.jpg'} />
        <SingleWork image={'/Sample.jpg'} />
        <SingleWork  reverse={true} image={'/Team.jpg'} />

      </div>
    </section>
  );
};
// #8D99AE

export default LatestWorks;
{/* <img className="h-full rounded-md hover:shadow-lg hover:shadow-black transition-all duration-300 cursor-pointer"
                src="https://i.ibb.co/L9tZYsT/cap2.png" alt="" />
<img className="h-full rounded-md hover:shadow-lg hover:shadow-black transition-all duration-300 cursor-pointer" src="https://i.ibb.co/0p7RvYC/bmandar.png" alt="bmandar" border="0" />
 <img className="h-full rounded-md hover:shadow-lg hover:shadow-black transition-all duration-300 cursor-pointer"
 src="https://i.ibb.co/yV3nwY1/Capture.png" alt="" /> */}