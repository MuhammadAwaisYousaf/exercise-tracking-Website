import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div className="activties  flex  flex-col gap-8 justify-center items-center overflow-auto" >
    <div className="flex flex-col md:flex-row gap-2">
        <h1 className="    text-4xl rounded font-bold">Welcome to </h1>
        <h1  className="  text-red-500  text-4xl rounded font-bold"> Fitness Club! </h1> 
    </div>
      <div className="gap-4 h-1/2 flex md:flex-row flex-col  justify-center items-center  mt-14  ">
        <Link to="/dashboard/exerciseForm">
        <button className=" hover:scale-110 duration-300 w-52 sm:w-60 bg-blue-500 p-2 text-2xl rounded font-bold"> <img src="/addexcersice.jpg" alt="Loading..." /> Add Exercise</button>
        </Link >
        <Link to="/dashboard/exerciseHistory">
        <button className="hover:scale-110 duration-300 w-52 sm:w-60 bg-blue-500 p-2 text-2xl rounded font-bold"><img src="/excersicelog.jpg" alt="Loading..." /> Exercise History</button>
        </Link>
      </div>


    </div>
  );
};

export default Activities;
