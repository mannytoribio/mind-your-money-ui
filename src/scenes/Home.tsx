import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth"

const provider = new GoogleAuthProvider()

export const Home = () => {
  

  
  return (
    <> 
      <h1>Home</h1>
      <button>Login</button>
    </>
  )
}