import axios from "axios";

export interface Income {
  _id?: string;
  incomeAmount: number;
  incomeStream: string;
  incomeFrequency: number;
  updated_at?: Date
  uid?: string
}

export const createIncome = async (income: Income) => {
  await axios.post('http://localhost:5000/income', income)
}

export const getIncomeByUserId = async (jwt: string, uid: string) => {
  const ret = await axios.get(`http://localhost:5000/income/${uid}`, {
    headers: { Authorization: jwt },})

  return ret.data as Income[]
}

