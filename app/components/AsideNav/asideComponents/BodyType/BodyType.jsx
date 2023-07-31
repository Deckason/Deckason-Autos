"use client"
import styles from "./BodyType.module.css"
import { useState } from "react";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";
import SearchInput from "../asideReusableComponents/SearchInput/SearchInput";
import CheckBoxes from "../asideReusableComponents/CheckButtons/CheckBoxes";

const BodyType = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Body";
    const searchTitle = "Body Type"

    return (
        <>
            <div className={`aside_box ${styles.body_type}`}>
                <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.body_type} ${openBox?"openBox":"closeBox"}`}>
                    <SearchInput searchTitle={searchTitle} />
                    <CheckBoxes />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default BodyType;