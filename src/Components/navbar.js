import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Toolbar, Typography, AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const history = useNavigate();
    const handleLogOff = () => {
        console.log('Logged off');
        history('/login'); 
    };

  return (
    <React.Fragment>
        <AppBar sx = {{background:'#31c67c' }}>
            <Toolbar>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>ATU Scheduling</Typography>

                <Tabs sx = {{marginLeft: 'auto'}} textColors = 'inherit'>
                <Tab icon={<LogoutIcon />} onClick={handleLogOff} />

                </Tabs>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}
