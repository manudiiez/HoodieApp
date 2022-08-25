import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth} from 'firebase/auth'

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth()

    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);    

    const signin = async(email, password) => 
        signInWithEmailAndPassword(auth, email, password);
        
    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    },[])

    
    return(
        <authContext.Provider value={{ signup, signin, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}