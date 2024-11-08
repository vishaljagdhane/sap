import React, { useContext, useState } from 'react';
import { Box, TextField, Button, InputAdornment, FormHelperText, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { AccountCircle, Lock, CheckCircle, ErrorOutline } from '@mui/icons-material';
import { DataContext } from '../CommanContext/DataProvider'; // Import the context
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import LoginJson from './LoginJson.json'; // Assuming you have multiple users in this file

export default function LoginPages() {
  const { username, setUserName, password, setPassword } = useContext(DataContext); // Access context values
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [openDialog, setOpenDialog] = useState(false); // Dialog state for incorrect login
  const [dialogMessage, setDialogMessage] = useState(''); // Message for the dialog
  const navigate = useNavigate(); // Hook for navigation

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate the form (Username and Password)
  const validateForm = () => {
    let isValid = true;
    // Guard clause: Ensure the username and password are defined before using them
    if (!username || !password) {
      return false; // Return false if username or password is empty
    }

    // Username validation (must be a valid email format)
    if (!emailRegex.test(username.trim())) {
      setUsernameValid(false);
      setUsernameError('Please enter a valid email address.');
      isValid = false;
    } else {
      setUsernameValid(true);
      setUsernameError('');
    }

    // Password validation (must be at least 6 characters)
    if (password.trim().length < 6) {
      setPasswordValid(false);
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    } else {
      setPasswordValid(true);
      setPasswordError('');
    }

    // If form is valid, check user credentials
    if (isValid) {
      const validUser = LoginJson.users.find(
        (user) => user.email === username && user.password === password
      );
      if (validUser) {
        // Reset error and proceed with login
        setUsernameValid(true);
        setPasswordValid(true);
        setDialogMessage('Login Successful!'); // Success message
        setOpenDialog(true); // Open dialog on successful login

        // Redirect based on user role
        if (validUser.role === 'admin') {
          navigate('/admin'); // Redirect to admin page
        } else {
          navigate('/usermodule'); // Redirect to user page
        }
      } else {
        // Show error dialog if credentials are incorrect
        setDialogMessage('You are not registered. Please contact the administrator.');
        setOpenDialog(true);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          margin: '0px auto',
          width: '600px',
          height: 'auto',
          boxShadow: 5,
          bgcolor: '#fafafa',
          top: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 2,
          fontFamily: "'Poppins', sans-serif",
          flexDirection: 'column',
          padding: 3,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            width: '100%',
            height: '100px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
            marginBottom: 2,
            fontWeight: '600',
            fontSize: '20px',
            textTransform: 'uppercase',
          }}
        >
          Login Here
        </Box>

        {/* Form Inputs */}
        <Box sx={{ width: '100%', padding: 2 }}>
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            sx={{ width: '100%', margin: '10px 0' }}
            label="Username"
            variant="outlined"
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {usernameValid ? <CheckCircle sx={{ color: 'green' }} /> : <ErrorOutline sx={{ color: 'red' }} />}
                </InputAdornment>
              ),
            }}
            error={!usernameValid}
          />
          {!usernameValid && <FormHelperText sx={{ color: 'red' }}>{usernameError}</FormHelperText>}

          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            sx={{ width: '100%', margin: '10px 0' }}
            label="Password"
            variant="outlined"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {passwordValid ? <CheckCircle sx={{ color: 'green' }} /> : <ErrorOutline sx={{ color: 'red' }} />}
                </InputAdornment>
              ),
            }}
            error={!passwordValid}
          />
          {!passwordValid && <FormHelperText sx={{ color: 'red' }}>{passwordError}</FormHelperText>}
        </Box>

        {/* Login Button */}
        <Box sx={{ width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', padding: '12px', borderRadius: 2 }}
            onClick={validateForm}
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* Dialog Box for login errors */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <p>{dialogMessage}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
