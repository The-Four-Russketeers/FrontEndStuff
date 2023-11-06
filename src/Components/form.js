import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box, CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';





export default function Form() {
    
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
        }
  return (

    <Container maxWidth="sm">
    <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#e4e4e4',
            width: 'sm',
            height: 'sm', 
            
          }}
          >

        <Typography component="h1" variant="h6">How many classes do you want to take per semester?</Typography>
        <br/>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"># of Classes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="numClasses"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
        </Select>
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



