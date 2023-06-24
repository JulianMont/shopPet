import { createContext, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../services/firebase"


export const userContext = createContext({ user: {
    email: "",
    password: "",
} })

export function UserContextProvider({ children }) {
  
  const [user, setUser] = useState({})

  async function createUser({email,password}) {
    
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setUser({email,password})
    } catch (error) {
      return(error.message)
    }
    
  }

  

  async function logInUser({email,password}) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUser({email,password})
    } catch (error) {
      return(error.message)
    }
  }
  
  async function logOut() {
    setUser({})
  }

  return (
    <userContext.Provider value={{user,setUser,createUser,logInUser,logOut}}>
      {children}
    </userContext.Provider>
  )
} 
