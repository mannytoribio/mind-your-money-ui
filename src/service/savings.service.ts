import axios from "axios";

export interface Savings {
  _id?: string;
  savingsAmount: number;
  updated_at?: Date;
  uid?: string
}

export const createSavings = async (savings: Savings) => {
  await axios.post('http://localhost:5000/savings', savings)
}

export const getSavingsById = async (_id: string) => {
  const ret = await axios.get(`http://localhost:5000/savings/:${_id}`)

  return ret.data as Savings
}