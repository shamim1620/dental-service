import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Home/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);
    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoding(false));
    }
    //obsarve user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoding(false);
        });
        return () => unsubscribe;
    }, [])

    const loginUser = () => {
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoding(false));
    }

    const logout = () => {
        setIsLoding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoding(false));

    }

    return {
        user,
        isLoding,
        registerUser,
        loginUser,
        logout,
    }

}
export default useFirebase;