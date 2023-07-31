"use client"
import styles from "./Fuel.module.css"
import { useState } from "react";
import RadioButtons from "../asideReusableComponents/RadioButtons/RadioButtons";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";

const Fuel = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Fuel";

    return (
        <>
            <div className={`aside_box ${styles.fuel}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.fuel_body} ${openBox?"openBox":"closeBox"}`}>
                    <RadioButtons />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Fuel;