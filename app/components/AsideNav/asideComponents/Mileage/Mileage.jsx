"use client"
import styles from "./Mileage.module.css"
import { useState } from "react";
import MinMax from "../asideReusableComponents/MinMaxInput/MinMax";
import RadioButtons from "../asideReusableComponents/RadioButtons/RadioButtons";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";

const Mileage = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Mileage";

    return (
        <>
            <div className={`aside_box ${styles.mileage}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.mileage_body} ${openBox?"openBox":"closeBox"}`}>
                    <MinMax />
                    <RadioButtons />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Mileage;