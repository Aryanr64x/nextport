import { motion } from "framer-motion";
import { useState } from "react";
const SingleWork = ({ reverse, image })=>{
    const [showText, setShowText] = useState(false)
    const r = ((reverse) ? "flex-col-reverse lg:flex-row-reverse" : "flex-col-reverse");
    const classname = "flex justify-between items-center gap-8 lg:gap-52 mt-32 "+r;
    console.log(classname)
    return (
        <div className={classname}>
        <div className="flex flex-col  justify-center items-center lg:items-start">
          <div className="text-3xl sm:text-4xl font-paytone">
            TEAM APP WEBSITE
          </div>
          <div className="mt-4 flex">
            <span className=" text-primary bg-tertiary font-semibold mr-4 px-2 py-1 rounded text-sm sm:text-base" >
              TeamApp
            </span>
            <span className="text-primary bg-tertiary font-semibold mr-4  px-2 py-1 rounded text-sm sm:text-base">
              Responsive Design
            </span>
            <span className="text-primary bg-tertiary font-semibold mr-4  px-2 py-1 rounded text-sm sm:text-base">
              Startup
            </span>
          </div>
          <div className="text-center sm:text-left sm:text-lg mt-8">
            This is a concept website built for a startup app , that is
            basically a chat app for teams over the internet
          </div>
          <div className="mt-16">
          <motion.button href="#" className="bg-secondary text-primary py-2 px-4 text-base font-semibold mr-4"  whileHover={{translateX: 20, opacity: 0.8}} transition={{duration:0.5}}>
           VISIT LIVE SITE
           </motion.button>

          </div>
        </div>
        <div className="flex flex-col items-end relative">
          <motion.img  onMouseEnter={()=>{ setShowText(true) }} onMouseLeave={()=>{ setShowText(false) }}  whileHover={{translateX: 10, translateY: -10, opacity: 0.4}} transition={{duration:0.5}} className="h-full rounded-md cursor-pointer"
            src={image} alt="" />
          {
            (showText) ? (<motion.div initial={{ opacity:0 }} animate={{ opacity: 1 }}  transition={{duration:0.5}}  className="absolute top-1/2 left-1/2 -ml-24 text-xl font-semibold font-paytone">
                    VISIT LIVE WEBSITE
        </motion.div>) : (<div></div>)
          }
        </div>
      </div>
    )
}

export  default SingleWork;