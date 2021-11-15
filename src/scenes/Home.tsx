import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const provider = new GoogleAuthProvider()

export const Home = () => {
  const { user, setUser } = useContext(UserContext)
  let navigate = useNavigate()
  const handleLogin = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
      })
      .catch(err => err.message)
  }
  useEffect(() => {
    console.log(user)
    if(user) {
      navigate('/financials')
    }
  }, [user])
  
  return (
    <> 
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}