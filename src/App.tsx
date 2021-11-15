import { BrowserRouter as Router,
Routes, 
Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { initializeApp } from 'firebase/app'
import { createTheme, CssBaseline } from '@mui/material'
import { Home } from './scenes/Home'
import './App.css'
import { UserContextProvider } from './context/UserContext'
import { AnonRoute } from './components/AnonRoute'
import { AuthRoute } from './components/AuthRoute'

const firebaseConfig = {
  apiKey: "AIzaSyDWW7bh5I9sXZl6uzBST5TzntzSBhdQe9E",
  authDomain: "mind-your-money-webapp.firebaseapp.com",
  projectId: "mind-your-money-webapp",
  storageBucket: "mind-your-money-webapp.appspot.com",
  messagingSenderId: "242308773810",
  appId: "1:242308773810:web:fa8fab2398c1f166db16ab"
}

const app = initializeApp(firebaseConfig)

function App() {
  const theme = createTheme({
    palette: { mode: 'dark',
}
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <UserContextProvider>
          <Routes>
            <Route 
              path='/home'
              element={
                <AnonRoute>
                  <Home /> 
                {/* Home will only appear to those !loggedin, in order to return you must logout */}
                </ AnonRoute>}
            />
            {/* <Route 
              path='/dashboard'
              element={
                <AuthRoute>
                  <Dashboard /> 
                    Dash will only appear to those loggedin 
                </ AuthRoute>}
            /> */}
          </Routes>
        </UserContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App
