"use client"
import styles from "./Auth.module.css"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useAppContext } from "@/app/context/ContextProvider"
import { authentication } from "../utils/firebaseConfiguration"

const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().required("Email is required!").email("Email format is required"),
        password: yup.string().required("Password is required").min(6, "Min of 6 characters required"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const {getDocument, usersRef, login, isLoading, setIsLoading,
        handleErrMsg, err, setErr, errMsg, setErrMsg} = useAppContext()

    const {push} = useRouter()
    
    const handleLogin = async (data)=>{
        try {
            setIsLoading(true)
            setErr(false)
            const res = await login(data.email, data.password)
            setIsLoading(false)
            res?push("/post-product"):""
            document.querySelector("form").reset()
        } catch (error) {
            setIsLoading(false)
            setErr(true)
            handleErrMsg(error)
            console.log(error)
        }
    }

    return (<>
        <div className={styles.form_wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
                <h1>Login</h1>
                {err&&<p className="errMsg">{errMsg}</p>}
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