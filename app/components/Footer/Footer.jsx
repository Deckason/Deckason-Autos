import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, 
            FaLinkedinIn, FaPhone, FaTwitterSquare, 
            FaWhatsappSquare } from "react-icons/fa";
import styles from "./footer.module.css"
import Link from "next/link";
import { GiHouse } from "react-icons/gi";
import AsideNav from "../AsideNav/AsideNav";
import Extras from "../Extras/Extras";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_socials}>
                    <Link href={""}><FaFacebookSquare className={`${styles.icon}`}/></Link>
                    <Link href={""}><FaTwitterSquare className={`${styles.icon}`}/></Link>
                    <Link href={""}><FaWhatsappSquare className={`${styles.icon}`}/></Link>
                    <Link href={""}><FaLinkedinIn className={`${styles.icon}`}/></Link>
                    <Link href={""}><FaInstagramSquare className={`${styles.icon}`}/></Link>
                </div>
                <div className={styles.footer_others}>
                    <div className={styles.contact}>
                        <h1 className={styles.contact_header}>Contact Us</h1>
                        <div className={styles.contacts}>
                            <p className={styles.address}><GiHouse /> No. 72 Owerri Aba road</p>
                            <p className={styles.mail}><FaEnvelope /> deckasonautos@gmail.com</p>
                            <p className={styles.phone}><FaPhone /> +2348165143702</p>
                        </div>
                    </div>
                    <div className={styles.link}>
                        <h1 className={styles.links_header}>Links</h1>
                        <ul className={styles.links}>
                            <li><Link href={""}>Home</Link></li>
                            <li><Link href={""}>Foreign Used</Link></li>
                            <li><Link href={""}>Nigerian Used</Link></li>
                            <li><Link href={""}>Sell car</Link></li>
                            <li><Link href={""}>Our Services</Link></li>
                        </ul>
                    </div>
                    <div className={styles.categories}>
                        <h1 className={styles.categories_header}>Categories</h1>
                        <ul className={styles.category}>
                            <li><Link href={""}>VAN</Link></li>
                            <li><Link href={""}>SUV</Link></li>
                            <li><Link href={""}>SEDAN</Link></li>
                            <li><Link href={""}>TRUCK</Link></li>
                            <li><Link href={""}>CROSSOVER</Link></li>
                            <li><Link href={""}>CONVERTIBLE</Link></li>
                            <li><Link href={""}>HATCHBACK</Link></li>
                            <li><Link href={""}>STATION WAGON</Link></li>
                            
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_copyright}>
                    <p>Deckason Autos &copy; Copyright, All rights reserved</p>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;