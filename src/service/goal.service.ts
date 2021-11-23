import { getClient } from "./getClient"

export interface Goal {
  _id?: string;
  goalName: string;
  goalCost: number;
  goalDeadline: Date;
  updated_at?: Date;
  uid?: string
}

export const createGoal = async (goal: Goal) => {
  const client = await getClient();
  await client.post('/goal', goal)
}

export const getGoalByUserId = async () => {
  const client = await getClient();
  const ret = await client.get(`/goal`)

  return ret.data as Goal[]
}