import styles from "./ProductDetails.module.css"

const ProductDetails = ({product}) => {
    return (
        <div className={styles.details_wrapper}>
            <h2>Other Details</h2>
            <div className={styles.details}>
                {product.make && <p><span>Make</span> <span>{product.make}</span></p>}
                {product.model && <p><span>Model</span> <span>{product.model}</span></p>}
                {product.year && <p><span>Year</span> <span>{product.year}</span></p>}
                {product.condition && <p><span>Condition</span> <span>{product.condition}</span></p>}
                {product.customPaper && <p><span>Custom Paper</span> <span>{product.customPaper}</span></p>}
                {product.mileage && <p><span>Mileage</span> <span>{product.mileage}</span></p>}
                {product.boughtCondition && <p><span>Bought Condition</span> <span>{product.boughtCondition}</span></p>}
                {product.condition && <p><span>Selling Condition</span> <span>{product.condition}</span></p>}
                {product.fuel && <p><span>Fuel Type</span> <span>{product.fuel}</span></p>}
                {product.transmission && <p><span>Transmission</span> <span>{product.transmission}</span></p>}
                {product.engineType && <p><span>Engine Type</span> <span>{product.engineType}</span></p>}
                {product.engineSize && <p><span>Engine Size</span> <span>{product.engineSize}</span></p>}
                {product.exteriorColor && <p><span>Color (Exterior)</span> <span>{product.exteriorColor}</span></p>}
                {product.interiorColor && <p><span>Color (Interior)</span> <span>{product.interiorColor}</span></p>}
                {product.diagnosticReport && <p><span>Diagnostic Report</span> <span>{product.diagnosticReport}</span></p>}
                {product.airBag && <p><span>Air Bag</span> <span>{product.airBag}</span></p>}
                {product.driveType && <p><span>Drive Type</span>{product.driveType}</p>}
            </div>
        </div>
    );
}
 
export default ProductDetails;