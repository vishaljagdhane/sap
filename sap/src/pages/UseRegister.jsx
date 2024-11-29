import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { InputAdornment } from '@mui/material';
import ApiServices from '../APIServises/ApiServices';

export default function UseRegister() {
  const { UserRegisterPostApi } = ApiServices(); // Import the API function
  const [postRegister, setPostRegister] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    password: '', // Ensure this matches the field in your backend schema
  });

  // Handle form input change
  const OnGettingData = (e) => {
    setPostRegister({
      ...postRegister,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (send user data to backend)
  const PostUserData = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
      // Pass postRegister data to UserRegisterPostApi function
      const response = await UserRegisterPostApi(postRegister); // Pass postRegister as an argument
      console.log('Registration successful:', response);
      alert('Registration Successful. You can now login.');
      setPostRegister({fname:'',lname:'',email:'',mobile:'',password:''})
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
      setPostRegister({fname:'',lname:'',email:'',mobile:'',password:''})
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        margin: '0px auto',
        width: '600px',
        minHeight: '500px',
        boxShadow: 5,
        bgcolor: '#fafafa',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        fontFamily: "'Poppins', sans-serif",
        flexDirection: 'column',
        padding: 3,
      }}
    >
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
        <h5>User Register</h5>
      </Box>
      
      <Box sx={{ width: '100%', padding: 2 }}>
        <TextField
          sx={{ width: '100%', margin: '10px 0' }}
          label="First Name"
          variant="outlined"
          autoComplete="off"
          name="fname"
          value={postRegister.fname}
          onChange={OnGettingData}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: '100%', margin: '10px 0' }}
          label="Last Name"
          name="lname"
          value={postRegister.lname}
          onChange={OnGettingData}
          variant="outlined"
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: '100%', margin: '10px 0' }}
          label="Email"
          variant="outlined"
          name="email"
          value={postRegister.email}
          onChange={OnGettingData}
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: '100%', margin: '10px 0' }}
          label="Mobile Number"
          variant="outlined"
          name="mobile"
          value={postRegister.mobile}
          onChange={OnGettingData}
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: '100%', margin: '10px 0' }}
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={postRegister.password}
          onChange={OnGettingData}
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      
      <Box sx={{ width: '100%' }}>
        <Button
          onClick={PostUserData}  // Call the function to post user data
          variant="contained"
          color="primary"
          sx={{
            width: '100%',
            padding: '12px',
            borderRadius: 2,
          }}
        >
          Register Now
        </Button>
      </Box>
    </Box>
  );
}
