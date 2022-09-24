import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ADashboard from "./components/Admin-Dashboard/Admin-Dashboard";
import TDashboard from "./components/Teacher-Dashboard/Teacher-Dashboard";
import SDashboard from "./components/Student-Dashboard/Student-Dashboard";
import Login from "./components/Login/login";
// import OptionalRender from "./OptionalRendering";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <App /> */}
      {/* <ADashboard /> */}
      {/* <TDashboard /> */}
      <SDashboard />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const Admin_login = () => {
//   return <ADashboard />;
// };

// const Teacher_login = () => {
//   return <TDashboard />;
// };

// const Student_login = () => {
//   return <SDashboard />;
// };

// const OptionalRendering = (props) => {
//   const role = props.role;
//   role = "Admin";
//   if (role == "Admin") {
//     return <ADashboard />;
//   }
//   if (role == "Teacher") {
//     return <TDashboard />;
//   }
//   if (role == "Student") {
//     return <SDashboard />;
//   }
// };
