import React from 'react';
import Fade from 'react-reveal/Fade';
const Services = () => {



    return (
        <section className="px-4 sm:px-20 xl:px-36">
            <div className="text-3xl sm:text-5xl text-center font-expletussans" id="services">
                Services Provided
            </div>
            <div className="flex mt-8 lg:flex-row flex-col">
                <div
                    className="basis-1/2 p-8 hover:shadow-black hover:shadow-lg rounded-md transition-all duration-500 cursor-pointer" data-aos="fade-right" data-aos-duration="500" >
                    <Fade left>
                        <div className="text-center text-3xl">
                            Website
                        </div>
                        <div className="mt-4 lg:text-left text-center">
                            Do you know how crucial of a marketing asset a website is to your small business? I provide a
                            professional looking website following best practises that can convert visitors to users of your
                            product/service
                        </div>
                    </Fade>
                </div>
                <div className="w-36 hidden lg:block">

                </div>
                <div
                    className="basis-1/2 p-8 hover:shadow-black hover:shadow-lg rounded-md transition-all duration-500 cursor-pointer" >
                    <Fade right>
                        <div className="text-center text-3xl">
                            Seo
                        </div>

                        <div className="mt-4 lg:text-left text-center">
                            As crutual it is to have a website at the first place so is the fact that your website aquires a top
                            search on Google , I can fix your website search engine indexing or deliver you a website that
                            shines as top rankers in google
                        </div>
                    </Fade>

                </div>

            </div>
        </section>
    );
}

export default Services;