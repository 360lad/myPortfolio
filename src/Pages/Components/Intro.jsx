import { motion } from "framer-motion";
import Profile from "../../src/assets/images/Profile_pic-removebg-preview.png"

function Introduction() {
  return (
    <div className="flex text-wrap items-center ">
      <motion.h1
        className="text-white font-bold  "
        initial={{ x: -100 }}
        animate={{ x: [-800, 100] }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <div className="mt-20">
          Hello <i class="fa-solid fa-face-smile-beam"></i>
          <i class="fa-solid fa-hand-peace"></i>
          <p className="text-[40px]">
            {" "}
            I'm <span className="text-[#090084]">ABDUL LATIF.</span>
          </p>
          <p className="text-[40px]">A Software Engineer </p>
          <div className="flex items-center">
            <button className="bg-[#090084] px-[2em] py-[1em] rounded m-[1em]">
              <a href="src/Abdullatif Apour Resume .pdf" download>
                Download Resume
              </a>
            </button>

            <div className="flex items-center m-[1em] gap-[1em]">
              <a
                className="whatsapp text-[#0CC143]"
                href="https://wa.me/+254790018194"
                target="_blank"
              >
                <i class="fa-brands fa-whatsapp fa-3x"></i>
              </a>
              <h2 className="message text-[2em] text-[#0CC143] font-bold">
                Message Me
              </h2>
            </div>
          </div>

          </div>
      </motion.h1>

      <motion.image
        initial={{ x: +1000 }}
        animate={{ x: [1000, 250] }}
        transition={{ duration: 1, delay: 1 }}
        >
            <div className="mt-20">
        <img
          className="w-[300px] h-[250px] m-[2em] "
          src={Profile}
          alt=""
        />
      </div>
      </motion.image>
      <div className="socials flex flex-col gap-[1em]">
            <a className="media " href="x.com/AbdulLatif8605">
              <i class="fa-brands fa-x-twitter fa-bounce fa-3x"></i>
            </a>
            <a className="media " href="https://www.linkedin.com/in/abdul-latif-lattycodes/">
              <i class="fa-brands fa-linkedin-in fa-bounce fa-3x"></i>
            </a>
            <a className="media " href="">
              <i class="fa-brands fa-facebook fa-bounce fa-3x"></i>
            </a>
            <a
              className="media "
              href="https://wa.me/+254790018194"
              target="_blank"
            >
              <i class="fa-brands fa-whatsapp fa-3x"></i>
            </a>
          </div>
            

  </div>
    
  );
}
export default Introduction;
