import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Fade, Menu, MenuItem } from '@mui/material';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';

const options = [
    'Home',
    'Garages'
];
const ITEM_HEIGHT = 48;

const Navigation = () => {
    const { user, logout } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#AF601A' }}>
                <Toolbar>
                <IconButton
                    aria-label="more"
                    style={{ color: 'white' }}
                    id="long-button"
                    aria-controls="long-menu"
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                    }}
                    TransitionComponent={Fade}
                >
                    {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        <NavLink style={ { textDecoration: 'none', color: 'black' } } to={`/${option.toLowerCase()}`}>
                            <Button color="inherit" style={{ fontWeight: 'bold'  }}>{option}</Button>
                        </NavLink>
                    </MenuItem>
                    ))}
                </Menu>
                <Typography variant="h4" component="div" style={{ flexGrow: 1, color: '#CEA78D' }}>
                    <span style={{ fontFamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic' }}>
                        AutoFix
                    </span><BuildRoundedIcon fontSize="large" />
                </Typography>
                {
                    user?.email ? 
                    <Button color="inherit" onClick={ logout }>Log out</Button>
                    : <NavLink style={ { textDecoration: 'none', color: 'white' } } to="/login"><Button color="inherit">Login</Button></NavLink>
                }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;