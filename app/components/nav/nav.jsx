"use client"
import { signOut } from "firebase/auth";
import styles from "./nav.module.css"
import Link from "next/link";
import logo from "../../../public/media/car logos/logo.jpg"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { authentication } from "@/app/utils/firebaseConfiguration";
import Image from "next/image";

const Nav = () => {
   
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_logo}>
                    <Link href={"/"}><Image src={logo} width={300} height={100}/></Link>
                </div>
                <ul
                    className={`${styles.header_ul}`}>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/nigerian"}>Nigerian Used</Link></li>
                    <li><Link href={"/foreign"}>Foreign Used</Link></li>
                    <li><Link href={"/about"}>About Us</Link></li>
                </ul>
                <div className={styles.header_search}>
                    <div className={styles.search_wrapper}>
                        <input type="text" placeholder="Search..."/>
                        <button className={`btn ${styles.btn}`}> Search </button>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Nav;