import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
  activeStep: Number;
}

export default function FinancialValues({activeStep}: Props) {
  switch (activeStep) {
    case 0:
      return <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}
    >
      <div className="income_savings">
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
        <TextField
          label="Total Savings"
          type="number"
          defaultValue="5000"
          variant="filled"
        />
      </div>
    </Box>
    case 1:
      return <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}
    >
      <div className="expenses">
        <TextField
          label='Expense Name'
          defaultValue="Rent"
          variant="filled"
        />
        <TextField
          label='Monthly Cost'
          defaultValue="$2,000"
          helperText="'$' Not Needed."
          variant="filled"
        />
      </div>
    </Box>
    case 2:
      return <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}
    >
      <div className="goal">
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
        <TextField
          label="Target Date"
          type="Date"
          defaultValue="01/01/2022"
          variant="filled"
        />
      </div>
    </Box>
  }
  
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
      <div className="income_savings">
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
        <TextField
          label="Total Savings"
          type="number"
          defaultValue="5000"
          variant="filled"
        />
      </div>
      <div className="expenses">
        <TextField
          label='Expense Name'
          defaultValue="Rent"
          variant="filled"
        />
        <TextField
          label='Monthly Cost'
          defaultValue="$2,000"
          helperText="'$' Not Needed."
          variant="filled"
        />
      </div>
      <div className="goal">
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
        <TextField
          label="Target Date"
          type="Date"
          defaultValue="ex. $5,000"
          variant="filled"
        />
      </div>
    </Box>
  );
}