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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate)
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          {
            <form
              onSubmit={handleLoginSubmit}
              style={{ marginTop: 20, marginBottom: 40 }}
            >
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onChange={handleOnChange}
                type="password"
                variant="standard"
              />

              <Button
                style={{ width: "75%", margin: 10, backgroundColor: "#EEA839" }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>

              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text" style={{ color: "#EEA839" }}>
                  New User? Please Register
                </Button>
              </NavLink>
            </form>
          }
          <p>--------------------------------------------------------------</p>
          <Button variant="contained" style={{ backgroundColor: "#EEA839" }} onClick={handleGoogleSignIn}>
            Sign In With Google
          </Button>

          {isLoading && <CircularProgress sx={{ m: 3 }} />}
          {user?.email && (
            <Alert severity="success">Logged in Successfully</Alert>
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

export default Login;
