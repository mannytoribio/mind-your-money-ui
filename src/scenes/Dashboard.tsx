import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { getIncomeByUserId, Income } from "../service/income.service"

export const Dashboard = () => {
  const { user } = useContext(UserContext)
  const [incomeItems, setIncomeItems] = useState<Income[]>()
  const [totalIncome, setTotalIncome] = useState<number>(0)
  useEffect(() => {
    if (user) {
      user
        .getIdToken()
        .then((jwt) => getIncomeByUserId(jwt, user.uid))
        .then(setIncomeItems)
    }
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
  if (!incomeItems) {
    return <>...loading</>
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h2>{totalIncome}</h2>
    </>
  )
}
