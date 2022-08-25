import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const UserContext = createContext({});


const UserProvider = ({children}) => {

    const auth = getAuth();

    const [userFirebase, setUserFirebase] = useState(null);

    const checkUserState = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user;
              console.log(uid)
              console.log('si hay usuario')
              const newUser = {
                email: uid.email,
                password: uid.uid,
              } 

              setUserFirebase(newUser)
              // ...
            } else {
              // User is signed out
              // ...
              setUserFirebase(null)
            }
        });
    }

    useEffect(() => {
        checkUserState()
    },[])

    return (
        <UserContext.Provider value={{ 
            userFirebase,
            checkUserState
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider