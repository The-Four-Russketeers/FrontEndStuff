import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box, CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';




export default function Form() {
    
  const history = useNavigate();
    
  const handleLogOff = () => {
    // Add logic to handle log off
    console.log('Logged off');

    // Perform any additional log off operations (e.g., clear session, user data)

    // Redirect the user to the login page
    history('/login'); // Replace '/login' with the appropriate login route
  };
        return (

    
    <Container maxWidth="sm">
    
    <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#ffffff',
            width: 'sm',
            height: 'sm', 
            
          }}
          >
        <Grid container justifyContent="flex-end">
          <Button onClick={handleLogOff} variant="outlined" color="secondary">
          Log Off
          </Button>
        </Grid>
        <Typography component="h1" variant="h6">How many credit hours do you want to take per semester?</Typography>
        <br/>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"># of Hours</InputLabel>
        <TextField
          id="outlined-number"
          label="# of Hours"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 3,
            max: 18,
            step: 1,
          }}
        />
        </FormControl>
        <br/>
        <br/>
        <Stack spacing={2} direction="row">
            <Button variant="text">Generate</Button>
            
        </Stack>
        </Box>

    



    </Container>
  )
}



