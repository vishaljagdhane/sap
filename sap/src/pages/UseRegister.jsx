import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { InputAdornment } from '@mui/material';
import { useState } from 'react';
import { Password } from '@mui/icons-material';

export default function UseRegister() {

    const [postRegister,setPostRegister]=useState({fname:'',lname:'',email:'',mobile:'',Password:''})

    const OnGettingData =(e)=>{
        setPostRegister({...postRegister,[e.target.name]:e.target.value})
        console.log(postRegister)

    }
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          margin: '0px auto',
          width: '600px',
          minHeight: '500px', // Adjust the box height
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
          value = {postRegister.fname}
          onChange ={OnGettingData}
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
    </>
  );
}
