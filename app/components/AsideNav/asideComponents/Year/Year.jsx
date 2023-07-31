"use client"
import { useState } from "react";
import styles from "./Year.module.css"
import MinMax from "../asideReusableComponents/MinMaxInput/MinMax";
import RadioButtons from "../asideReusableComponents/RadioButtons/RadioButtons";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";

const Year = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Manufacture Year"
    return (
        <>
            <div className={`aside_box ${styles.year}`}>
                <div className={`aside_header ${styles.year_head}`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.year_body} ${openBox?"openBox":"closeBox"}`}>
                    <MinMax />
                    <RadioButtons />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Year;