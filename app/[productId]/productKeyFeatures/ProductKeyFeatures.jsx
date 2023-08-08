import { FaPhoneSquare, FaWhatsappSquare } from "react-icons/fa";
import styles from "./ProductKeyFeatures.module.css"

const ProductKeyFeatures = () => {
    return (
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
    );
}
 
export default ProductKeyFeatures;