import React, { useState, useEffect } from "react";
import moment from "moment"; //for change the date format

const ExerciseHistory = () => {
  const [editbox, seteditbox] = useState(false); //for this edit window open
  const [getIdForUpdate, setgetIdForUpdate] = useState(""); //for id send from edit fuction to update function.

  const empty = {
    activity: "",
    date: "",
    name: "",
    Description: "",
    Duration: "",
  };

  const [input, setinput] = useState(empty); //for form inputs data get

  //state for save fetched data
  const [activity, setactivity] = useState([]);
  const [getEmail, setgetEmail] = useState(null); //for get email form localstorage

  //for data fetch
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:4000/addexcersiceByEmail/${getEmail}`
    );
    const data = await response.json();
    setactivity(data);
    setgetEmail(localStorage.getItem("email"));
  };

  useEffect(() => {
    // setgetEmail(localStorage.getItem("email"));
    fetchData();
  }, [getEmail]);

  const getinputs = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  const edit = async (id) => {
    let dataGetById = await fetch(`http://127.0.0.1:4000/addexcersice/${id}`);
    dataGetById = await dataGetById.json();
    seteditbox(true);
    setgetIdForUpdate(id);
    setinput(dataGetById);
  };

  const Update = async () => {
    let getIdForUpdatee = getIdForUpdate;
    await fetch(`http://127.0.0.1:4000/addexcersice/${getIdForUpdatee}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    fetchData();
    seteditbox(false);
  };

  const removee = async (id) => {
    await fetch(`http://127.0.0.1:4000/addexcersice/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };
  return (
    <div className="mainPage  h-screen overflow-auto">
      <div className=" h-auto grid md:grid-cols-2 sm:grid-cols-2 gap-4 grid-cols-1 p-4 ">
        {activity.map((elem, index) => {
          // date format change
          let isoDate = elem.date;
          let newDate = moment.utc(isoDate).format("MM-DD-YYYY");
          return (
            <div className=" text-black p-4 bg-white rounded-lg" key={index}>
              <div className="   flex flex-col items-center border-2 border-red-800 gap-3">
                {/* <h1 className="font-bold sm:text-xl">{elem.name}</h1> */}

                <h1 className="font-bold text-center text-xl sm:text-lg md:text-xl">
                  {elem.activity}
                </h1>
                <h1 className="sm:text-2xl text-xl">{newDate}</h1>

                <h1 className="sm:text-2xl text-xl">{elem.Description}</h1>
                <h1 className="sm:text-2xl text-xl">{elem.Duration} Mintues</h1>
              </div>
              <div className="flex justify-center items-center mt-1 gap-5">
                <button
                  onClick={() => edit(elem._id)}
                  className=" text-white hover:scale-110 duration-300   p-2 text-2xl rounded-lg font-bold"
                >
                  <img className="w-12" src="/editicon.png" alt="loading..." />
                </button>
                <button
                  onClick={() => removee(elem._id)}
                  className=" text-white hover:scale-110 duration-300   p-2 text-2xl rounded-lg font-bold"
                >
                  <img
                    className="w-12"
                    src="/removeicon.png"
                    alt="loading..."
                  />
                </button>
              </div>
            </div>
          );
        })}
        {editbox && (
          <div className="absolute backdrop-blur-sm w-screen h-screen  ">
            <div>
              <form
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="exerciseform min-[100px]:pl-5 sm:pl-16 md:pl-36">
                  <div className=" text-black card min-[100px]:w-44 min-[300px]:w-52 min-[420px]:w-80 sm:w-96 p-2 mt-16 border rounded-lg bg-white flex flex-col gap-5 md:gap-7">
                    <h1 className="text-center text-2xl font-bold text-red-500 ">
                      Welcome to Fitness club!
                    </h1>

                    <h1 className="text-center text-2xl font-bold text-black">
                      Add Excersice
                    </h1>

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
                    />

                    <input
                      className="border rounded p-2"
                      type="text"
                      placeholder="Description"
                      name="Description"
                      value={input.Description}
                      onChange={getinputs}
                    />

                    <input
                      className="border rounded p-2"
                      type="number"
                      placeholder="Duration in Mintues"
                      name="Duration"
                      value={input.Duration}
                      onChange={getinputs}
                    />

                    <button
                      id="delete-btn"
                      onClick={Update}
                      className="  bg-green-500 p-2 text-sm rounded font-bold"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseHistory;
