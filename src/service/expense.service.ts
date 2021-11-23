import { getClient } from "./getClient";

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
  const client = await getClient();
  await client.post('/expense', expense)
}

export const getExpenseByUserId = async () => {
  const client = await getClient();
  const ret = await client.get(`/expense`)

  return ret.data as Expense[]
}