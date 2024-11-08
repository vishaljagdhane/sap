import React, { useState } from "react";
import { Drawer, Box, List, ListItem, ListItemText, Divider, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // Icon for collapse

const LeftSidePanel = ({ open }) => {
  const [isSapMmOpen, setIsSapMmOpen] = useState(true); // State to toggle SAP MM
  const [isSapFicoOpen, setIsSapFicoOpen] = useState(false); // State to toggle SAP FICO
  const [isSapSdOpen, setIsSapSdOpen] = useState(false); // State to toggle SAP SD
  const [isSapHrOpen, setIsSapHrOpen] = useState(false); // State to toggle SAP HR

  // Toggle functions for each SAP module
  const toggleSapMm = () => setIsSapMmOpen((prev) => !prev);
  const toggleSapFico = () => setIsSapFicoOpen((prev) => !prev);
  const toggleSapSd = () => setIsSapSdOpen((prev) => !prev);
  const toggleSapHr = () => setIsSapHrOpen((prev) => !prev);

  return (
    <Drawer
      sx={{
        width: '240px', // Fixed width when open
        flexShrink: 0, // Prevent shrinking
        '& .MuiDrawer-paper': {
          width: '240px', // Fixed width when open
          boxSizing: 'border-box',
          backgroundColor: 'white', // Changed background color to white
          color: 'black', // Change text color to black for better contrast on white background
        },
      }}
      variant="persistent"
      anchor="left"
      open={open} // Conditionally open the drawer
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="inherit" gutterBottom>
          SAP Integration Module
        </Typography>

        {/* SAP MM - Click to toggle */}
        <List>
          <ListItem button onClick={toggleSapMm}>
            <ListItemText primary="SAP MM" />
            {isSapMmOpen ? <ExpandLessIcon sx={{ color: 'black' }} /> : <ExpandMoreIcon sx={{ color: 'black' }} />}
          </ListItem>
          {isSapMmOpen && (
            <>
              <ListItem button>
                <ListItemText primary="Overview" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Data Sync" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Reports" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Settings" />
              </ListItem>
            </>
          )}
        </List>

        {/* SAP FICO - Click to toggle */}
        <List>
          <ListItem button onClick={toggleSapFico}>
            <ListItemText primary="SAP FICO" />
            {isSapFicoOpen ? <ExpandLessIcon sx={{ color: 'black' }} /> : <ExpandMoreIcon sx={{ color: 'black' }} />}
          </ListItem>
          {isSapFicoOpen && (
            <>
              <ListItem button>
                <ListItemText primary="General Ledger" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Accounts Payable" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Accounts Receivable" />
              </ListItem>
            </>
          )}
        </List>

        {/* SAP SD - Click to toggle */}
        <List>
          <ListItem button onClick={toggleSapSd}>
            <ListItemText primary="SAP SD" />
            {isSapSdOpen ? <ExpandLessIcon sx={{ color: 'black' }} /> : <ExpandMoreIcon sx={{ color: 'black' }} />}
          </ListItem>
          {isSapSdOpen && (
            <>
              <ListItem button>
                <ListItemText primary="Sales Order Management" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Pricing" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Billing" />
              </ListItem>
            </>
          )}
        </List>

        {/* SAP HR - Click to toggle */}
        <List>
          <ListItem button onClick={toggleSapHr}>
            <ListItemText primary="SAP HR" />
            {isSapHrOpen ? <ExpandLessIcon sx={{ color: 'black' }} /> : <ExpandMoreIcon sx={{ color: 'black' }} />}
          </ListItem>
          {isSapHrOpen && (
            <>
              <ListItem button>
                <ListItemText primary="Personnel Management" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Payroll" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Time Management" />
              </ListItem>
            </>
          )}
        </List>

      </Box>
      <Divider />
    </Drawer>
  );
};

export default LeftSidePanel;
