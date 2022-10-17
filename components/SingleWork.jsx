import { motion } from "framer-motion";
import { useState } from "react";
const SingleWork = ({ reverse, image })=>{
    const [showText, setShowText] = useState(false)
    const r = ((reverse) ? "flex-row-reverse" : "");
    const classname = "flex justify-between items-center gap-52 mt-32 "+r;
    console.log(classname)
    return (
        <div className={classname}>
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-paytone">
            TEAM APP WEBSITE
          </div>
          <div className="mt-4">
            <span className=" text-primary bg-tertiary font-semibold mr-4 px-2 py-1 rounded" >
              TeamApp
            </span>
            <span className="text-primary bg-tertiary font-semibold mr-4  px-2 py-1 rounded">
              Responsive Design
            </span>
            <span className="text-primary bg-tertiary font-semibold mr-4  px-2 py-1 rounded">
              Startup
            </span>
          </div>
          <div className="text-lg mt-8">
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