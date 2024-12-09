import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, InputAdornment, Snackbar, Alert } from '@mui/material';
import { Email, Lock } from '@mui/icons-material'; // Import icons
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../CommanContext/AuthProvider';


export default function SimpleLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error'); // Can be 'success' or 'error'

  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from context

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);
    setError('');
    setSnackbarMessage('');
    setSnackbarSeverity('error');
    
    try {
      const response = await axios.post('http://localhost:4100/api/LoginUser', {
        username,
        password,
      });

      console.log('Login successful:', response.data);
      
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // Set the authentication status to true in context
      login();
      
      // Navigate to the Admin Dashboard after successful login
      navigate('/admin-dashabord');
      
      // Clear the form after successful login
      setUsername('');
      setPassword('');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.error || 'Login failed');
      } else {
        setError('An error occurred. Please try again.');
      }
      setSnackbarMessage(error.response?.data?.error || 'Login failed');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ width: '600px', margin: '100px auto', padding: '20px', boxShadow: 3, borderRadius: 2, backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Login</h2>
      <TextField
        label="Username (Email or Mobile)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <Email />
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={error}
        error={!!error}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <Lock />
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={error}
        error={!!error}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
