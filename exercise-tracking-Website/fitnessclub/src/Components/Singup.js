import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Singup = () => {
  //function for show password
  function showPassword() {
    let password = document.getElementById("PasswordInput");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  //this object save key value in intinal state
  const empty = {
    username: "",
    email: "",
    password: "",
  };

  // State for input save
  const [input, setinput] = useState(empty);
  //import usenavigate for nagivgation of page
  const navigate = useNavigate();

  //Function for set the  data of input in state
  const getinputs = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  // console.log(input);

  //function run onClick of Signup button
  const signupform = async () => {
    if (input.username === "" || input.email === "" || input.password === "") {
      alert("Fill all fileds");
    } else {
      await fetch("http://127.0.0.1:4000/signupnewuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
        });
      setinput(empty);
      navigate("/login");
    }
  };
  return (
    <div className="mainPage h-screen">
      <div>
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
              <button className="  bg-green-500 p-2 text-sm rounded">
                LOGIN
              </button>
            </Link>
          </div>
        </header>

        {/* SignUp form */}
        <div className="signUpform flex justify-center mt-5  sm:mt-8 drop-shadow-sm">
          <div className="card p-5  w-64 sm:w-96    border  rounded-lg bg-white flex flex-col  gap-4 sm:gap-7">
            <h1 className="text-center text-3xl font-bold ">SignUp</h1>

            <input
              className="border rounded p-2"
              type="text"
              placeholder="Username"
              name="username"
              value={input.username}
              onChange={getinputs}
            />
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Email Address"
              name="email"
              value={input.email}
              onChange={getinputs}
            />
            <input
              id="PasswordInput"
              className="border rounded p-2"
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={getinputs}
            />

            {/* show password */}
            <div className="flex gap-1">
              <input type="checkbox" onClick={showPassword} />
              <h1>Show Password</h1>
            </div>
            {/* ------------------------- */}
            <button
              onClick={signupform}
              className="  bg-green-500 p-2 text-sm rounded font-bold"
            >
              SIGN UP
            </button>
            <div className=" flex-col sm:flex-row flex justify-center items-center">
              <h5 className="text-center ">Already a user?</h5>
              <Link to="/login">
                <button className=" text-blue-500 font-bold">LOGIN</button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="fixed bottom-0 left-0 w-screen">
          <h5 className="bg-white text-center mt-5 sm:mt-11">
            ©2023 FitnessClub, Inc.
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default Singup;
