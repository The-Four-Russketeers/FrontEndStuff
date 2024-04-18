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



const client = axios.create({
  baseURL: 'http://127.0.0.1:8000' // Set base URL for requests
});

export default function Login() {
  const [currentUser,setCurrentUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    client.get("/user").then(function(res){
      setCurrentUser(true);
    }).catch(function(error){
      setCurrentUser(false);
    })
  }, []);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestData = { // creates a non-changing object called requestData - this contains an email and password field
      email: email,
      password: password,
    };

    try {
      // Make a POST request to the login endpoint
      const response = await client.post('/login', requestData);
      if (response.status === 200) { // Assuming status code 200 indicates successful login
        console.log('Login successful');
        setCurrentUser(true); // Update currentUser state if necessary
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
