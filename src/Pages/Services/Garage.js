import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Garage = ({ garage }) => {
    const { name, address, contactNumber, rating, img } = garage;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }} style={{ backgroundColor: '#E8DAEF' }}>
                <CardMedia
                    component="img"
                    alt={ name }
                    height="300"
                    image={ img }
                />
                <CardContent style={{ height: 200 }}> 
                    <Link to={'/concern'}>
                        <Button 
                        size="large" 
                        style={{ fontWeight: 'bold', color: '#1F618D' }}>
                            { name }
                        </Button>
                    </Link>
                    <Typography variant="body2">
                        { address }
                    </Typography> <br />
                    <Typography variant="h6">
                        { contactNumber }
                    </Typography> <br />
                    <Typography variant="body2">
                        <Rating precision={0.5} value={ rating } readOnly />
                    </Typography>
                </CardContent>
            </Card>  
        </Grid>
    );
};

export default Garage;