import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const ExcersiceForm = () => {

  const navigate = useNavigate();
  const [getEmail, setgetEmail] = useState(""); //for get email form localstorage
  
  useEffect(() => {
    setgetEmail(localStorage.getItem("email"))
  }, [getEmail]);

  const empty = {
    activity: "",
    date: "",
    Description: "",
    Duration: "",
  };
  // State for input save
  const [input, setinput] = useState(empty);

  //Function for set the  data of input in state
  const getinputs = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value,email:getEmail });
  };
   
  //buuton onclick function
  const Submit = async () => {
    if (
      input.activity === "" ||
      input.date === "" ||
      input.Description === "" ||
      input.Duration === ""
    ) {
      alert("Fill all fileds");
    } else {

      await fetch("http://127.0.0.1:4000/addexcersice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      setinput(empty);
      navigate("/dashboard/activity");
    }
  };
  return (
    
   <div className="activties">
      <div>
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="exerciseform flex justify-center drop-shadow-sm">
            <div className=" text-black card min-[100px]:w-52 min-[420px]:w-80 sm:w-96 p-2 mt-16 border rounded-lg bg-white flex flex-col gap-7">
              <h1 className="text-center text-2xl font-bold text-red-500 ">
                Welcome to Fitness club!
              </h1>

              <h1 className="text-center text-2xl font-bold text-black">
                Add Excersice
              </h1>

              <input
                className=" text-black border rounded p-2"
                type="email"
                value={getEmail}
                readOnly
                disabled
              />
              
              <select
                className="border rounded p-2"
                onChange={getinputs}
                name="activity"
                value={input.activity}
              >
                <option>Select activity type</option>
                <option>Run</option>
                <option>Bicycle ride</option>
                <option>Swim</option>
                <option>Walk</option>
                <option>Hiking</option>
              </select>

              <input
                className=" text-black border rounded p-2"
                type="date"
                name="date"
                onChange={getinputs}
                value={input.date}
                required
              />

              
              <input
                className="border rounded p-2"
                type="text"
                placeholder="Description"
                name="Description"
                value={input.Description}
                onChange={getinputs}
                required
              />

              <input
                className="border rounded p-2"
                type="number"
                placeholder="Duration in Mintues"
                name="Duration"
                value={input.Duration}
                onChange={getinputs}
                required
              />

              <button
                id="delete-btn"
                onClick={Submit}
                className="  bg-green-500 p-2 text-sm rounded font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      

     

    </div>
  );
};

export default ExcersiceForm;
