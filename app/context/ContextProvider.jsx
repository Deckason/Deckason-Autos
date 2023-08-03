"use client"

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { authentication, db } from "../utils/firebaseConfiguration";
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore"

const AppContext = createContext()

export const useAppContext = ()=> useContext(AppContext)

const ContextProvider = ({children}) => {
    const [isVerified, setIsVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [errMsg, setErrMsg] = useState()
    const [currentUser, setCurrentUser] = useState(null)

    // const db = getFirestore()
    // const usersRef = collection(db, "users")
    const collectionRef = collection(db, "Cars")

    // onAuthStateChanged(authentication, (user)=>{
    //     setCurrentUser(user)
    // })

    const handleErrMsg= (err) =>{
        switch (err.code) {
            case "auth/email-already-exists":
                setErrMsg("Email-already-exists")
            break;
            case "auth/internal-error":
                setErrMsg("Internal-error")
            break;
            case "auth/invalid-email":
                setErrMsg("Invalid-email")
            break;
            case "auth/invalid-password":
                setErrMsg("Invalid-credentials")
            break;
            case "auth/user-not-found":
                setErrMsg("User-not-found")
            break;
            case "auth/network-request-failed":
                setErrMsg("Network-request-failed")
            break;
            case "auth/wrong-password":
                setErrMsg("Wrong-credentials")
            break;
            case "auth/too-many-requests":
                setErrMsg("Too-many-requests")
            break;
            case "auth/email-already-in-use":
                setErrMsg("Email-already-in-use")
            break;
            case "connectStorageEmulator is not defined":
                setErrMsg("Network-error")
            break;
            case "email is not defined":
                setErrMsg("Wrong-credentials")
            break;
            
            default:
                setErrMsg("Something-went-wrong")
            break;
        }
    }

    // const getDocument = (refrence)=>{
    //     return getDocs(refrence)
    // }

    // const addDocument = (refrence, data) =>{
    //     return addDoc(refrence, data)
    // }

    // const singleDoc = (databaseCollection, id)=>{
    //     return doc(db, databaseCollection, id)
    // }

    // const updateDocument = (id, data)=>{
    //     return updateDoc(doc(db, "Cars", id), data)
    // }

    // const login = (email, password)=>{
    //     return signInWithEmailAndPassword(authentication, email, password)
    // }

    // const creatAccount = (email, password) => {
    //     return createUserWithEmailAndPassword(authentication, email, password)
    // }

    const value = {
        // isVerified,
        // setIsVerified,
        // usersRef,
        collectionRef,
        // getDocument,
        // addDocument,
        // login,
        // creatAccount,
        isLoading,
        setIsLoading,
        currentUser,
        // singleDoc,
        // updateDocument,
        err,
        setErr,
        errMsg,
        setErrMsg,
        handleErrMsg,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
 
        
export default ContextProvider;