import { getAuth } from "@firebase/auth"
import axios from "axios"

const API_URL='https://mind-your-money-rest.ue.r.appspot.com/'
// export const API_URL='http://localhost:5000'

export const getClient = async () => {
  const auth = getAuth();
  let headers = {};
  if(auth.currentUser) {
    const jwt = await auth.currentUser.getIdToken();
    headers = {Authorization: jwt}
  }
  
  return axios.create({headers,baseURL: API_URL})
}