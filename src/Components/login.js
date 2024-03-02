import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
 //import Link from '@mui/material/Link';
 //import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const apiUrl = 'http://127.0.0.1:8000/login';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestData = { // creates a non-changing object called requestData - this contains an email and password field
      email: email,
      password: password,
    };

    try {
      // Make a POST request to the apiURL
      const response = await axios.post(apiUrl, requestData); // send the requestData object to the apiURL 
      if (response.status === 200) {
        console.log('Login successful');
        navigate('/home');
      } else {
        // Handle other response statuses (e.g., error scenarios)
        console.error('Login failed');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

 return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value ={email} // sets the value in the text field to the email constant created earlier
              onChange={(e)=> setEmail(e.target.value)} /*onChange is an event that triggers when an input changes - e is an event object that holds information on the change
                                                         setEmail is the setter function we made that changes the email value - e.target is the input element and e.target.value
                                                        the value currently in the input element */
            />    
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In 
            </Button>
             
          </Box>
        </Box>
      </Container>
  );
} 

/*<Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> 
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */