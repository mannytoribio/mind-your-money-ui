import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth"
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom"
import GoogleButton from 'react-google-button'

const provider = new GoogleAuthProvider()

export default function Login() {
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
    <div>
      <Card
        style={{
          // padding: '75px',
          backgroundColor: 'white',
          opacity: 0.9, 
          margin: '10% auto',
          borderRadius: '16px',
          minHeight: '180px',
          maxWidth: '240px'
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            color="#202020"
            style={{ textAlign: 'center', fontSize: '1.5em', fontStyle: 'italic', fontFamily: 'Roboto' }}
          >
            Start Minding Your Money
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <GoogleButton
            type="light"
            onClick={handleLogin}
          />
        </CardActions>
      </Card>
    </div>
  );
}