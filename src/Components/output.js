import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';

export default function DegreePlan(){
  // Static data for demonstration
  const staticData = {
    semesters: [
      {
        classes: [
          { id: 1, name: 'English', num: '1101', semester: 'Fall',  },
          { id: 2, name: 'Course B', num: '1102', semester: 'Fall', },
          { id: 2, name: 'Course B', num: '1102', semester: 'Fall', },
          { id: 2, name: 'Course B', num: '1102', semester: 'Fall', },
          { id: 2, name: 'Course B', num: '1102', semester: 'Fall', },
        ],
      },
      {
        classes: [
          { id: 3, name: 'Course C' },
          { id: 4, name: 'Course D' },
        ],
      },
      {
        classes: [
          { id: 5, name: 'Course C' },
          { id: 6, name: 'Course D' },
        ],
      },
      {
        classes: [
          { id: 7, name: 'Course C' },
          { id: 8, name: 'Course D' },
        ],
      },
      {
        classes: [
          { id: 9, name: 'Course C' },
          { id: 10, name: 'Course D' },
        ],
      },
      {
        classes: [
          { id: 11, name: 'Course C' },
          { id: 12, name: 'Course D' },
        ],
      },
      {
        classes: [
          { id: 13, name: 'Course C' },
          { id: 14, name: 'Course D' },
        ],
      },
      
    ],
  };

  const [value, setValue] = useState(0); // Initialize the value state with 0

  return (
    <div style={{ marginTop: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} sx={{border: '1px solid', borderRadius: '8px', }}>
        {staticData.semesters.map((semester, index) => (
          <Tab key={index} label={`Semester ${index + 1}`} />
        ))}
      </Tabs>
      <br/> <br/>
      {staticData.semesters.map((semester, index) => (
        <div key={index} hidden={value !== index}>
          {/* Display classes for this semester */}
          {semester.classes.map((course) => (
            
            <Typography key={course.id} style={{ fontWeight: 'bold', whiteSpace: 'pre-wrap'}} >
              
              {course.name}  {course.num}           {course.semester}
            </Typography>
              
          ))}
        </div>
      ))}
    </div>
  );
};
