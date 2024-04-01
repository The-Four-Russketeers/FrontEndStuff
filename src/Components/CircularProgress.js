import React from 'react';
import { CircularProgress } from '@mui/material';

const StudentProgress = ({ progress }) => {
  return (
    <CircularProgress variant="determinate" value={progress} sx={{color: 'FCFF2A',}}/>
  );
};

export default StudentProgress;
