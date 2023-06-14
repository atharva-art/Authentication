import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Login() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Login</h1>
      <TextField required id="outlined-required" label="Email" />
      <br/>
      <TextField required id="outlined-required" label="Password" />
      <br/><br/>
      <Button variant="contained">Login</Button>
    </Box>
  );
}

export default Login;
