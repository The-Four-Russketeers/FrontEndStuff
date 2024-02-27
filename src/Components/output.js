import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab, Typography } from '@mui/material';

const apiURL = 'http://127.0.0.1:8000/showSchedule';

export default function DegreePlan() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // Make a GET request to your Django backend API using Axios
    axios.get(apiURL)
      .then(response => {
        // Assuming your API returns the data in a 'result' field
        const result = response.data.result;

        // Process the result and update the state
        setScheduleData(result);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <Tabs>
        <Tab label="Schedule">
          {/* Render the scheduleData in your component */}
          {scheduleData.map((course, index) => (
            <Typography key={index}>
              {course && course.name ? course.name : 'No name available'}
            </Typography>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
}