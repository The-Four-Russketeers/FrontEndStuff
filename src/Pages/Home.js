import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';
import Navbar from '../Components/navbar';
import "./styles.css";
import Typography from '@mui/material/Typography';

const apiUrl = 'http://127.0.0.1:8000/test?format=json';

const YourComponent = () => {
  const [data, setData] = useState({});
  const [semesters, setSemesters] = useState([]);
  const [progress, setProgress] = useState();
  const [hoursDesired, setHoursDesired] = useState(15);
  const [inputValue, setInputValue] = useState('15');

  function setVariables(apiData) {
    setData(apiData);
    setProgress(apiData.percentage);
    setSemesters(apiData.semesters.filter(semester => semester.length > 0));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setHoursDesired(parseInt(inputValue));
  };

  useEffect(() => {
    axios.get(apiUrl, {
      params:{
        hoursDesired: hoursDesired
      }
    })
    .then(response => {
      setVariables(response.data);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
  }, [hoursDesired]);

  return (
    <div>
      <Navbar />
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ 
          position: 'relative', 
          display: 'inline-flex', 
          marginRight: '10px', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {/* Light grey background */}
          <CircularProgress variant="determinate" value={100} style={{ color: 'lightgrey' }} />
          {/* Blue fill */}
          <CircularProgress variant="determinate" value={progress} style={{ color: 'blue', position: 'absolute', zIndex: 1, width: '100%', height: '100%' }} />
          {/* Display percentage in the middle */}
          <Typography 
            variant="caption" 
            component="div" 
            color="textSecondary" 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              zIndex: 2, 
              whiteSpace: 'nowrap', 
              fontWeight: 'bold' 
            }}
          >
            {`${Math.round(progress)}%`}
          </Typography>
        </div>
        <div>
          <p>John Smith</p>
          <p>Bachelor of Computer Science</p>
        </div>          
      </div>
      
      <hr style={{ borderColor: 'lightgrey', borderWidth: '1px', width: '80%', marginTop: '0px'}} />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '30px' }}>
        <div style={{ width: '80%' }}> {/* Adjust width as needed */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {semesters.map((semester, index) => (
                    <TableCell key={index} style={{ fontWeight: 'bold' }}>Semester {index + 1}</TableCell>)
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {semesters[0] && semesters[0].map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {semesters.map((semester, columnIndex) => (
                      <TableCell key={columnIndex}>
                        {semester[rowIndex] ? `${semester[rowIndex][0]} ${semester[rowIndex][1]}` : ''}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="hoursDesired">Desired hours per semester:</label>
          <input
            type="number"
            id="hoursDesired"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min="6"
            max="28"
            style={{ marginLeft: '5px', appearance: 'textfield', width: '35px' }}
          />
          <button type="submit" className="custom-button" style={{ marginLeft: '5px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default YourComponent;
