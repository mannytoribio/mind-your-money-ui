import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth"
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


const provider = new GoogleAuthProvider()

export default function Navbar() {
  const { user, setUser } = useContext(UserContext)
  const handleLogin = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
      })
      .catch(err => err.message)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background: 'green'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MIND YOUR MONEY
          </Typography>
          <Button color="inherit" onClick={handleLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}