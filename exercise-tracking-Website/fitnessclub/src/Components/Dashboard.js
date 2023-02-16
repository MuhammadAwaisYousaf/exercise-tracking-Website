import React, { useEffect,useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Workoutplan from "./Workoutplan";
import Activities from "./Activities";
import ExcersiceForm from "./ExcersiceForm";
import ExerciseHistory from "./ExerciseHistory";
import Dashboardsection2 from "./Dashboardsection2";
import WightGainWorkout from "./WightGainWorkout";
import Wightlossworkout from "./Wightlossworkout";
import WeightLossHomeWorkoutPlan from "./WeightLossHomeWorkoutPlan";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const [localStorageData, setlocalStorageData] = useState(null);

  useEffect(() => {
    navigate();
    setlocalStorageData(localStorage.getItem("dataKey"));
  }, [navigate]);
  
  const signout=()=>{
    localStorage.clear();
  }
  
  return (
    <div>
      {localStorageData===null ? (
        navigate("/login")
      ) : (
        <div className="  text-white  grid grid-cols-6 w-screen ">
          <div className=" col-span-1 border  h-screen bg-blue-500 overflow-auto">
            <div className="logo flex flex-col justify-center items-center mt-3">
              <img className="w-36 p-1" src="/logo.png" alt="loading..." />
              <div className=" text-center p-1 font-mono font-bold text-xs sm:text-lg md:text-2xl">
                Fitness club
              </div>
            </div>
            
            <div className="flex flex-col  gap-8  mt-10 text-xl">
              <div className="hover:bg-blue-600 hover:border-l-4 p-2 md:pl-6  " title="Dashboard">
                <Link to="/dashboard/dashboardsection2"  className="  flex  justify-center md:block md:flex-none">
                  <button   className="flex  flex-col lg:flex-row gap-1  items-center ">
                    <img
                      className="w-7   "
                      src="/dashboard.png"
                      alt="loading..."
                    />{" "}
                    <h1 className="hidden md:block">Dashboard</h1>
                  </button>
                </Link>
              </div>
              <div className="hover:bg-blue-600 hover:border-l-4 p-2 md:pl-6 "  title="Workouts">
                <Link to="/dashboard/workout"  className="  flex  justify-center md:block md:flex-none">
                  <button className="flex flex-col lg:flex-row gap-1  items-center">
                    <img className="w-7 " src="/workout.png" alt="loading..." />{" "}
                    <h1 className="hidden md:block">Workouts</h1>
                  </button>
                </Link>
              </div>
              <div className="hover:bg-blue-600 hover:border-l-4 p-2 md:pl-6   "  title="Activities">
                <Link to="/dashboard/activity"  className="  flex  justify-center md:block md:flex-none">
                  <button className="flex flex-col lg:flex-row gap-1  items-center">
                    <img className="w-7" src="/exercise.png" alt="loading..." />{" "}
                    <h1 className="hidden md:block">Activities</h1>
                  </button>
                </Link>
              </div>

              <div className="hover:bg-blue-600 hover:border-l-4 p-2 md:pl-6" onClick={signout} title="Sign out">
                <Link to="/" className="flex justify-center md:block md:flex-none" >
                  <button className="flex  flex-col lg:flex-row gap-1  items-center ">
                    <img
                      className="w-7   "
                      src="/logout.png"
                      alt="loading..."
                    />{" "}
                    <h1 className="hidden md:block">Sign out</h1>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <Routes>
              <Route path="/activity" element={<Activities />} />
              <Route path="/workout" element={<Workoutplan />} />
              <Route path="/exerciseForm" element={<ExcersiceForm />} />
              <Route path="/exerciseHistory" element={<ExerciseHistory />} />
              <Route
                path="/dashboardsection2"
                element={<Dashboardsection2 />}
              />
              <Route path="/wightgainworkout" element={<WightGainWorkout />} />
              <Route path="/wightlossworkout" element={<Wightlossworkout />} />
              <Route
                path="/weightlosshomeworkoutplan"
                element={<WeightLossHomeWorkoutPlan />}
              />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
