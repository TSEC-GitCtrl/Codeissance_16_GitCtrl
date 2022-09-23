import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landing";
import Dashboard from "./components/Dashboard/Dashboard";
import ADashboard from "./components/Admin-Dashboard/Admin-Dashboard";
import TDashboard from "./components/Teacher-Dashboard/Teacher-Dashboard";
import SDashboard from "./components/Student-Dashboard/Student-Dashboard";
import Login from "./components/Login/login";
// import AddBatch from "./components/Forms/addBatch";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section"></section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section"></section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section"></section>
    </>
  );
};

const App = () => {
  const role = "Teacher";
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/addBatch" element={<AddBatch />}></Route> */}
    </Routes>
  );
};

export default App;
