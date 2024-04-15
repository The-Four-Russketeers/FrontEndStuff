import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Navbar from '../Components/navbar';
import form from '../Components/form';

const apiUrl = 'http://127.0.0.1:8000/test?format=json';

const YourComponent = () => {
  const [data, setData] = useState({});
  const [semesters, setSemesters] = useState([]);
  const [progress, setProgress] = useState(); // Initial progress value

  function setVariables(apiData) {
    setData(apiData);
    setProgress(apiData.percentage);
    setSemesters(apiData.semesters.filter(semester => semester.length > 0));
  }

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setVariables(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

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
    </div>
  );
};

export default YourComponent;



