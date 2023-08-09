import { FaPhoneSquare, FaWhatsappSquare } from "react-icons/fa";
import styles from "./ProductKeyFeatures.module.css"

const ProductKeyFeatures = ({product}) => {
    return (
        <div className={styles.key_features}>
            <div className={styles.primary_features}>
                {product.state && <h3>{`${product.region} ${product.lga} ${product.state}`}</h3>}
                {product.make && <h1>{`${product.year} ${product.make} ${product.model}`}</h1>}
                {product.price && <h2>{product.price}</h2>}
            </div>
            <div className={styles.secondary_features}>
                {product.condition && <h5>{product.condition}</h5>}
                {product.mileage && <h5>{product.mileage}</h5>}
                {product.transmission && <h5>{product.transmission}</h5>}
            </div>
            <div className={styles.contact_for_product}>
                <button className={`btn`}>Phone <FaPhoneSquare /></button>
                <button className={`btn`}>WhatsApp <FaWhatsappSquare /></button>
            </div>
        </div>
    );
}
 
export default ProductKeyFeatures;