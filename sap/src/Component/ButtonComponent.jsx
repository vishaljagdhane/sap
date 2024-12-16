import { Box, Typography, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';

export default function ButtonComponent() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: 'auto', bgcolor: '#f5f5f5', display: 'block' }}>
        <Box sx={{ position: 'relative', width: '90%', padding: 3 }}>
          <Typography variant="h4" component="h1" fontWeight={600}>Button Component</Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="button tabs"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Aligned Automation Custom Design Button" />
            <Tab label="MUI Buttons" />
            <Tab label="Bootstrap Button" />
            <Tab label="React Prime Button" />
          </Tabs>
        </Box>

        <Box sx={{ position: 'relative', width: '90%', padding: 3, minHeight: '200px' }}>
          {tabValue === 0 && (
            <Box>
              <Typography variant="h5">AA Custom Design Button</Typography>
              {/* Custom button design content here */}
            </Box>
          )}
          {tabValue === 1 && (
            <Box>
              <Typography variant="h5">MUI Buttons</Typography>
              {/* MUI Buttons content here */}
            </Box>
          )}
          {tabValue === 2 && (
            <Box>
              <Typography variant="h5">Bootstrap Button</Typography>
              {/* Bootstrap button content here */}
            </Box>
          )}
          {tabValue === 3 && (
            <Box>
              <Typography variant="h5">React Prime Button</Typography>
              {/* React Prime button content here */}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
