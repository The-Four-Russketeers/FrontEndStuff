import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Toolbar, Typography, AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate, Link  } from 'react-router-dom';

export default function Navbar() {
  const history = useNavigate();

  const handleLogOff = () => {
    console.log('Logged off');
    history('/login'); 
  };

  
  return (
    <React.Fragment>
      <AppBar sx={{ position: 'fixed', top: 0, zIndex: 1000, background: '#31c67c', height: '64px' }}> {/* Ensure the AppBar has a fixed height */}
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}> {/* Ensure the Toolbar has a fixed height */}
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}> {/* Set the height of the containing div to 100% */}
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>AdviSync</Typography>
            <div style={{ height: '80%', borderLeft: '2px solid black', marginLeft: '10px' }}></div> {/* Vertical line */}
          </div>
          <div style={{ marginLeft: '15px' }}>
            <Link to="/electives" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h7" style={{ fontWeight: 'bold'}}>Electives</Typography>
            </Link>
          </div>
          <Tabs sx={{ marginLeft: 'auto' }} textColor='inherit'>
            <Tab icon={<LogoutIcon />} onClick={handleLogOff} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

