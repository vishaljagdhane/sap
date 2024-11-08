import React, { useState } from 'react'
import TopBar from './TopBar'

import { Box } from '@mui/material'
import LeftSidePanel from './LeftSideBar'

export default function AdminDashboard() {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false)

  // Toggle the left panel open/close
  const toggleLeftPanel = () => {
    setIsLeftPanelOpen((prevState) => !prevState)
  }

  return (
    <>
      <Box sx={{ width: '100%', height: '100vh', display: 'flex' }}>
        
        {/* Left Side Panel - Positioned to the left side and takes 15% width */}
        <Box
          sx={{
            width: isLeftPanelOpen ? '15%' : '0', // Open panel takes 15%, closed is 0
            transition: 'width 0.3s ease', // Smooth transition for width change
            flexShrink: 0, // Prevent shrinking
          }}
        >
          <LeftSidePanel open={isLeftPanelOpen} />
        </Box>

        {/* Main Content Area - Takes full width minus the Left Panel width */}
        <Box
          sx={{
            width: isLeftPanelOpen ? '85%' : '100%', // Adjust width based on panel state
            transition: 'width 0.3s ease', // Smooth transition for content width
            marginLeft: isLeftPanelOpen ? '3%' : '0', // Move content to the right when panel opens
            display:'block', //
          }}
        >
          {/* Top Bar (Always visible on top) */}
          <TopBar toggleLeftPanel={toggleLeftPanel} />
        </Box>

      </Box>
    </>
  )
}
