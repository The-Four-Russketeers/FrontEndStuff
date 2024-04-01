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
      <AppBar sx={{ position: 'fixed', top: 0, zIndex: 1000, background: '#31c67c' }}>
        <Toolbar>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>AdviSync</Typography>
          <Tabs sx={{ marginLeft: 'auto' }} textColor='inherit'>
            <Tab icon={<LogoutIcon />} onClick={handleLogOff} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Add a Toolbar component below the AppBar to prevent content from being hidden under the AppBar */}
    </React.Fragment>
  );
}

