import styles from "./ProductDetails.module.css"

const ProductDetails = () => {
    return (
        <div className={styles.details_wrapper}>
            <h2>Other Details</h2>
            <div className={styles.details}>
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
    );
}
 
export default ProductDetails;