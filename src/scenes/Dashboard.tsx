import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { getIncomeByUserId, Income } from "../service/income.service"
import { getExpenseByUserId, Expense } from "../service/expense.service"

export const Dashboard = () => {
  const { user } = useContext(UserContext)
  const [incomeItems, setIncomeItems] = useState<Income[]>()
  const [totalIncome, setTotalIncome] = useState<number>(0)
  const [expenseItems, setExpenseItems] = useState<Expense[]>()
  const [totalExpense, setTotalExpense] = useState<number>(0)
  useEffect(() => {
        getIncomeByUserId()
        .then(setIncomeItems)
  }, [])
  // TODO: useEffects for JWT, expenses, goals, etc.
  useEffect(() => { 
    if (incomeItems && incomeItems.length) {
      setTotalIncome(
        incomeItems.reduce(
          (totalIncome, income) =>
            totalIncome + income.incomeAmount * income.incomeFrequency,
          0
        )
      )
    }
  }, [incomeItems])
  useEffect(() => {
        getExpenseByUserId()
        .then(setExpenseItems)
  }, [])
  useEffect(() => { 
    if (expenseItems && expenseItems.length) {
      setTotalExpense(
        expenseItems.reduce(
          (totalExpense, expense) =>
          totalExpense + expense.expenseAmount,
          0
        )
      )
    }
  }, [expenseItems])
  if (!incomeItems) {
    return <>...loading</>
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Net Income: {totalIncome - totalExpense}</h2>
      <h2>Monthly Burn Rate: {(totalExpense/totalIncome) * 100}%</h2>
    </>
  )
}

/* 
Math TODO with this data:
- Net Monthly: totalincome - totalexpenses
- Net Monthly + totalSavings
- Burn Rate: expenses/revenues as a %
- Trajecotry to reach all goals: totalGoals/
Need: Total Goals && Total Savings
*/
