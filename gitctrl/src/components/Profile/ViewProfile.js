import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  Grid,
  Input,
  Card,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
// import { OtpContext } from "../Signup/context.js";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormLabel } from "@mui/material";

export default function ViewProfile() {
  // const { userId, setUserId } = useContext(OtpContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const body = {
      firstName,
      lastName,
      email,
      gender,
      birthDate,
      number,
      address1,
      address2,
      country,
      state,
      district,
      city,
      pincode,
      userId: localStorage.getItem("userId"),
    };

    const fetchData = async () => {
      const result = await fetch(
        process.env.REACT_APP_API_URL + "/user/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const data = await result.json();
      console.log(data);
      setFirstName(data.profileDetails.user.firstName);
      setLastName(data.profileDetails.user.lastName);
      setBirthDate(data.profileDetails.user.birthDate);
      setGender(data.profileDetails.user.gender);
      setEmail(data.profileDetails.user.email);
      setNumber(data.profileDetails.user.number);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 800, padding: 3 }}>
          <Box component="form" noValidate m={3}>
            <Typography
              variant="h4"
              style={{
                margin: "18px 0",
                paddingBottom: "10px",
                width: "210px",
                color: "#1e439b",
                fontSize: "22px",
                borderBottom: "3px solid #ff5501",
                fontWeight: "600",
                marginBottom: "30px",
              }}
              gutterBottom
            >
              View Profile
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <Typography>First Name:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  style={{ color: "#7F5283" }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography>Last Name:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  style={{ color: "#7F5283" }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <hr
                  style={{
                    borderWidth: "0 0 1px",
                    borderColor: "grey",
                    borderStyle: "solid",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>Birth Date:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  style={{ color: "#7F5283" }}
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography>Gender:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  style={{ color: "#7F5283" }}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <hr
                  style={{
                    borderWidth: "0 0 1px",
                    borderColor: "grey",
                    borderStyle: "solid",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>Email:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  fullWidth
                  inputProps={{ readOnly: true }}
                  focused
                  style={{ color: "#7F5283" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>Contact:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <hr
                  style={{
                    borderWidth: "0 0 1px",
                    borderColor: "grey",
                    borderStyle: "solid",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Address line 1:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Input
                  required
                  size="small"
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Address Line 1"
                  autoFocus
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Address line 2:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Input
                  required
                  size="small"
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Address Line 2"
                  autoFocus
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <hr
                  style={{
                    borderWidth: "0 0 1px",
                    borderColor: "grey",
                    borderStyle: "solid",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>Country:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>State:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <hr
                  style={{
                    borderWidth: "0 0 1px",
                    borderColor: "grey",
                    borderStyle: "solid",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>District:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>City:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <hr
                  style={{
                    borderWidth: "0 0 1px",
                    borderColor: "grey",
                    borderStyle: "solid",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography>Pincode:</Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Input
                  inputProps={{ readOnly: true }}
                  focused
                  fullWidth
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              href="/profile"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Card>
      </Box>
    </React.Fragment>
  );
}
