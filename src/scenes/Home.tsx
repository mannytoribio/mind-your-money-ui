import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth"
import { red } from "@mui/material/colors"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import { UserContext } from "../context/UserContext"
import Login from "../components/Login"
import "./home.css"

const provider = new GoogleAuthProvider()

export const Home = () => {
  return (
    <>
      <div className="ParentContainer">
        <div className="BodyContainer">
          <div className="HeroContainer">
            <div className="BenefitsContainer BenefitsBox">
            Personal Finance Made Simple.
            <video autoPlay muted loop className="VideoBox">
              <source src="financeCalculation.mp4" type="video/mp4"/>
            </video>
            Know Your Numbers.
            Set Your Goals.
            Start Your Journey.
            </div>
            <div className="LoginContainer">
              <Login/>
            </div>
          </div>
          <div className="TestimonialContainer">
            <div className="Testimonial TestimonialBox">"Most money apps have too much going on for me." <br/> - Judy</div>
            <div className="Testimonial TestimonialBox">"Sometimes I'd rather not know than to look at my account." <br/> - Emmanuel</div>
            <div className="Testimonial TestimonialBox">"You can't hit goals that you haven't set!" <br/> - Chris</div>
          </div>
        </div>
        <div className="FooterContainer">Mind Your Money © 2021</div>
      </div>
    </>
  )
}
