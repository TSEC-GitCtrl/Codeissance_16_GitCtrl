import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landing";
import Dashboard from "./components/Dashboard/Dashboard";
import ADashboard from "./components/Admin-Dashboard/Admin-Dashboard";
import TDashboard from "./components/Teacher-Dashboard/Teacher-Dashboard";
import SDashboard from "./components/Student-Dashboard/Student-Dashboard";
import LoginPage from "./components/Login/login";
import AddBatch from "./components/Forms/addBatch";

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

const OptionalRendering = () => {
  const role = "Admin";
  if (role == "Admin") {
    return (
      <div>
        <ADashboard />
      </div>
    );
  } else if (role == "Teacher") {
    return (
      <div>
        <TDashboard />
      </div>
    );
  } else if (role == "Student") {
    return (
      <div>
        <SDashboard />
      </div>
    );
  } else {
    return <div>Error 404! User not found!</div>;
  }
};

const App = () => {
  const role = "Teacher";
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      {/* <Route path="/adashboard" element={<ADashboard />}></Route>
      <Route path="/tdashboard" element={<TDashboard />}></Route>
      <Route path="/sdashboard" element={<SDashboard />}></Route> */}
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/addBatch" element={<AddBatch />}></Route>
      <Route path="/dashboard" element={<ADashboard />}></Route>
      {/* <Route path="AdminDashboard" element={<ADashboard />} />
      <Route path="TeacherDashboard" element={<TDashboard />} />
      <Route path="StudentDashboard" element={<SDashboard />} /> */}
    </Routes>
  );
};

export default App;
