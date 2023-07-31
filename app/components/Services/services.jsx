import Image from "next/image";
import styles from "./services.module.css"
import {TbCurrencyNaira} from "react-icons/tb"
import servicesImg from "../../../public/media/car images/FB_IMG_1615720872137.jpg"

import servicesImg2 from "../../../public/media/car images/mercedes_benz_car_side_view_181542_3840x2400.jpg"

const Services = () => {
    return (
        <>
            <div className={styles.services}>
                <h1 className={styles.services_bg_text}>OUR SERVICES</h1>
                <div className={styles.service_content_wrapper}>
                    
                    <div className={styles.services_img_1}>
                        {/* <div className={styles.img_1_description}>
                            <h3 className={styles.title}>Lamborghini Huricane</h3>
                            <p><TbCurrencyNaira/>210,000,000.00</p>
                            <button>View Details</button>
                        </div> */}
                        <Image
                            src={servicesImg}
                        />
                    </div>

                    <div className={styles.content}>
                        <p style={{color: "#E64F20", fontSize: "1rem", letterSpacing: ".5rem"}}>Our Services</p>
                        <h1 className={styles.content_header}>
                            Help Find Your Dream Car
                        </h1>
                        <p className={styles.content_body}>
                            Contact Deckason Autos for any vehicles u desire to
                            buy or sale with proper details.<br/>
                            You can make requests based on
                            <li>Your Budget (Howmuch are you willing to pay for a car)</li>
                            <li>Vehicle Condition (Nigerian used, Foreign used, Belgium, Tokumbo etc...)</li>
                            <li>Vehicle Model</li>
                        </p>
                    </div>
                </div>
                <div className={styles.services_img_2}>
                    <Image
                        src={servicesImg2}
                    />
                </div>
            </div>
        </>
    );
}
 
export default Services;