import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import { UserContext } from "../context/UserContext"

const provider = new GoogleAuthProvider()

export const Home = () => {
  const { user } = useContext(UserContext)
  let navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate("/financials")
    }
  }, [user])

  return (
    <>
      <Navbar />
      <div
        className="hero-section"
        style={{ height:600, backgroundSize: "cover", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/personalfinance.jpeg)` }}
      >
        <h1>Personal Finance Shouldn't be a Headache</h1>
        <h2>Set Your Goals</h2>
        <h2>See Your Path</h2>
        <h2>Start Your Journey</h2>
      </div>
    </>
  )
}
