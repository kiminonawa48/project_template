import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../config/firebase"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function ProvideAuth({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = async () => {
        return await auth.signOut()
            .then(() => {
                console.log('signout successfully.');
            })
            .catch(err => {
                console.error('err: ', err);
            })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userFirebaseAuth => {

            // if (userFirebaseAuth) {
            //     userFirebaseAuth.getIdToken().then((tokenId) => {

            //         fetch('http://localhost:3000/check-login/info', {
            //             method: "POST",
            //             headers: { "Authorization": `Bearer ${tokenId}` }
            //         }).then(res => res.json())
            //             .then(res => {
            //                 if (res.status === 200) {
            //                     setTokenAuthLogin(tokenId)
            //                     setCurrentUser(userFirebaseAuth)
            //                 } else {
            //                     setCurrentUser()
            //                     console.log("401 (Unauthorized)");
            //                 }
            //             })
            //     });
            // }

            setCurrentUser(userFirebaseAuth)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}