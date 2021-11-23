import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { getIncomeByUserId, Income } from "../service/income.service"
import { getExpenseByUserId, Expense } from "../service/expense.service"
import { getSavingsByUserId, Savings } from "../service/savings.service"
import { getGoalByUserId, Goal } from "../service/goal.service"

export const Dashboard = () => {
  const { user } = useContext(UserContext)
  const [incomeItems, setIncomeItems] = useState<Income[]>()
  const [totalIncome, setTotalIncome] = useState<number>(0)
  const [expenseItems, setExpenseItems] = useState<Expense[]>()
  const [totalExpense, setTotalExpense] = useState<number>(0)
  const [savingsItems, setSavingsItems] = useState<Savings[]>()
  const [totalSavings, setTotalSavings] = useState<number>(0)
  const [goalItems, setGoalItems] = useState<Goal[]>()
  const [totalGoals, setTotalGoals] = useState<number>(0)
  useEffect(() => {
    getIncomeByUserId().then(setIncomeItems)
  }, [])
  useEffect(() => {
    if (incomeItems && incomeItems.length) {
      setTotalIncome(
        incomeItems.reduce((totalIncome, income) => {
          return totalIncome + income.incomeAmount * income.incomeFrequency
        }, 0)
      )
    }
  }, [incomeItems])
  useEffect(() => {
    getExpenseByUserId().then(setExpenseItems)
  }, [])
  useEffect(() => {
    if (expenseItems && expenseItems.length) {
      setTotalExpense(
        expenseItems.reduce(
          (totalExpense, expense) => totalExpense + expense.expenseAmount,
          0
        )
      )
    }
  }, [expenseItems])
  useEffect(() => {
    getSavingsByUserId().then(setSavingsItems)
  }, [])
  useEffect(() => {
    if (savingsItems && savingsItems.length) {
      setTotalSavings(
        savingsItems.reduce(
          (totalSavings, savings) => totalSavings + savings.savingsAmount,
          0
        )
      )
    }
  }, [savingsItems])
  useEffect(() => {
    getGoalByUserId().then(setGoalItems)
  }, [])
  useEffect(() => {
    if (goalItems && goalItems.length) {
      setTotalGoals(
        goalItems.reduce((totalGoals, goal) => totalGoals + goal.goalCost, 0)
      )
    }
  }, [goalItems])
  const netMonthlyIncome = totalIncome - totalExpense
  if (!incomeItems) {
    return <>...loading</>
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Net Income: {totalIncome - totalExpense}</h2>
      <h2>Monthly Burn Rate: {(totalExpense / totalIncome) * 100}%</h2>
      <h2>Net Yearly: {(totalIncome - totalExpense)* 12 + totalSavings}</h2>
      <h2>
        Trajectory to Goals: {totalGoals / (totalIncome - totalExpense)} Months to Reach all
        Goals!
      </h2>
    </>
  )
}

/* 
Math TODO with this data:
- Net Monthly: totalincome - totalexpenses CHECK
- Burn Rate: expenses/revenues as a % CHECK
- Net Yearly: Net Monthly * 12 + totalSavings
- Trajecotry to reach all goals: totalGoals/netMonthly
Need: Total Goals && Total Savings
*/
