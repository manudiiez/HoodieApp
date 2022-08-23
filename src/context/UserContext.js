import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const UserContext = createContext({});


const UserProvider = ({children}) => {

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(uid)
              console.log('si hay usuario')
              // ...
            } else {
              // User is signed out
              // ...
              console.log('No hay usuario')
            }
        });
    },[])

    return (
        <UserContext.Provider value={{ 
            
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider