import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {

  const [loginData, setLoginData] = useState({});

  const { user, registerUser, isLoading, authError } = useAuth();

  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      loginData.phone,
      navigate
    );
    e.preventDefault();
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Register
          </Typography>

          {!isLoading && (
            <form onSubmit={handleLoginSubmit} style={{ marginTop: 10 }}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Name"
                name="name"
                type="text"
                onChange={handleOnBlur}
                variant="standard"
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Phone No."
                name="phone"
                type="number"
                onChange={handleOnBlur}
                variant="standard"
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Email"
                name="email"
                type="email"
                onChange={handleOnBlur}
                variant="standard"
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Password"
                name="password"
                onChange={handleOnBlur}
                type="password"
                variant="standard"
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Confirm Password"
                name="password2"
                onChange={handleOnBlur}
                type="password"
                variant="standard"
              />

              <Button
                style={{ width: "75%", margin: 10, backgroundColor: "#EEA839" }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>

              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text" style={{ color: "#EEA839" }}>
                  Already Registered? Please Login
                </Button>
              </NavLink>
            </form>
          )}
          <p>--------------------------------------------------------------</p>
          <Button variant="contained" style={{ backgroundColor: "#EEA839" }}>
            Sign In With Google
          </Button>
          {isLoading && <CircularProgress sx={{ m: 3 }} />}
          {user?.email && (
            <Alert severity="success">Registered Successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/C9YDZSP/login.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
