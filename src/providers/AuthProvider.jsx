// import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import app from '../firebase/firebase.config';

// const auth=getAuth(app);
// export const AuthContext=createContext(null)

// const AuthProvider = ({children}) => {
//     const [user,setUser]=useState(null);
//     const [loading,setLoading]=useState(true);

//     const createUser=(email,password)=>{
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth,email,password)
//     }
//     const signIn=(email,password)=>{
//         setLoading(true)
//         return signInWithEmailAndPassword(auth,email,password)
//     };

//     const logOut=()=>{
//         setLoading(true)
//         return signOut(auth)
//     }

//     useEffect(()=>{
//         const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
//             console.log("Logged in user inside auth state observer",loggedUser);
//             setUser(loggedUser)
//             setLoading(false);
//         })
//         return ()=>{
//             unsubscribe();
//         }
//     },[])
//     const authInfo={
//         user,
//         loading,
//         createUser,
//         signIn,
//         logOut
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = 'null';

    const authInfo = {
        user
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;