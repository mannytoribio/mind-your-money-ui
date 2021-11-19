import axios from "axios";

export interface Expense {
  _id?: string;
  expenseDescription: string;
  expenseCategory?: string;
  expenseAmount: number;
  expenseFrequency?: number;
  updated_at?: Date;
  uid?: string
}

export const createExpense = async (expense: Expense) => {
  await axios.post('http://localhost:5000/expense', expense)
}

export const getExpenseByIncome = async (_id: string) => {
  const ret = await axios.get(`http://localhost:5000/expense/:${_id}`)

  return ret.data as Expense
}