import React from 'react';
import Navbar from '../Components/navbar';
import CircularProgress from '@mui/material/CircularProgress';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import "./styles.css"
import { Link } from 'react-router-dom';




const studentsData = [
  { name: 'John Smith', tnum: 'T0123456', major: 'Computer Science B.S', progress: 7 },
  { name: 'Jane Doe', tnum: 'T0654321', major: 'Informational Technology B.S', progress: 60 },
  { name: 'Michael Johnson', tnum:'T0012345', major:'Computer Science B.S', progress: 90 },
  // Add more student data as needed
];

export default function StudentsPage() {
  return (
    
    
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Navbar />
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
      <div>
        <br></br>
        <h1 >Advisees</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>T-Number</TableCell>
                <TableCell>Major</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>View Schedule</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsData.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.tnum}</TableCell>
                  <TableCell>{student.major}</TableCell>
                  <TableCell>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress variant="determinate" value={student.progress} />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(student.progress)}%`}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Button component={Link} to="/home" variant="contained" color="primary" size="small">
                       View Schedule
                     </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </Box>

    </div>
    
  );
}








/* Old
import React from 'react';
import Navbar from '../Components/navbar';
import CircularProgress from '@mui/material/CircularProgress';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { Box } from '@mui/material';

const studentsData = [
  { name: 'John Doe', progress: 75 },
  { name: 'Jane Smith', progress: 60 },
  { name: 'Michael Johnson', progress: 90 },
  // Add more student data as needed
];

export default function StudentsPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Navbar />
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
      <div>
        <br></br>
        <h1>Advisees</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>T-Number</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>View Schedule</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsData.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <CircularProgress variant="determinate" value={student.progress} />
                  </TableCell>
                  <TableCell>
                    <a href="#">View Schedule</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </Box>
    </div>
  );
}
*/
