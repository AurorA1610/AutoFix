import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Garage from './Garage';


const Garages = () => {
    const [garages, setGarages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/garages').then(res => res.json()).then(data => setGarages(data));
    }, []);
    return (
        <Container style={{ marginTop: 50 }}>
            <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
                {
                    garages.map(garage => <Garage
                        key={garage._id}
                        garage={garage}
                    ></Garage>)
                }
            </Grid>
        </Container>
    );
};

export default Garages;