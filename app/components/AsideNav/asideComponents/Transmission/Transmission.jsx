"use client"
import styles from "./Transmission.module.css"
import { useState } from "react";
import RadioButtons from "../asideReusableComponents/RadioButtons/RadioButtons";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";

const Transmission = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Transmission";

    return (
        <>
            <div className={`aside_box ${styles.transmission}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.transmission_body} ${openBox?"openBox":"closeBox"}`}>
                    <RadioButtons />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Transmission;