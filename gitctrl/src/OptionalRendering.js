import React from "react";
import { ReactDOM } from "react";
import Login from "./components/Login/login";
import ADashboard from "../Admin-Dashboard/Admin-Dashboard";
import TDashboard from "../Teacher-Dashboard/Teacher-Dashboard";
import SDashboard from "../Student-Dashboard/Student-Dashboard";

const OptionalRender = (props) => {
  const role = props.role;
  if (role == "Admin") {
    return <ADashboard />;
  } else if (role == "Teacher") {
    return <TDashboard />;
  } else if (role == "Student") {
    return <SDashboard />;
  } else {
    return <h1>Error 404! User not found!</h1>;
  }
};

// render(<OptionalRender />, document.getElementById("root"));
