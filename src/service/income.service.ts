import axios from "axios";

export interface Income {
  _id?: string;
  incomeStream: string;
  incomeAmount: number;
  incomeFrequency: number;
  updated_at?: Date
  uid?: string
}

export const createIncome = async (income: Income) => {
  await axios.post('http://localhost:5000/income', income)
}

export const getIncomeById = async (_id: string) => {
  const ret = await axios.get(`http://localhost:5000/income/:${_id}`)

  return ret.data as Income
}

