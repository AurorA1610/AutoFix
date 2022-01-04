import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Concern = () => {
  const user = useAuth();
  const [inputValue, setInputValue] = useState("");
  const initialInfo = {
    userName: user.user.displayName,
    email: user.user.email,
    phone: user.user.phoneNumber,
  };
  const [concernInfo, setConcernInfo] = useState(initialInfo);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setInputValue(e.target.value);
    const newInfo = { ...concernInfo };
    newInfo[field] = value;
    setConcernInfo(newInfo);
  };

  const handleConcernSubmit = (e) => {
    const concern = {
      ...concernInfo,
    };
    console.log(concern);
    fetch("http://localhost:5000/concerns", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(concern),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(
            "Your concern has been recorded. Please Wait till the garage contacts you."
          );
          setInputValue("");
        }
      });
    e.preventDefault();
  };
  return (
    <Container sx={{ mt: 5 }}>
      <form onSubmit={handleConcernSubmit}>
        <Typography
          variant="h3"
          gutterBottom
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          Tell Us Your Concern <hr />
        </Typography>

        <TextField
          type="text"
          label="Name"
          sx={{ width: "75%", m: 1 }}
          defaultValue={user.user.displayName}
          color="secondary"
          name="userName"
          onBlur={handleOnBlur}
          variant="outlined"
        />

        <TextField
          type="number"
          label="Phone no."
          sx={{ width: "75%", m: 1 }}
          defaultValue={user.user.phoneNumber}
          name="phone"
          color="secondary"
          onBlur={handleOnBlur}
          variant="outlined"
        />

        <TextField
          type="email"
          label="Email"
          sx={{ width: "75%", m: 1 }}
          defaultValue={user.user.email}
          name="email"
          color="secondary"
          onBlur={handleOnBlur}
          variant="outlined"
        />

        <TextField
          sx={{ width: "75%", m: 1 }}
          label="Type your concern here"
          value={inputValue}
          name="concern"
          color="secondary"
          onBlur={handleOnBlur}
          variant="outlined"
        />

        <Button
          sx={{ width: "30%" }}
          style={{ marginTop: 20, marginBottom: 10 }}
          type="submit"
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>
      </form>
      <Link to={"/map"}>
        <Button size="large" style={{ fontWeight: "bold", color: "#1F618D" }}>
          Let Us Get Your Location
        </Button>
      </Link>
    </Container>
  );
};

export default Concern;
