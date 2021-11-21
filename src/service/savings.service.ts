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

export const getSavingsByUserId = async (uid: string) => {
  const ret = await axios.get(`http://localhost:5000/savings/:${uid}`)

  return ret.data as Savings
}