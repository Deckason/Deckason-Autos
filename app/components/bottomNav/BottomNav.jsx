"use client"
import { FaFlag, FaHome} from "react-icons/fa";
import styles from "./BottomNav.module.css"
import Link from "next/link";
import { GiWorld } from "react-icons/gi";
import { TbCategory } from "react-icons/tb";
import NigerFlag from "./media/NigerFlag.jpeg"
import Image from "next/image";
import { MdCurrencyExchange } from "react-icons/md";
import Extras from "../Extras/Extras";
import { useState } from "react";
const BottomNav = () => {
    const [activeBtn, setActiveBtn] = useState(null)
    const [extras, setExtras] = useState(false)
    
    return (
        <>
            <div className={styles.bottomNav}>
                <div className={styles.bottom_nav_box} onClick={()=>setActiveBtn("homeBtn")}>
                    <Link href={"/"}>
                        <FaHome className={`${styles.Bottom_nav_icon} ${activeBtn === "homeBtn" ? styles.active:""}`}/>
                        <p className={styles.bottom_nav_name}>Home</p>
                    </Link>
                </div>
                <div className={styles.bottom_nav_box} onClick={()=>setActiveBtn("nigerianBtn")}>
                    <Link href={"/nigerian"}>
                        <FaFlag className={`${styles.Bottom_nav_icon} ${activeBtn === "nigerianBtn" ? styles.active:""}`}/>
                        <p className={styles.bottom_nav_name}>Nigerian</p>
                    </Link>
                </div>
                <div className={styles.bottom_nav_box} onClick={()=>setActiveBtn("foreignBtn")}>
                <Link href={"/foreign"}>
                    <GiWorld className={`${styles.Bottom_nav_icon} ${activeBtn === "foreignBtn" ? styles.active:""}`}/>
                    <p className={styles.bottom_nav_name}>Foreign</p>
                </Link>
                </div>
                <div className={styles.bottom_nav_box} onClick={()=>setActiveBtn("exchangeBtn")}>
                <Link href={"/"}>
                    <MdCurrencyExchange className={`${styles.Bottom_nav_icon} ${activeBtn === "exchangeBtn" ? styles.active:""}`}/>
                    <p className={styles.bottom_nav_name}>Sell</p>
                </Link>
                </div>
                <div className={styles.bottom_nav_box} onClick={()=>{setActiveBtn("categoryBtn"), setExtras(!extras)}}>
                <div  className={`${styles.category}`}>
                    <TbCategory className={`${styles.Bottom_nav_icon} ${activeBtn === "categoryBtn" ? styles.active:""}`}/>
                    <p className={styles.bottom_nav_name}>Category</p>
                </div>
                </div>
                <Extras extras={extras} setExtras={setExtras}/>
            </div>
        </>
    );
}
 
export default BottomNav;