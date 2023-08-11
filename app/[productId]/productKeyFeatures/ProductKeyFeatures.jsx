import { FaPhoneSquare, FaWhatsappSquare } from "react-icons/fa";
import styles from "./ProductKeyFeatures.module.css"
import Link from "next/link";

const ProductKeyFeatures = ({product}) => {

    const carDetails = `${product.year} ${product.make} ${product.model} ${product.condition} \n ${window.location.href}`; //Car details
    const encodedMessage = encodeURIComponent("I'm interested in the car with details:\n" + carDetails);
    
    const whatsappLink = "https://api.whatsapp.com/send?phone=2348165143702&text=" + encodedMessage;
    
    // Now you can use the 'whatsappLink' in your HTML or JavaScript code

    // <button onclick="callNumber()">Call Now</button>

        // const callNumber = () => {
        //     const phoneNumber = '+2348165143702'; // Replace with your phone number
        //     window.location.href = 'tel:' + phoneNumber;
        // }

    

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
                <Link target="_blank" href={"tel:+2348165143702"} className={`btn ${styles.contact_buttons}`}>Phone <FaPhoneSquare /></Link>
                <Link target="_blank" href={whatsappLink} className={`btn ${styles.contact_buttons}`}>WhatsApp <FaWhatsappSquare /></Link>
            </div>
        </div>
    );
}
 
export default ProductKeyFeatures;