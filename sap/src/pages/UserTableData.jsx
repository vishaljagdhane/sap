import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ApiServices from '../APIServises/ApiServices';

export default function UserTableData() {
  const { userDataGetting } = ApiServices(); // Call the function to get data

  // Table headers and sample data
  const headers = ['Id', 'Fname', 'Lname', 'Email', 'Mobile', 'Password', 'Attam'];

  const [tablebodayData, setTableBodayData] = useState([]);

  const fetchingData = async () => {
    try {
      const data = await userDataGetting(); // Use the userDataGetting function
      setTableBodayData(data); // Update state with fetched data
      console.log('Fetched data:', data); // Log fetched data
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchingData(); // Fetch the data when the component is mounted
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ borderCollapse: 'collapse' }}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header}
                sx={{
                  backgroundColor: '#1976d2', // Custom header color
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  border: '1px solid #ddd',
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tablebodayData.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ textAlign: 'center', border: '1px solid #ddd' }}>{row.id}</TableCell>
              <TableCell sx={{ textAlign: 'center', border: '1px solid #ddd' }}>{row.fname}</TableCell>
              <TableCell sx={{ textAlign: 'center', border: '1px solid #ddd' }}>{row.lname}</TableCell>
              <TableCell sx={{ textAlign: 'center', border: '1px solid #ddd' }}>{row.email}</TableCell>
              <TableCell sx={{ textAlign: 'center', border: '1px solid #ddd' }}>{row.mobile}</TableCell>
              <TableCell sx={{ textAlign: 'center', border: '1px solid #ddd' }}>{row.password}</TableCell>
              <TableCell sx={{ textAlign: 'center', border: '1px solid #ddd' }}>{row.attam}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
