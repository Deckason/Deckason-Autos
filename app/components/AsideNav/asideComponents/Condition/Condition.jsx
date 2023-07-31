"use client"
import { useState } from "react";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";
import styles from "./Condition.module.css"
import CheckBoxes from "../asideReusableComponents/CheckButtons/CheckBoxes";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";


const Condition = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Condition";

    return (
        <>
            <div className={`aside_box ${styles.condition}`}>
            <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.price_body} ${openBox?"openBox":"closeBox"}`}>
                    <CheckBoxes />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Condition;