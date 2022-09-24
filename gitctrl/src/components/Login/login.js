import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Card,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Navbar from "../navbar/Navbar";
import ADashboard from "../Admin-Dashboard/Admin-Dashboard";
import TDashboard from "../Teacher-Dashboard/Teacher-Dashboard";
import SDashboard from "../Student-Dashboard/Student-Dashboard";
import "./login.css";

function showPass() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// const trial = () => {
//   const role = "Admin";
//   if (role == "Admin") {
//     document.getElementById("#signin").
//   }
// }

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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    if (!email || !password) {
      alert("fill the proper form");
    } else {
      console.log(body);
    }

    const result = await fetch(process.env.REACT_APP_API_URL + "/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    localStorage.setItem("Token", data.data);
    Navigate("/vprofile", { replace: true });
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Card sx={{ maxWidth: 400 }}>
          <Box component="form" onSubmit={handleSubmit} noValidate m={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              size="small"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              size="small"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  color="primary"
                />
              }
              label="Show password"
            />
            <a href="/dashboard" id="signin">
              Login
            </a>
            {/* <Link
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              to="/dashboard"
            >
              Login
            </Link> */}

            {/* <Link to="/dashboard/TeacherDashboard"></Link>
            <Link to="/dashboard/StudentDashboard"></Link> */}
            {/* <Outlet /> */}
            <Grid container>
              <Grid item xs>
                <Link href="/step" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="/" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
}
