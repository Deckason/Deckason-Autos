"use client"
import styles from "../Auth.module.css"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { authentication } from "@/app/utils/firebaseConfiguration"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

const Register = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [errMsg, setErrMsg] = useState()
    const [successMsg, setSuccessMsg] = useState("")
    const [success, setSuccess] = useState(false)

    const schema = yup.object().shape({
        username: yup.string().required("Username is required!"),
        email: yup.string().required("Email is required!").email("Email format is required"),
        password: yup.string().required("Password is required").min(6, "Min of 6 characters required"),
        confirmPassword: yup.string().required("Confirm password is required!").oneOf([yup.ref("password")], "Password do not match"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const {push} = useRouter()

    const handleRegister = async (data)=>{
        try {
            setIsLoading(true)
            setErr(false)
            setSuccess(false)
            const res = await createUserWithEmailAndPassword(authentication, data.email, data.password)
            if (res) {
                setIsLoading(false)
                setSuccess(true)
                setSuccessMsg("Registration-successful")
                push("/post-product")
            }
            
        }catch (error) {
            setIsLoading(false)
            setErr(true)
            handleErrMsg(error)
            console.log(error)
        }
        // setIsLoading(false)
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
            <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
                <h1>Register</h1>
                {err&&<p className="errMsg">{errMsg}</p>}
                {success&&<p className="successMsg">{successMsg}</p>}
                <div className={styles.inputCategory}>
                <label htmlFor="">
                        <h4>Username</h4>
                        <input type="text" placeholder="Username" {...register("username")}/>
                        <small className={styles.errors}>{errors.username?.message}</small>
                    </label>
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
                    <label htmlFor="">
                        <h4>Confirm Password</h4>
                        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
                        <small className={styles.errors}>{errors.confirmPassword?.message}</small>
                    </label>
                </div>
                <button type="submit" className={`btn ${styles.submit}`}>{isLoading?"Loading...":"Submit"}</button>
                <small className={styles.toggle_login}>Already have an account? <span onClick={()=>push("/auth")}>Login here</span></small>
            </form>
        </div>
    </>);
}
 
export default Register;