import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FinacialsFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}
    >
      <div>
        <TextField
          label="Name"
          defaultValue="Name"
          variant="filled"
        />
        <TextField
          label="Email"
          type="email"
          defaultValue="example@email.com"
          helperText="Enter Valid Email Address."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label='Monthly Income'
          defaultValue="$100,000"
          variant="filled"
        />
        <TextField
          label='Monthly Expenses'
          defaultValue="$4,000"
          helperText="'$' Not Needed."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="Goal"
          defaultValue="ex. Vacation to Italy"
          variant="filled"
        />
        <TextField
          label="Cost of Goal"
          defaultValue="ex. $5,000"
          helperText="'$' Not Needed"
          variant="filled"
        />
      </div>
    </Box>
  );
}