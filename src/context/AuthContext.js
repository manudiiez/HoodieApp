import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth} from 'firebase/auth'
import { collection, getFirestore, setDoc,doc, getDoc } from "firebase/firestore";


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState('');
    const [rol, setRol] = useState(false);
    const [loading, setLoading] = useState(true);

    const auth = getAuth()
    const db = getFirestore()

    const signup = async(email, password) => 
        createUserWithEmailAndPassword(auth, email, password);   


    const getRol = async(uid) => {
        console.log(uid)
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(uid, 'si existe')
            setRol(true)
            setLoading(false)
        } else {
            // doc.data() will be undefined in this case
            console.log('el documento no existe')
            setRol(false)
            setLoading(false)
        }
    }

    const signin = async(email, password) => 
        signInWithEmailAndPassword(auth, email, password);
        
    const logout = () => signOut(auth)

    useEffect(() => {
        const viewUser = async() => {
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                if(currentUser){
                    getRol(currentUser.uid)
                }else{
                    setLoading(false)
                }
                
            })

        }
        viewUser()
    },[])

    
    return(
        <authContext.Provider value={{ signup, signin, user, logout, loading, rol }}>
            {children}
        </authContext.Provider>
    )
}