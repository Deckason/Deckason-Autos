import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, 
            FaLinkedinIn, FaPhone, FaTwitterSquare, 
            FaWhatsappSquare } from "react-icons/fa";
import styles from "./footer.module.css"
import Link from "next/link";
import { GiHouse } from "react-icons/gi";
import AsideNav from "../AsideNav/AsideNav";
import Extras from "../Extras/Extras";

const Footer = () => {

    // const callNumber = () => {
    //     const phoneNumber = '+2348165143702'; // Replace with your phone number
    //     window.location.href = 'tel:' + phoneNumber;
    // }
    
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_socials}>
                    <Link target="_blank" href={"https://www.facebook.com/profile.php?id=100091988001092"}><FaFacebookSquare className={`${styles.icon}`}/></Link>
                    <Link target="_blank" href={"https://twitter.com/Deckason2"}><FaTwitterSquare className={`${styles.icon}`}/></Link>
                    <Link target="_blank"  href={"https://api.whatsapp.com/send?phone=2348165143702"}><FaWhatsappSquare className={`${styles.icon}`}/></Link>
                    {/* <Link target="_blank" href={""}><FaLinkedinIn className={`${styles.icon}`}/></Link> */}
                    <Link target="_blank" href={"https://www.instagram.com/deckason_autos/feed/"}><FaInstagramSquare className={`${styles.icon}`}/></Link>
                </div>
                <div className={styles.footer_contact}>
                    <div className={styles.contact}>
                        <h1 className={styles.contact_header}>Contact Us</h1>
                        <div className={styles.contacts}>
                            <p className={styles.address}><GiHouse /> No. 72 Owerri Aba road</p>
                            <Link target="_blank" href={"mailto:deckasonautos@gmail.com"} className={styles.mail}><FaEnvelope /> deckasonautos@gmail.com</Link>
                            <Link target="_blank" href={"tel:+2348165143702"} className={styles.phone}><FaPhone /> +2348165143702</Link>
                        </div>
                    </div>
                    <div className={styles.link}>
                        <h1 className={styles.links_header}>Links</h1>
                        <ul className={styles.links}>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/nigerian"}>Foreign Used</Link></li>
                            <li><Link href={"/foreign"}>Nigerian Used</Link></li>
                            <li><Link href={"/sell"}>Sell car</Link></li>
                            <li><Link href={"/services"}>Our Services</Link></li>
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