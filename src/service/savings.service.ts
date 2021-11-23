import { getClient } from "./getClient";

export interface Savings {
  _id?: string;
  savingsAmount: number;
  updated_at?: Date;
  uid?: string
}

export const createSavings = async (savings: Savings) => {
  const client = await getClient();
  await client.post('/savings', savings)
}

export const getSavingsByUserId = async () => {
  const client = await getClient();
  const ret = await client.get(`/savings`)

  return ret.data as Savings[]
}