import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";

const auth = getAuth(app);

const useUser = () =>{
    const [currentUser, setUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                
            }
        });
    
    }, [auth]);
    
    return currentUser
}

export default useUser