import React from "react";
import { Link } from "react-router-dom";

const Workoutplan = () => {
  return (
    <div className="mainPage h-screen overflow-auto">
      <div className="activties  flex flex-col gap-8 justify-center items-center">
        <div className="flex md:flex-row flex-col gap-2">
          <h1 className=" text-center text-4xl rounded font-bold">Welcome to </h1>
          <h1 className="text-center text-red-500  text-4xl rounded font-bold">
            {" "}
            Fitness Club!{" "}
          </h1>
        </div>
        <div className="gap-4 h-1/2 flex md:flex-row flex-col  justify-center items-center  mt-14  ">
          <Link to="/dashboard/wightlossworkout" className="  flex  justify-center md:block md:flex-none">
            <button className=" hover:scale-110 duration-300  w-52 sm:w-60 bg-blue-500 p-2 text-2xl rounded font-bold">
              <img src="/weightloss.png" alt="Loading..." />
              Weight Loss
            </button>
          </Link>
          <Link to="/dashboard/wightgainworkout" className=" flex  justify-center md:block md:flex-none">
            <button className=" hover:scale-110 duration-300 w-52 sm:w-60 bg-blue-500 p-2 text-2xl rounded font-bold">
              <img src="/Weightgain.jpg" alt="Loading..." /> Weight Gain
            </button>
          </Link>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Workoutplan;
