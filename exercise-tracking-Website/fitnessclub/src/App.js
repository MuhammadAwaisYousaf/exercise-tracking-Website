import "./App.css";
import React from "react";
import LoginPage from "./Components/LoginPage";
import Singup from "./Components/Singup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";


function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage/>}/> */}
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/dashboard/*" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
