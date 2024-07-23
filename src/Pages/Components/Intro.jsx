import { motion } from "framer-motion"
function Introduction(){
    return(
<div className="flex text-wrap items-center ">
<motion.h1
className="text-white font-bold  "

        initial={{x:-100}}
        animate= {{x: [-800,100]}}
        transition={{
            duration: 1 ,
            delay: 1,}
        }
        
        >

        Hello <i class="fa-solid fa-face-smile-beam"></i><i class="fa-solid fa-hand-peace"></i> 
       <p className="text-[40px]"> I'm <span className="text-[#090084]">ABDUL LATIF.</span></p>
         <p className="text-[40px]">A Software Engineer </p>  
         <button className="bg-[#090084] px-[2.5em] py-[1em] rounded" >Download Resume</button>
        </motion.h1>
        <motion.image
        initial={{x:+1000}}
        animate={{x:[1000,250]}}
        transition={
{            duration:1,
            delay:1,}
        }
        >
            <img className="w-[300px] h-[250px] m-[2em] " src="src/images/King Kong.jpeg" alt="" />
        </motion.image>
</div>
    )

}
export default Introduction;