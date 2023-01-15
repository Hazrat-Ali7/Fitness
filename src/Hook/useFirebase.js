import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'


import { getStorage, ref, uploadBytes } from "firebase/storage";
import { async } from '@firebase/util';
import app from '../firebase.init';

const useFirebase = () => {

    const auth = getAuth(app)
     
    // Function Login With Gmail And Password


    const LoginWithEmailPassword = (email, password) => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
               
                
            })
            .catch((error) => {
                
            })
    }

    // Function Create User
     
    const CreateWithEmailPassword = (email, password, name) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                updateUserName(name)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });

    }

    // Function Update Display name 
    // Function Update Display name 
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const storage = getStorage()
   
    const storageRef = ref(storage);

    


    return {
        LoginWithEmailPassword,
        CreateWithEmailPassword
    };
}



export default useFirebase