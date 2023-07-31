"use client"
import styles from "./Price.module.css"
import { useState } from "react";
import MinMax from "../asideReusableComponents/MinMaxInput/MinMax";
import RadioButtons from "../asideReusableComponents/RadioButtons/RadioButtons";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";

const Price = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Price Range";

    return (
        <>
            <div className={`aside_box ${styles.price}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.price_body} ${openBox?"openBox":"closeBox"}`}>
                    <MinMax />
                    <RadioButtons />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Price;