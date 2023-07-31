"use client"
import styles from "./Location.module.css"
import { useState } from "react";
import RadioButtons from "../asideReusableComponents/RadioButtons/RadioButtons";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";
import SearchInput from "../asideReusableComponents/SearchInput/SearchInput";

const Location = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Location";
    const searchTitle="Search Location"

    return (
        <>
            <div className={`aside_box ${styles.location}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.location_body} ${openBox?"openBox":"closeBox"}`}>
                    <SearchInput searchTitle={searchTitle} />
                    <RadioButtons />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Location;