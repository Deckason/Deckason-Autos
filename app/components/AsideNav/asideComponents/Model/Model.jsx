"use client"
import { useState } from "react";
import AsideHeader from "../asideReusableComponents/AsideHeader/AsideHeader";
import styles from "./Model.module.css"
import SearchInput from "../asideReusableComponents/SearchInput/SearchInput";
import CheckBoxes from "../asideReusableComponents/CheckButtons/CheckBoxes";
import SubmitResetButtons from "../asideReusableComponents/SubmitResetButtons/SubmitResetButtons";

const Model = () => {
    const [openBox, setOpenBox] = useState(false)
    const header = "Model";
    const searchTitle = "Find Model";
    return (
        <>
            <div className={`aside_box ${styles.model}`}>
            <div className={`aside_header`} onClick={()=>{setOpenBox(!openBox)}}>
                    <AsideHeader boxStatus={openBox} header={header}/>
                </div>
                <div className={`aside_body ${styles.model_body} ${openBox?"openBox":"closeBox"}`}>
                    <SearchInput searchTitle={searchTitle}/>
                    <CheckBoxes />
                    <SubmitResetButtons />
                </div>
            </div>
        </>
    );
}
 
export default Model;