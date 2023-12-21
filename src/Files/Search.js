import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="From" variant="outlined" />
      <TextField id="outlined-basic" label="To" variant="outlined" />
      <TextField
          required
          id="outlined-number"
          label="Depart"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      <TextField
          id="outlined-number"
          label="Return"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
     
      <a href='#'>
      <Button variant="contained" color="success" style={{height:"70px", width:"120px"}}>
        Search
      </Button>
      </a>
    </Box>
  );
}