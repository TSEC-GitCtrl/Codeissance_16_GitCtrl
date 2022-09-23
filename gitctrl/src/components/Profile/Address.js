import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Avatar,
  Card,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { HomeIcon } from "@radix-ui/react-icons";

export default function Address2() {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();

  // useEffect (async () => {
  //     const result = await fetch(
  //     process.env.REACT_APP_API_URL + "/countries",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   const data = await result.json();
  //   console.log(data);
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      address1,
      address2,
      country,
      state,
      district,
      city,
      pincode,
    };

    if (!address1 || !address2 || !country || !district || !city || !pincode || !state) {
      alert("fill the proper form");
    } else {
      console.log(body);
    }

    // const result = await fetch(
    //   process.env.REACT_APP_API_URL + "/countries",
    //   {
    //     method: "GET",
    //     body: JSON.stringify(body),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   }
    // );
    // const data = await result.json();
    // console.log(data);
  };

  return (
    <Box
      sx={{
        marginBottom: 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ bgcolor: "secondary.main" }}>
        <HomeIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Address Details
      </Typography>
      <Card sx={{ maxWidth: 450 }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          m={3}
          pt={2}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                name="address1"
                required
                size="small"
                fullWidth
                id="address1"
                label="Address Line 1"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} >
              <TextField
                name="address2"
                required
                size="small"
                fullWidth
                id="address2"
                label="Address Line 2"
                autoFocus
              />
            </Grid>

            <Grid item xs={8} sm={6}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Country
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="country"
                  size="small"
                  name="country"
                  label="Country"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Transgender">Transgender</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  State
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="state"
                  name="state"
                  size="small"
                  label="State"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Transgender">Transgender</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  District
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="district"
                  name="district"
                  label="District"
                  size="small"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Transgender">Transgender</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  City
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="city"
                  name="city"
                  label="City"
                  size="small"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Transgender">Transgender</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                name="pincode"
                id="pincode"
                label="Pincode"
                size="small"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
