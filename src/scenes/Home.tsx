import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth"
import { red } from "@mui/material/colors"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import Hero from "../components/Hero"
import { UserContext } from "../context/UserContext"
import { GoogleLogin } from 'react-google-login';
import "./home.css"

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
    if (user) {
      navigate("/financials")
    }
  }, [user])

  return (
    <>
      <Navbar />
      <div className="ContainerContainer">
        <div className="BodyContainer">
          <div className="HeroContainer">
            <div className="BenefitsContainer BenefitsBox">Benefits
            <br/>Know Your Numbers
            <br/>Set Your Goals
            <br/>Start Your Journey
            </div>
            <div className="LoginContainer LoginBox">Click Here to Login</div>
          </div>
          <div className="TestimonialContainer">
            <div className="Testimonial TestimonialBox">"Money apps have too much going on for me." - Judy Ulrich</div>
            <div className="Testimonial TestimonialBox">"Sometimes I'd rather not know than to look at my account." - Emmanuel Sanchez</div>
            <div className="Testimonial TestimonialBox">"You can't hit goals that you haven't set!" - Chris Taliaferro</div>
          </div>
        </div>
        <div className="FooterContainer">Mind Your Money © 2021</div>
      </div>
    </>
  )
}
