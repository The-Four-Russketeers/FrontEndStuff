import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/navbar'; 
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

export default function Schedules() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/getClassesNeeded?format=json')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <h1>Courses</h1>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Subject</TableCell>
                                <TableCell>ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row[0]}</TableCell>
                                    <TableCell>{row[1]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
/*class apiFetch():
	url = "http://127.0.0.1:8000/showSchedule?format=json"
	returndata = requests.get(url).json()

class index(request):
		data = apiFetch.returndata*/


