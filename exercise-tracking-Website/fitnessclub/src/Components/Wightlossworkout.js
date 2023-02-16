import React from "react";
import { Link } from "react-router-dom";

const Wightlossworkout = () => {
  return (
    <div className="mainPage w-scrren h-screen">
      <div className="gap-4 pt-52 flex md:flex-row flex-col  justify-center items-center">
        <Link to="/dashboard/weightlosshomeworkoutplan" className=" flex justify-center md:block md:flex-none">
          <button className="  hover:scale-110 duration-300  min-[100px]:w-44 min-[400px]:w-56 sm:w-60 bg-blue-500 p-2 text-2xl rounded font-bold ">
            
            <img src="/HomeWorkout.jpeg" alt="Loading..." />
            Home Plan
          </button>
        </Link>
        <Link to="/dashboard/exerciseHistory" className=" flex  justify-center md:block md:flex-none">
          <button className=" hover:scale-110 duration-300 min-[100px]:w-44 min-[400px]:w-56 sm:w-60 bg-blue-500 p-2 text-2xl rounded font-bold">
            <img src="/addexcersice.jpg" alt="" /> Gym Plan
          </button>
        </Link>
      </div>
      <div className="mt-4"></div> 
    </div>
  );
};

export default Wightlossworkout;
