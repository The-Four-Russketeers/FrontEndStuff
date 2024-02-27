import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Components/form';
import Navbar from '../Components/navbar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/test?format=json')
      .then(response => {
        setData(response.data); // Assuming response.data is an array of arrays representing rows
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Other Column</TableCell>
              {/* Add more cells for additional columns */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row[0]}</TableCell> {/* Assuming the first item in each row is the ID */}
                <TableCell>{row[1]}</TableCell> {/* Assuming the second item in each row is the Name */}
                <TableCell>{row[2]}</TableCell> {/* Assuming the third item in each row is another column */}
                {/* Add more cells for additional columns */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default YourComponent;
