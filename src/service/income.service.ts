import axios from "axios";
import { getClient } from "./getClient";

export interface Income {
  _id?: string;
  incomeAmount: number;
  incomeStream: string;
  incomeFrequency: number;
  updated_at?: Date
  uid?: string
}

export const createIncome = async (income: Income) => {
  const client = await getClient();
  await client.post('/income', income)
}

export const getIncomeByUserId = async () => {
  const client = await getClient();
  const ret = await client.get(`/income`)
  return ret.data as Income[]
}

