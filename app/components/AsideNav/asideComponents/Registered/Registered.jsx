"use client"
import styles from "./Registered.module.css"
import { useState } from "react";
import RadioButtons from "../asideReusableComponents/RadioButtons/RadioButtons";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";

const Registered = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Registered";

    return (
        <>
            <div className={`aside_box ${styles.registered}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.registered_body} ${openBox?"openBox":"closeBox"}`}>
                    <RadioButtons />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Registered;