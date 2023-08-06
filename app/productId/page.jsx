import Image from "next/image";
import AsideNav from "../components/AsideNav/AsideNav";
import styles from "./productId.module.css"
import { FaPhoneSquare,  FaWhatsappSquare } from "react-icons/fa";
import car1 from '../../public/media/car images/car_gray_wet_147750_1600x1200.jpg';
import car2 from '../../public/media/car images/car_sports_car_red_209301_1600x1200.jpg';
import car3 from '../../public/media/car images/FB_IMG_1615720872137.jpg';
import car4 from '../../public/media/car images/FB_IMG_1615749245726.jpg';
import car5 from '../../public/media/car images/lexus_car_white_225032_3840x2400.jpg';
import car6 from '../../public/media/car images/nissan_gtr_supercar_121502_3840x2400.jpg';
import Products from "../components/products/Products";

const productId = () => {

    const files = [car1, car2, car3, car4, car5, car6, car1, car2, car3, car4, car5, car6]
    return (
        <div className={`container ${""}`}>
            <div className={`aside_container ${""}`}>
                <AsideNav />
            </div>
            <div className={`product_container ${styles.product_description}`}>
                <div className={styles.preview_products}>
                    <div className={styles.preview_header}>
                        <Image
                            src={car1}
                            width={1}
                            height={1}
                            alt="file"
                        />
                    </div>
                    <div className={styles.preview_wrapper}>
                    {files && files.map((file,key)=>(
                        <div className={styles.preview} key={key}>
                            <Image
                            src={file}
                            width={1}
                            height={1}
                            alt="file"
                            />
                            </div> )
                            )
                        }
                    </div>
                </div>
                <div className={styles.product_features}>
                    <div className={styles.key_features}>
                        <div className={styles.primary_features}>
                            <h3>Location</h3>
                            <h1>Product Name</h1>
                            <h2>12,000,000</h2>
                        </div>
                        <div className={styles.secondary_features}>
                            <h5>Condition</h5>
                            <h5>Mileage</h5>
                            <h5>Transmission</h5>
                        </div>
                        <div className={styles.contact_for_product}>
                            <span>Phone <FaPhoneSquare /></span>
                            <span>WhatsApp <FaWhatsappSquare /></span>
                        </div>
                    </div>
                    <div className={styles.other_features}>
                        <h2>Other Details</h2>
                        <div className={styles.feature_details}>
                            <p><span>Make</span> <span>Make</span></p>
                            <p><span>Model</span> <span>Model</span></p>
                            <p><span>Year</span> <span>Year</span></p>
                            <p><span>Condition</span> <span>Condition</span></p>
                            <p><span>Custom Paper</span> <span>Custom Paper</span></p>
                            <p><span>Mileage</span> <span>Mileage</span></p>
                            <p><span>Bought Condition</span> <span>Bought Condition</span></p>
                            <p><span>Selling Condition</span> <span>Selling Condition</span></p>
                            <p><span>Fuel Type</span> <span>Fuel Type</span></p>
                            <p><span>Transmission</span> <span>Transmission</span></p>
                            <p><span>Engine Type</span> <span>Engine Type</span></p>
                            <p><span>Engine Size</span> <span>Engine Size</span></p>
                            <p><span>Color (Exterior)</span> <span>Color (Exterior)</span></p>
                            <p><span>Color (Interior)</span> <span>Color (Interior)</span></p>
                            <p><span>Diagnostic Report</span> <span>Diagnostic Report</span></p>
                            <p><span>Air Bag</span> <span>Air Bag</span></p>
                            <p><span>Drive Type</span> Drive Type</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.similar_products}>
                <h2>Similar Cars</h2>
                <Products />
            </div> */}
        </div>
    );
}
 
export default productId;