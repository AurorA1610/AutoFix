import {  Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Concern = () => {

    const [data, setData] = useState("");

    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = e => {
        const value = e.target.value;
        setData(value);
    }

    const handleSubmit = e => {
        console.log(data);
        alert("Your concern is noted. You'll be contacted soon");
        setData("");
    }

    return (
        <Container sx={ { mt: 5 } }>
            <Typography variant="h3" gutterBottom style={{ marginTop: 130, marginBottom: 50 }}>
                Tell Us Your Concern
            </Typography>
            <TextField
                sx={ { width:"75%", m:1 } }
                label="Type your concern here"
                name="concern"
                color="secondary" 
                value={ data }
                onChange={ handleOnChange }
                variant="outlined" />

            <Button
                sx={ { width: "30%" } }
                style={{ marginTop: 50, marginBottom: 50}}
                onClick={ handleSubmit }
                type="submit"
                color="secondary"
                variant="contained"
            >Submit</Button>
        </Container>
    );
};

export default Concern;