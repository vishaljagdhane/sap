import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, TextField, InputAdornment, Avatar, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'  // Import CloseIcon
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'

export default function TopBar({ toggleLeftPanel }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false) // State to track left panel status

  // Handle user icon click
  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // Handle user menu close
  const handleUserMenuClose = () => {
    setAnchorEl(null)
  }

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  // Toggle the left panel and change the icon (Menu or Close)
  const handleMenuIconClick = () => {
    setIsLeftPanelOpen((prevState) => !prevState)
    toggleLeftPanel() // This will toggle the actual left panel visibility
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left Side Menu Icon - Toggle between MenuIcon and CloseIcon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenuIconClick} // Toggle panel and icon
        >
          {isLeftPanelOpen ? <CloseIcon /> : <MenuIcon />} {/* Conditional rendering of the icon */}
        </IconButton>

        {/* Company Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Company
        </Typography>

        {/* Search TextField with Search Icon */}
        <TextField
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          sx={{
            backgroundColor: 'white',
            borderRadius: 1,
            marginRight: 2,
            width: 200,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* User Avatar Icon */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleUserMenuClick}
          aria-label="user"
        >
          <Avatar sx={{ width: 30, height: 30 }} />
        </IconButton>

        {/* User Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleUserMenuClose}
        >
          <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
