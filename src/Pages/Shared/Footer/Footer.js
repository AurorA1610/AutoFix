import { Grid, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';

const Footer = () => {
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }} sx={ { backgroundColor: '#AF601A', mt: 4 } }>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#CEA78D' }}>
                        <span style={{ fontFamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic' }}>
                            AutoFix
                        </span><BuildRoundedIcon fontSize="large" />
                    </Typography>
                    <Typography variant="h4" component="div" sx={ { mb: 3 } }>
                        <LocalPhoneIcon sx={ { color: '#F5CBA7', fontSize: 50, mr: 2  } } />
                        +91-9674319420
                    </Typography>
                    <FacebookIcon fontSize="large" sx={ { color: '#F5CBA7'  } } /> 
                    <TwitterIcon fontSize="large" sx={ { color: '#F5CBA7'  } } /> 
                    <InstagramIcon fontSize="large" sx={ { color: '#F5CBA7'  } } />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h5" component="div" sx={ { color: '#F5CBA7', fontWeight: 'bold', mb: 2 } }>
                        Quick Links
                    </Typography>
                    
                    <HashLink style={ { textDecoration: 'none', color: 'black' } } to="/home#home">
                        Home
                    </HashLink> <br />
                    <HashLink style={ { textDecoration: 'none', color: 'black' } } to="/home#products">
                        Services
                    </HashLink> <br />
                    <HashLink style={ { textDecoration: 'none', color: 'black' } } to="/home#reviews">
                        Testimonials
                    </HashLink> <br />
                    <HashLink style={ { textDecoration: 'none', color: 'black' } } to="/home#awards">
                        About Us
                    </HashLink> <br />
                    <HashLink style={ { textDecoration: 'none', color: 'black' } } to="/home#awards">
                        Sponsorships 
                    </HashLink>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h5" component="div" sx={ { color: '#F5CBA7', fontWeight: 'bold', mb: 2 } }>
                        Help
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Privacy Policy
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Support
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Contact Us
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="p" component="div" sx={ { p: 2, color: 'white', backgroundColor: '#7F8C8D'} }>
                © 2021 AutoFix – All rights reserved.
            </Typography>
        </div>
    );
};

export default Footer;