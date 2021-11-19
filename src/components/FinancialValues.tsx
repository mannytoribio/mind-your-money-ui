import { Dispatch, ReactNode, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Income } from '../service/income.service';
import { Expense } from '../service/expense.service';
import { Goal } from '../service/goal.service';

type Props = {
  activeStep: number;
  income: Income;
  setIncome: Dispatch<SetStateAction<Income>>;
  expense: Expense;
  setExpense: Dispatch<SetStateAction<Expense>>;
  goal: Goal;
  setGoal: Dispatch<SetStateAction<Goal>>;
  children: ReactNode | ReactNode[];
}



export default function FinancialValues({activeStep, income, setIncome, expense, setExpense, goal, setGoal}: Props) {
  const handleIncome = async (e: any, key: string) => {
    e.preventDefault()
    setIncome({ ...income, [key]: e.target.value })
  }
  const handleExpense = async (e: any, key: string) => {
    e.preventDefault()
    setExpense({ ...expense, [key]: e.target.value })
  }
  const handleGoal = async (e: any, key: string) => {
    e.preventDefault()
    setGoal({ ...goal, [key]: e.target.value })
  }
  return (
    <>
    {activeStep === 0 && 
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
              // defaultValue="Job 1"
              value={income.incomeStream}
              onChange={e => handleIncome(e, 'incomeStream')}
              variant="filled"
            />
            <TextField
              label="Income Amount"
              type="number"
              // defaultValue="2500"
              value={income.incomeAmount}
              onChange={e => handleIncome(e, 'incomeAmount')}
              // helperText="Enter Income stream title and amount."
              variant="filled"
            />
            <TextField
              label="Monthly Frequency"
              type="number"
              // defaultValue="2"
              value={income.incomeFrequency}
              onChange={e => handleIncome(e, 'incomeFrequency')}
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
    }
    {activeStep === 1 &&
      <Box
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
          value={expense.expenseDescription}
          onChange={e => handleExpense(e, 'expenseDescription')}
          variant="filled"
        />
        <TextField
          label='Monthly Cost'
          value={expense.expenseAmount}
          onChange={e => handleExpense(e, 'expenseAmount')}
          helperText="'$' Not Needed."
          variant="filled"
        />
      </div>
    </Box>
    }
    {activeStep === 2 && 
      <Box
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
          variant="filled"
        />
      </div>
    </Box> 
    }
    </>
  );
}