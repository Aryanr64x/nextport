import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import SingleWork from './SingleWork';

const LatestWorks = () => {
  return (
    <section className="mt-48 px-4 sm:px-20 xl:px-36 pb-40" id="last-works">
      <h2 className="text-3xl sm:text-5xl lg:6xl text-center font-paytone">
        LATEST WORKS
      </h2>
      <div className="works mt-24">
        <SingleWork  reverse={true} image={'/neovis_thumb.png'}  name="Neovision Marketing" info="Marketing Businesses need marketing too! A professional website built for a facebook ads marketing company. The website has been highly effective in lead conversion of business. " tag1="Startup" tag2="Responsive" tag3="Modern" link="" />
        <SingleWork image={'/dclinicthumb.png'}   name="Family Clinic Website" info="This is a professional well designed clinic website for Dr Dayal that follows modern standards. It's prime motive was successfully implemented that is increase the patient turnover ! " tag1="Clinic" tag2="Responsive" tag3="Professional" link="" />
        <SingleWork  reverse={true} image={'/Team.jpg'}  name="Team App Website" info="This is a concept website for a startup mobile app called 'TEAM!', the website does effective marketing of the startup and provides a full fledged blog backed by a powerful CMS " tag1="Clinic" tag2="Responsive" tag3="Professional" link=""/>

      </div>
    </section>
  );
};

export default LatestWorks;
