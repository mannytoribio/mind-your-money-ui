import { useState, useEffect } from "react"
import { getIncomeByUserId, Income } from "../service/income.service"
import { getExpenseByUserId, Expense } from "../service/expense.service"
import { getSavingsByUserId, Savings } from "../service/savings.service"
import { getGoalByUserId, Goal } from "../service/goal.service"
import MonthlyBurn from "../components/MonthlyBurnRate"
import Divider from "@mui/material/Divider"
import "./dashboard.css"

export const Dashboard = () => {
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
  if (!incomeItems) {
    return <>...loading</>
  }
  return (
    <>
      <div>
        <div style={{ padding: "20px" }}>
          <h1>Dashboard</h1>
        </div>
        <Divider />
        <div className="split">
          <div className="ColumnContainer split left">
            <div>
              <h1>Net Income: {totalIncome - totalExpense}</h1>
            </div>
            <Divider />
            <div>
              <h1>
                Net Yearly: {(totalIncome - totalExpense) * 12 + totalSavings}
              </h1>
            </div>
            <Divider />
            <div>
              <h1>
                Trajectory to Goals:
                {Math.ceil(totalGoals / (totalIncome - totalExpense))} Month(s)
                to Reach all Goals!
              </h1>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className="split right">
            <h1>Monthly Burn Rate:</h1>
            <MonthlyBurn value={(totalExpense / totalIncome) * 100} />{" "}
          </div>
        </div>
      </div>
    </>
  )
}
