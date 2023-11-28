import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';

export default function DegreePlan(){
  // Static data for demonstration
  const staticData = {
    semesters: [
      {
        classes: [
          { id: 1, name: 'ENGL', num: '1013', semester: 'Fall',  },
          { id: 2, name: 'CSEC', num: '1113', semester: 'Fall', },
          { id: 3, name: 'TECH', num: '1001', semester: 'Fall', },
          { id: 4, name: 'MATH', num: '2914', semester: 'Fall', },
          { id: 5, name: 'COMS', num: '1333', semester: 'Fall', },
        ],
      },
      {
        classes: [
          { id: 6, name: 'ENGL', num: '1023', semester: 'Spring', },
          { id: 7, name: 'HIST', num: '1513', semester: 'Spring', },
          { id: 8, name: 'COMS', num: '1011', semester: 'Spring', },
          { id: 9, name: 'COMS', num: '1013', semester: 'Spring', },
          { id: 10, name: 'JOUR', num: '2173', semester: 'Spring', },
          { id: 11, name: 'COMS', num: '2703', semester: 'Spring', },
        ],
      },
      {
        classes: [
          { id: 12, name: 'ELEG', num: '2134', semester: 'Fall', },
          { id: 14, name: 'MATH', num: '2924', semester: 'Fall', },
          { id: 15, name: 'COMS', num: '2203', semester: 'Fall', },
          { id: 16, name: 'CSEC', num: '2213', semester: 'Fall', },
          { id: 17, name: 'MATH', num: '2703', semester: 'Fall', },
        ],
      },
      {
        classes: [
          { id: 18, name: 'ENGL', num: '2053', semester: 'Spring', },
          { id: 19, name: 'COMS', num: '2213', semester: 'Spring', },
          { id: 20, name: 'COMS', num: '2223', semester: 'Spring', },
          { id: 21, name: 'COMM', num: '2173', semester: 'Spring', },
          { id: 22, name: 'BIOL', num: '1014', semester: 'Spring', },
        ],
      },
      {
        classes: [
          { id: 23, name: 'COMS', num: '3703', semester: 'Fall', },
          { id: 24, name: 'COMS', num: '3053', semester: 'Fall', },
          { id: 25, name: 'COMS', num: '3213', semester: 'Fall', },
          { id: 26, name: 'COMS', num: '3233', semester: 'Fall', },
          { id: 27, name: 'COMS', num: '3413', semester: 'Fall', },
        ],
      },
      {
        classes: [
          { id: 28, name: 'PHIL', num: '2003', semester: 'Spring', },
          { id: 29, name: 'GEOL', num: '1014', semester: 'Spring', },
          { id: 30, name: 'STAT', num: '3153', semester: 'Spring', },
          { id: 31, name: 'COMS', num: '3313', semester: 'Spring', },
          { id: 32, name: 'COMS', num: '4053', semester: 'Spring', },
        ],
      },
      {
        classes: [
          { id: 33, name: 'HIST', num: '2003', semester: 'Fall', },
          { id: 34, name: 'COMS', num: '3503', semester: 'Fall', },
          { id: 35, name: 'MATH', num: '4003', semester: 'Fall', },
          { id: 36, name: 'COMS', num: '4063', semester: 'Fall', },
          { id: 37, name: 'COMS', num: '4103', semester: 'Fall', },
        ],
      },
      { classes:[
        { id: 38, name: 'COMS', num: '4213', semester: 'Spring', },
        { id: 39, name: 'COMS', num: '4413', semester: 'Spring', },
        { id: 40, name: 'COMS', num: '4913', semester: 'Spring', },
        { id: 41, name: 'COMS', num: '4133', semester: 'Spring', },
      ],
    }
      
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
            
            <Typography key={course.id} style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', whiteSpace: 'pre-wrap' }}>
              <span style={{ marginRight: '30px' }}>{course.name}</span>
              <span style={{ marginRight: '30px' }}>{course.num}</span>
              <span>{course.semester}</span>
            </Typography>
              
          ))}
        </div>
      ))}
    </div>
  );
};
