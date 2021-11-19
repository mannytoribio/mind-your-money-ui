import axios from "axios";

export interface Goal {
  _id?: string;
  goalName: string;
  goalCost: number;
  goalDeadline: Date;
  updated_at?: Date;
  uid?: string
}

export const createExpense = async (goal: Goal) => {
  await axios.post('http://localhost:5000/goal', goal)
}

export const getGoalById = async (_id: string) => {
  const ret = await axios.get(`http://localhost:5000/goal/:${_id}`)

  return ret.data as Goal
}