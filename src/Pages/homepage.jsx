import { useState } from "react";
import Introduction from "./Components/Intro";
import Profile from "../images/Profile_pic-removebg-preview.png"
import Logo from "../images/LA logo.png"

function Homepage() {
  const [colored, setColored] =useState(false);

  function scrollColor() {
    if (window.scrollY >=700) {
      setColored(true);
    } else {
      setColored(false);
    }
  }
  window.addEventListener("scroll", scrollColor);
  return (
    <div>
      <div className="bg-[#7d77cdbe] shadow-lg-[] h-[140vh] ">
        <nav className={ colored ? "navbar fixedColor" : "navbar"} >
          <img className="w-[80px]" src={Logo}  />
          <ul>
            <li>
              <a href="#">
              <i class="fa-solid fa-user-secret fa-beat fa-2x"></i>
              </a>
              <ul className="dropdown flex flex-col ">
                <li>
                  {" "}
                  <a href="#">Projects</a>
                </li>
              
              </ul>
            </li>
          </ul>
        </nav>
        <div>
          <img src={Profile} alt="" />
        </div>
        

        <div className="" >
          <Introduction/>
        </div>
     

        <div className="flex flex-col items-center justify-center ">
          {/* <h1 className="text-red-500 m-[2em] font-bold "> */}
          {/* </h1> */}
          
         
         
          <h2 className=" text-[20px] m-[2em] text-center text-white font-bold">
          👋 Hi there! I'm a passionate web developer. I have a strong background in frontend development using React ., as well as experience with various JavaScript and CSS libraries and frameworks such as Next.JS and Tailwind. 🌐 In addition to my frontend expertise, I have a decent understanding of backend technologies like Node.js and Express.js. This knowledge enables me to collaborate effectively with backend teams, bridging the gap between the front and back ends of web development projects. 🚀 I'm excited to continue my journey in the tech world, eager to learn and contribute to innovative projects. Let's connect and explore opportunities together!
          </h2>
          <h2 className="text-[2em] font-bold text-[#090084]">My Skills</h2>
          <div className="text-white flex justify-between gap-[4em]" >
          <i class="fa-brands fa-html5 fa-beat fa-5x"></i>
          <i class="fa-brands fa-css3-alt fa-beat fa-5x"></i> 
          <i class="fa-brands fa-js fa-beat-fade fa-5x"></i>  
          <i class="fa-brands fa-square-github fa-beat-fade fa-5x"></i>    
         <i class="fa-brands fa-react fa-flip fa-5x"></i>
          <i class="fa-brands fa-node fa-flip fa-5x"></i>
          </div>
         

        </div>
      </div>
      <h2 className="font-bold text-center text-[2em] text-[#090084] text-400">
        PROJECTS
      </h2>

      <div className="flex m-[1em] ">
        <div>
        <div className="footy border shadow-lg  rounded w-[700px] h-[450px] text-center ">
          <div className=" flex m-[2em] g-[1em]">
            <img
              className="h-[200px] w-[200px] rounded-full"
              src="src/images/Internsharp-logo.png"
              alt=""
            />
            <div>
              <h2 className="font-bold text-center text-[2em] text-[#090084] text-400">
                Internsharp
              </h2>
              <p className="text-wrap">
                Internsharp is a project that I worked on with a partner.In this
                project, we were basically trying to to solve the problem of
                lack of intenrnship opprtunities to Graduates who have recently
                finished their studies.The application enables Companies with
                Internship opprtunitiesfor graduates to post there while the
                Students and graduates register into our app so as to acces the
                advertised Internships.
              </p>
              <button className="rounded p-[.5em] bg-[#090084] text-[#fff] m-[1em]">
                Visit Site
              </button>
            </div>
          </div>
          
        </div>
        <div className="footy border shadow-lg p-[1em] rounded w-[700px] h-[300px] text-center ">
            <h2 className="font-bold text-center text-[2em] text-[#090084] text-400">
              Phonelyfy
            </h2>
            <div className="flex ">
              <div>
                <p>
                  Phonelyfy is a Software As A Service{" "}
                  <span className="text-red-400">(SAAS) application</span>.This
                  app is mainly used for its phonebook services where by it
                  allows a user to have well arranged Contacts have a minimum
                  cluster of three groups and three Categories and the user can
                  Store notes using this Awesome application.
                </p>
              </div>

              <img
                className="w-[150px]"
                src="src/images/telephone-logo-2.png"
                alt=""
              />
            </div>
            <button className="rounded p-[.5em] bg-[#090084] m-[1em] text-[#fff]">
              <a href="#">Visit site</a>
            </button>
          </div>
          </div>
        

        <div className="m-[1em]">
          <div className="footy border shadow-lg p-[1em] rounded w-[500px] h-[250px]  text-center ">
            <h2 className="font-bold text-center text-[2em] text-[#090084] text-400">
              Footyfix
            </h2>
            <div className="flex">
              <img
                className=" w-[100px]"
                src="src/images/footy.ico.svg"
                alt=""
              />
              <p>
                Footyfix is a website that I came up with so as to help in
                solving the problems of match fixing that has been happening in
                the world of sports.
              </p>
            </div>
            <button className="rounded p-[.5em] bg-[#090084] text-[#fff]">
              <a href="#">Visit site</a>
            </button>
          </div>
          <div className="footy border shadow-lg p-[1em] rounded w-[500px] h-[500px] text-center ">
            <h2 className="font-bold text-center text-[2em] text-[#090084] text-400">
              Sporty Threads
            </h2>
            <div className="flex flex-col items-center m-[1em]">
              <img
                className="w-[150px]"
                src="src/images/sporty-blacklogo.png"
                alt=""
              />
              <p>
                Sporty threads is a sports thrift store that sales merchendises
                from different sports bramds and also original design that the
                company drifts.The main product that the companys is to be know
                for is recycling sport jerseys into different other products
                hence conserving the environment
              </p>
              <button className="rounded p-[.5em] m-[1em] bg-[#090084] text-[#fff]">
                <a href="#">Visit site</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7d77cdbe] h-[80vh] flex flex-col items-center">
        <div className="m-[2em] text-white font-bold text-center ">
          <h2 className="text-[3em]">Lets Connect.</h2>
          <p>
            If ou want to Get more details about my projects Or just simply
            connect.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-[1em] w-[400px] m-[2em]">
          <input
            className="outline-none p-[1em] "
            type="text"
            placeholder="Email"
            name=""
            id=""
          />
          <textarea
            placeholder="Leave a message"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <button className="sendEmail rounded p-[.5em] m-[1em]   items-center text-[#090084]">
            <a href="#">Send</a>
          </button>
        </div>
      </div>
      <div className="text-center m-[1em] ">
        <p className="text-[#090084]">

        CodebyLatty<i class="fa-solid fa-copyright"></i>2024
        </p>
      </div>
    </div>
  );
}
export default Homepage;
