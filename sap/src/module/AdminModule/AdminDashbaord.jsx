import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopBar from './TopBar';
import LeftSideBar from './LeftSideBar';
import DashbordComponent from '../../Component/DashbordComponent';

export default function AdminDashboard() {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');// State for the content

  // Handle menu item click in the sidebar
  const handleMenuItemClick = (menuItem) => {
    setActiveItem(menuItem); // Set the content based on clicked menu item
  };

  // Function to render content based on the selected menu
  const renderContent = () => {
    switch (activeItem) {
      case 'home':
        return <DashbordComponent/>;
      case 'button':
        return <h1>Button</h1>;
      case 'editCompany':
        return <h1>Edit Company</h1>;
      case 'searchMaterials':
        return <h1>Search Materials</h1>;
      case 'createPurchaseRequisition':
        return <h1>Create Purchase Requisition</h1>;
      case 'vendorManagement':
        return <h1>Vendor Management</h1>;
      default:
        return <h1>Work in progress</h1>;
    }
  };


  const toggleLeftPanel = () => {
    setIsLeftPanelOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', overflow: 'hidden' }}>
      {/* Left Side Panel - Positioned to the left side and takes 15% width */}
      <Box
        sx={{
          width: isLeftPanelOpen ? '15%' : '0',
          transition: 'width 0.3s ease',
          flexShrink: 0,
        }}
      >
        <LeftSideBar open={isLeftPanelOpen} onMenuItemClick={handleMenuItemClick}  activeItem={activeItem}/>
      </Box>

      {/* Main Content Area - Takes full width minus the Left Panel width */}
      <Box
        sx={{
          width: isLeftPanelOpen ? '85%' : '100%',
          transition: 'width 0.3s ease',
          marginLeft: isLeftPanelOpen ? '3%' : '0',
          display: 'block',
          overflow: 'hidden', // Prevent overflow here
          boxSizing: 'border-box', // Ensure padding does not cause overflow
          ml:0
        }}
      >
        {/* Top Bar (Always visible on top) */}
        <Box sx={{position:'relative',zIndex:1}}>
        <TopBar toggleLeftPanel={toggleLeftPanel} />
        </Box>
        {/* Main Content Box */}
        <Box
          sx={{
            position: 'relative',
            top:-1,
            zIndex:0,
            padding: '2px',
            width: '100%',
            height: 'calc(100vh - 50px)', // Adjust height to prevent overflow
            bgcolor: '#fffff',
            boxSizing: 'border-box',
            overflowY: 'auto', // Allow vertical scrolling if content overflows
          }}
        >
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}
