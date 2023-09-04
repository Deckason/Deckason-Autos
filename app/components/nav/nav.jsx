"use client"
import styles from "./nav.module.css"
import Link from "next/link";
import logo from "../../../public/media/car logos/logo.jpg"
import { useState } from "react";
import Image from "next/image";

const Nav = () => {
    const [activeBtn, setActiveBtn] = useState(null)
    const [search, setSearch] = useState("")

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_logo} onClick={()=>setActiveBtn("homeBtn") }>
                    <Link href={"/"}><Image src={logo} width={500} height={100}/></Link>
                </div>
                <ul
                    className={`${styles.header_ul}`}>
                    <li onClick={()=>setActiveBtn("homeBtn") }>
                        <Link href={"/"} className={`${activeBtn === "homeBtn" ? styles.active:""}`}>Home</Link>
                    </li>
                    <li onClick={()=>setActiveBtn("nigerianBtn") }>
                        <Link href={"/nigerian"} className={`${activeBtn === "nigerianBtn" ? styles.active:""}`}>Nigerian Used</Link>
                    </li>
                    <li onClick={()=>setActiveBtn("foreignBtn") }>
                        <Link href={"/foreign"}  className={`${activeBtn === "foreignBtn" ? styles.active:""}`}>Foreign Used</Link>
                    </li>
                    <li onClick={()=>setActiveBtn("newtBtn") }>
                        <Link href={"/new"}  className={`${activeBtn === "newtBtn" ? styles.active:""}`}>New</Link>
                    </li>
                </ul>
                <div className={styles.header_search}>
                    <div className={styles.search_wrapper}>
                        <input type="text" placeholder="Search..." onChange={e=>setSearch(e.target.value)}/>
                        <Link href={{pathname: "/search", query: {search: search}}} className={`btn ${styles.btn}`} > Search </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Nav;