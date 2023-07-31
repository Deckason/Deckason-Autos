"use client"
import { FaHome} from "react-icons/fa";
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
    const [extras, setExtras] = useState(false)
    
    return (
        <>
            <div className={styles.bottomNav}>
                <div className={styles.bottom_nav_box}>
                    <Link href={"/"}>
                        <FaHome className={styles.Bottom_nav_icon}/>
                        <p className={styles.bottom_nav_name}>Home</p>
                    </Link>
                </div>
                <div className={styles.bottom_nav_box}>
                    <Link href={"/nigerian"}>
                        <div className={styles.Bottom_nav_icon}>
                            <Image className={styles.nigerFlag}
                                    src={NigerFlag}
                                    width={1}
                                    height={5}
                                    alt=""
                            />
                        </div>
                        <p className={styles.bottom_nav_name}>Nigerian</p>
                    </Link>
                </div>
                <div className={styles.bottom_nav_box}>
                <Link href={"/foreign"}>
                    <GiWorld className={styles.Bottom_nav_icon}/>
                    <p className={styles.bottom_nav_name}>Foreign</p>
                </Link>
                </div>
                <div className={styles.bottom_nav_box}>
                <Link href={"/"}>
                    <MdCurrencyExchange className={styles.Bottom_nav_icon}/>
                    <p className={styles.bottom_nav_name}>Sell</p>
                </Link>
                </div>
                <div className={styles.bottom_nav_box} onClick={()=>{setExtras(!extras)}}>
                <div  className={`${styles.extras} ${extras?styles.active:""}`}>
                    <TbCategory className={styles.Bottom_nav_icon}/>
                    <p className={styles.bottom_nav_name}>Extras</p>
                </div>
                </div>
                <Extras extras={extras} setExtras={setExtras}/>
            </div>
        </>
    );
}
 
export default BottomNav;