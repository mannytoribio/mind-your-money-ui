import React, {
  useState
} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FinancialValues from '../components/FinancialValues'
import { createIncome, Income } from '../service/income.service';



const steps = [
  {
    label: 'Income & Savings',
    description: `Add the name, amount, and frequency of payment for any income stream(s) that you may have.
                  Add your total savings.`,
  },
  {
    label: 'Expenses',
    description:
      'Add all recurring expenses.',
  },
  {
    label: 'Goal',
    description: `Add the name, cost, and deadline of your financial goal.`,
  },
];

export default function Financials() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [income, setIncome] = useState<Income>({
    incomeStream: 'Job 1', 
    incomeAmount: 0,
    incomeFrequency: 2
  })

  const handleNext = async (e: any) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // if(steps.length - 1) {
    //   // submit all my data to the database;
    //   e.preventDefault()
    //   setIncome(e.target.value)
    //   try{
    //     await createIncome(income)
    //     console.log('It worked')
    //     // await create expenses and goals
    //   } catch (err) {
    //     alert(err)
    //   }
    // }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const handleSubmit = async (e: any) => {
    if(steps.length - 1) {
      // submit all my data to the database;
      e.preventDefault()
      setIncome(e.target.value)
      try{
        await createIncome(income)
        console.log('It worked')
        // await create expenses and goals
      } catch (err) {
        alert(err)
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }} display="flex">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <FinancialValues children activeStep={activeStep} income={income} setIncome={setIncome}  /> 
              {/* <FinancialValues children={[income, setIncome, activeStep]: Props}/>  */}
              {/* pass in state setState for each above */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleSubmit} sx={{ mt: 1, mr: 1 }}>
            Submit
          </Button>
        </Paper>
      )}
    </Box>
  );
}

