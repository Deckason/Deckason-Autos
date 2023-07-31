"use client"
import Image from "next/image";
import styles from "./LandingPage.module.css"
import LandingPageImg from "../../../public/media/car images/FB_IMG_1615749109920.jpg"
import { useAppContext } from "@/app/context/ContextProvider";
const LandingPage = () => {
    // const {snap} = useAppContext()
    // console.log(`snapshot ${snap}`)
    return (
        <>
            <div className={styles.landing_page}>
                <div className={styles.landingPage_text_container}>
                    <div className={styles.text_container}>
                        <p>Deckason Automobiles</p>
                        <h1>Elevating Your Car Buying Experience</h1>
                        <h3>Deckason Autos Where Car dreams Becomes Reality, 
                            Driven By Perfection, Guided By Trust!</h3>
                        <div className={styles.buy_sell_car}>
                            <button className={`btn`}>Buy Car</button>
                            <button className={`btn`} style={{background: "#000"}}>Sell Car</button>
                        </div>
                    </div>
                    <div className={styles.auto_Finance}>
                            <h3>Auto Finance Loading...</h3>
                        </div>
                </div>
                <div className={styles.landingPage_img_container}>
                    <div className={styles.img_container}>
                        <Image className={styles.img}
                            src={LandingPageImg}
                            alt="Landing page image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default LandingPage;