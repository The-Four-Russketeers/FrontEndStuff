import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
];

// Static data for testing
const staticAdvisees = [
  { id: 1, firstName: 'John', lastName: 'Smith', email: 'jsmith@atu.edu' },
];

export default function AdvisedAdviseesTable() {
  const [advisees, setAdvisees] = useState([]);

  useEffect(() => {
    // For testing, use static data instead of fetching from the backend
    setAdvisees(staticAdvisees);
  }, []); // Run this effect only once when the component mounts

  return (
    <div style={{ height: 400, width: '100%',marginTop: '250px' }}>
      <DataGrid
        rows={advisees}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
