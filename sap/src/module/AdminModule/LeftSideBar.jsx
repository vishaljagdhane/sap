import React, { useState, useEffect } from 'react';
import { Drawer, Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Home, Create, Edit, Search, AddCircle, Business ,} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
const LeftSideBar = ({ open, onMenuItemClick, activeItem }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loginTime] = useState(new Date()); // Set the login time when the user first logs in
  const [sessionDuration, setSessionDuration] = useState(0); // Session duration in seconds

  const menuItems = [
    { id: 'home', label: 'Dasahboard', icon: <DashboardIcon fontSize="small" /> },
    { id: 'button', label: 'Button', icon: <SmartButtonIcon fontSize="small" /> },
    { id: 'table', label: 'Table', icon: <Edit fontSize="small" /> },
    { id: 'Box', label: 'Box', icon: <Search fontSize="small" /> },
    { id: 'According', label: 'According', icon: <AddCircle fontSize="small" /> },
    { id: 'silder', label: 'IMG Silder', icon: <Business fontSize="small" /> },
    // More menu items...
  ];

  // Handle click on a menu item
  const handleItemClick = (itemId) => {
    onMenuItemClick(itemId); // Pass the clicked item to the parent
  };

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Calculate session duration in seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionDuration(Math.floor((new Date() - loginTime) / 1000)); // in seconds
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [loginTime]);

  // Format the session duration in hours, minutes, and seconds
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  return (
    <Drawer
      sx={{
        width: '240px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box',
          backgroundColor: 'white',
          color: 'black',
          overflow: 'hidden',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={{ p: 2 }}>
        {/* Custom Framework name fixed */}
        <Typography
          variant="h5"
          color="inherit"
          sx={{
            position: 'fixed',
            top: 10,
            left: 20,
            height: '50px',
            fontSize: '18px',
            width: 'auto',
            padding: '10px',
            zIndex: 1,
          }}
        >
          Custom-Framework
        </Typography>

        {/* List of menu items with scrollable behavior */}
        <Box>
          <List
            sx={{
              position: 'relative',
              width: '105%',
              top: 60,
              height: '70vh', // Limit the list height to 30% of the viewport height
              overflowY: 'auto', // Enable vertical scrolling if the list overflows
            }}
          >
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                sx={{
                  cursor:'pointer',
                  backgroundColor: item.id === activeItem ? 'lightSkyBlue' : 'transparent',
                  boxShadow: item.id === activeItem ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                  fontWeight: item.id === activeItem ? 'bold' : 'normal',
                  borderRadius: item.id === activeItem ? '15px' : '',
                  '&:hover': {
                    backgroundColor: item.id === activeItem ? 'lightSkyBlue' : '#f0f0f0',
                  },
                }}
              >
                {item.icon}
                <ListItemText primary={item.label} sx={{ ml: 2, fontSize: '14px' }} />
              </ListItem>
            ))}
          </List>
        </Box>
        
        {/* Display Current Date, Time and Login Duration */}
        <Box sx={{ position: 'relative', top: '60px', padding: '10px', fontSize: '14px', color: 'black' }}>
          <Typography variant="body1">
            <strong>Current Time:</strong> {currentTime.toLocaleString()}
          </Typography>
          <Typography variant="body1">
            <strong>Session Duration:</strong> {formatDuration(sessionDuration)}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LeftSideBar;
