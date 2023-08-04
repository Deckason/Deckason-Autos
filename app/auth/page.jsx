"use client"
import styles from "./Auth.module.css"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { authentication } from "../utils/firebaseConfiguration"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

const Login = () => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [errMsg, setErrMsg] = useState()
    const [successMsg, setSuccessMsg] = useState("")
    const [success, setSuccess] = useState(false)

    const schema = yup.object().shape({
        email: yup.string().required("Email is required!").email("Email format is required"),
        password: yup.string().required("Password is required").min(6, "Min of 6 characters required"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })
    
    const {push} = useRouter()
    
    const handleLogin = async (data)=>{
        try {
            setIsLoading(true)
            setErr(false)
            setSuccess(false)
            const res = await signInWithEmailAndPassword(authentication, data.email, data.password)
            if (res) {
                setIsLoading(false)
                setSuccess(true)
                setSuccessMsg("Login-successful")
                push("/post-product")
                document.querySelector("form").reset()
            }
            
            
        } catch (error) {
            setIsLoading(false)
            setErr(true)
            handleErrMsg(error)
            console.log(error)
        }
    }

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

    return (<>
        <div className={styles.form_wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
                <h1>Login</h1>
                {err&&<p className="errMsg">{errMsg}</p>}
                {success&&<p className="successMsg">{successMsg}</p>}
                <div className={styles.inputCategory}>
                    <label htmlFor="">
                        <h4>Email</h4>
                        <input type="email" placeholder="Email" {...register("email")}/>
                        <small className={styles.errors}>{errors.email?.message}</small>
                    </label>
                    <label htmlFor="">
                        <h4>Password</h4>
                        <input type="password" placeholder="Password" {...register("password")}/>
                        <small className={styles.errors}>{errors.password?.message}</small>
                    </label>
                </div>
                <button type="submit" className={`btn ${styles.submit}`}>{isLoading?"Loading...":"Submit"}</button>
                <small className={styles.toggle_login}>Not yet Registered? <span onClick={()=>{push("/auth/register")}}>Register here</span></small>
            </form>
        </div>
    </>);
}
 
export default Login;