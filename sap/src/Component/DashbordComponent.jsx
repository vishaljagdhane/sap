import React from 'react';
import { Box, Grid, Typography, styled, Paper } from '@mui/material';

// Dummy data for the dashboard
const dashboardData = [
  { title: 'Sales Orders', value: 1500, description: 'Total Sales Orders Processed' },
  { title: 'Purchasing Orders', value: 230, description: 'Total Purchasing Orders Received' },
  { title: 'Inventory Movements', value: 500, description: 'Total Inventory Movements in Warehouse' },
  { title: 'Goods Receipt', value: 120, description: 'Goods Receipt Completed' },
];

export default function DashbordComponent() {
  // Styled Paper component for each grid item
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  }));

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto', bgcolor: '#f5f5f5', display: 'block' }}>
      {/* Dashboard Header */}
      <Box sx={{ position: 'relative', width: '90%', padding: 3 }}>
        <Typography variant="h5">Custom Dashboard</Typography>
      </Box>

      {/* Grid Layout for Dashboard */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
      {/* First Grid: Sales, Purchasing, Inventory Movements, Goods Receipt */}
      {dashboardData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <Item>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              {item.value}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, color: 'gray' }}>
              {item.description}
            </Typography>
          </Item>
        </Grid>
      ))}
    </Grid>
      </Box>

      {/* Additional Grids */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h6">Grid 2: Other Content</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h6">Grid 3: Other Content</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h6">Grid 4: Other Content</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
