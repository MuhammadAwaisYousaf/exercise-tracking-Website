import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import  {AiOutlineArrowDown}  from "react-icons/ai";
const LandingPage = () => {
  return (
    <div>
      <div
        className="  h-screen bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url(./bg.jpg)",
        }}
      >
        <header className="header pt-5 ml-5 mr-5 flex flex-col justify-evenly items-center sm:flex-row    ">
          {/* <!-- Left for logo --> */}
          <div className="logo">
            <Link to="/">
              <img className="w-36  invert" src="./logo.png" alt="loading..." />
              <div className=" text-white font-mono text-2xl">Fitness club</div>
            </Link>
          </div>

          {/* buttons */}
          <div className=" flex justify-evenly w-52 p-3">
            <Link to="/login">
              <button className=" hover:scale-110 duration-300 bg-green-500 p-2 text-sm rounded">
                LOGIN
              </button>
            </Link>

            <Link to="/signup">
              <button className=" hover:scale-110 duration-300 bg-green-500 p-2 text-sm rounded">
                SIGN UP
              </button>
            </Link>
          </div>
        </header>
        <div className=" sm:h-3/5 pt-0 sm:pt-16 h-3/6 flex flex-col items-center justify-center">
          <div className=" mt-40 space-y-3 bg-gray-200 p-5 rounded-3xl items-center justify-center flex-col flex sm:w-1/2 w-2/3 sm:m-0 m-5">
            <h1 className="text-center text-4xl font-bold text-red-500 ">
              <Typewriter
                options={{
                  strings: ["Welcome to", "Fitness club!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h2 className="font-bold sm:text-xl text-lg text-green-500">
              Track your progress, reach your goals
            </h2>
            <p className="mt-3 font-bold sm:text-base text-xs text-center">
              Track your daily physical activity, set and achieve fitness goals,
              and optimize your workouts with our user-friendly exercise
              tracking website.
            </p>
            <div className=" flex justify-evenly w-52 p-3">
              <Link to="/login">
                <button className=" hover:scale-110 duration-300 font-bold bg-green-500 p-2 text-sm rounded">
                  LOGIN
                </button>
              </Link>

              <Link to="/signup">
                <button className=" hover:scale-110 duration-300 font-bold bg-green-500 p-2 text-sm rounded">
                  SIGN UP
                </button>
              </Link>
            </div>
            
          </div>
        </div>
        <div class=" text-white text-5xl animate-bounce absolute bottom-10 right-5 "><AiOutlineArrowDown/></div>
      </div>
      
     

      <div className="  grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
        <div className="p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Monitor Your Fitness With Us.</h2>
          <p className="mb-4 text-center">
          Achieving your fitness objectives is made effortless with our app, which offers various features like running, swimming, cycling, and hiking to help you track your fitness journey and make substantial progress towards your goals.
          </p>
          <Link to="/login">
            {" "}
            <button className=" hover:scale-110 duration-300 bg-green-800 p-3 rounded-full text-white sm:font-bold sm:text-base text-sm hover:bg-black">
              Get Started
            </button>
          </Link>
        </div>
        <div className="p-4">
          <img src="./trackingimage.jpg" alt="Fitness tracking app" />
        </div>
      </div>
      <div
        className="relative bg-cover bg-top h-screen bg-no-repeat"
        style={{
          backgroundImage:
            " linear-gradient(to bottom,rgba(20, 40,60, 0.4), rgba(20, 40,60, 0.7)), url(./herosection.jpg)",
        }}
      >
        <div className="flex flex-col sm:w-2/5 w-4/5 h-full justify-center items-center ml-6 space-y-10">
          <p className="text-white md:text-7xl text-4xl font-extrabold tracking-tight text-center">
          Transform yourself into a stunning appearance by training.
          </p>
          <Link to="/signup">
            {" "}
            <button className="hover:scale-110 duration-300 bg-green-800 p-3 rounded-full text-white sm:font-bold sm:text-base text-sm hover:bg-black">
              JOIN NOW
            </button>
          </Link>
        </div>
      </div>
      <footer className=" bg-gray-400 text-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" gap-4 flex flex-col md:flex-row justify-between items-center">
            <div className=" items-center">
              <span className="text-xl font-bold ">Fitness club</span>
            </div>
            <div className="flex flex-wrap justify-between md:ml-6">
              <div className="space-x-4">
                <Link to="/signup">
                  {" "}
                  <button className=" rounded-full font-bold underline hover:text-green-800">
                    SIGN UP
                  </button>
                </Link>
                <Link to="/login">
                  {" "}
                  <button className="rounded-full font-bold underline hover:text-green-800">
                    LOGIN
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-green-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2"></div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-black text-lg font-bold">
                &copy; {new Date().getFullYear()} Fitness club. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
