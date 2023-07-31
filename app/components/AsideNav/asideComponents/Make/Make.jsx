"use client"
import { useState } from "react";
import styles from "./Make.module.css"
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";
import SearchInput from "../asideReusableComponents/SearchInput/SearchInput";
import CheckBoxes from "../asideReusableComponents/CheckButtons/CheckBoxes";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";

const Make = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Car Make";
    const searchTitle = "Find Make"

    return (
        <>
            <div className={`aside_box ${styles.make}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.make_body} ${openBox?"openBox":"closeBox"}`}>
                    <SearchInput searchTitle={searchTitle}/>
                    <CheckBoxes />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Make;