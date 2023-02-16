import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const empty = {
    email: "",
    password: "",
  };
  const [input, setinput] = useState(empty);

  const navigate = useNavigate();

  const getinputs = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  function showPassword() {
    let password = document.getElementById("PasswordInput");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  const login = async () => {
    if (input.email === "" || input.password === "") {
      alert("Fill all fileds");
    } else {
      await fetch("http://127.0.0.1:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);

          if (data.message === "Login success! 😊 👌") {
            localStorage.setItem("dataKey", data.auth);
            localStorage.setItem("email", data.userLogin.email);
            navigate("/dashboard/dashboardsection2");
          } else if (data.message === "Not register please SignUp first") {
            navigate("/signup");
          }
        });
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

            <Link to="/signup">
              <button className="bg-green-500 p-2 text-sm rounded">
                SIGN UP
              </button>
            </Link>
          </div>
        </header>

        {/* Login form */}
        <div className="loginForm flex justify-center mt-5  sm:mt-10 drop-shadow-sm">
          <div className="card p-5 w-64 sm:w-96 border rounded-lg bg-white flex flex-col  gap-4 sm:gap-7">
            <h1 className="text-center text-2xl font-bold text-red-500 ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(" Welcome to")
                    .pauseFor(5)
                    .deleteAll()
                    .typeString("Fitness club!")
                    .start();
                }}
              />
            </h1>
            {/* <h1 className="text-center text-2xl font-bold text-red-500 ">
              Welcome to Fitness club!
            </h1> */}

            <h1 className="text-center text-3xl font-bold ">Member Login</h1>

            <input
              className="border rounded p-2"
              type="email"
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
              onClick={login}
              className="  bg-green-500 p-2 text-sm rounded font-bold"
            >
              LOG IN
            </button>
            <div className=" flex-col sm:flex-row flex justify-center items-center">
              <h5 className="text-center ">Not a member yet?</h5>
              <Link to="/signup">
                <button className="text-blue-500 font-bold">
                  Sign up now!
                </button>
              </Link>
            </div>
          </div>
        </div>

        <footer className=" mt-3 fixed bottom-0 left-0 w-screen">
          <h5 className="bg-white text-center font-bold ">
            ©2023 FitnessClub, Inc.
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
