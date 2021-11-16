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
          label="Income Stream"
          defaultValue="Job 1"
          variant="filled"
        />
        <TextField
          label="Income Amount"
          type="number"
          defaultValue="2500"
          // helperText="Enter Income stream title and amount."
          variant="filled"
        />
        <TextField
          label="Monthly Frequency"
          type="number"
          defaultValue="2"
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