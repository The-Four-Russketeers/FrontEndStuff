import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Navbar from '../Components/navbar';

const apiUrl = 'http://127.0.0.1:8000/test?format=json';

const YourComponent = () => {
  const [data, setData] = useState({});
  const [semesters, setSemesters] = useState([]);
  const [progress, setProgress] = useState();
  const [hoursDesired, setHoursDesired] = useState(16);
  const [inputValue, setInputValue] = useState('16');

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
      <Divider>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CircularProgress variant="determinate" value={progress} style={{ marginRight: '10px'}} />
          <div>
            <p>John Smith</p>
            <p>Bachelor of Computer Science</p>
          </div>
        </div>
      </Divider>

      <div style={{ marginBottom: '20px' }}></div>

      <Divider>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {semesters.map((semester, index) => (
                  <TableCell key={index} style={{ fontWeight: 'bold' }}>Semester {index + 1}</TableCell>
                ))}
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
      </Divider>

      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="hoursDesired">Desired Hours Per Semester:</label>
          <input
            type="number"
            id="hoursDesired"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min="6"
            max="28"
            style={{ marginLeft: '5px', appearance: 'textfield', width: '35px' }}
          />
          <button type="submit" style={{ marginLeft: '5px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default YourComponent;
