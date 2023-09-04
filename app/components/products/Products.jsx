import Link from "next/link";
import styles from "./products.module.css"
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import {MdSpeed} from "react-icons/md"
import {GiSpanner, GiNotebook} from "react-icons/gi"
import {TbCurrencyNaira} from "react-icons/tb"


const Products = ({products, page}) => {

const formatPrice = (price)=>{
    let formattedPrice = price.toLocaleString('en-US', {
      style: 'decimal', // Use decimal style
      minimumFractionDigits: 0, // Don't display decimal places
      maximumFractionDigits: 0, // Don't display decimal places
    });
    return formattedPrice
// console.log(formattedNumber); // Outputs: "2,500,000"
}

    
    return (
        <>
            <div className={styles.products_wrapper}>
                <h1 className={`${styles.background_text}`}>
                    {page}
                </h1>
                <div className={styles.products_section}>
                    <div className={styles.head_section}>
                        <h1>{page}</h1>
                        <Link href={""}>ALL CARS <FaArrowRight /></Link>
                    </div>
                    <div className={styles.products}>
                    {
                        products.map(product =>(
                            <div className={styles.product_card} key={product.id}>
                                <Link href={`/${product.id}`}><div className={styles.product_img}>
                                    <Image 
                                        height={100}
                                        width={300}
                                        alt="product-Img"
                                        style={{'objectFit':"cover"}}
                                        src={product.productImages[0]}
                                        className={styles.img_wrapper}
                                    />
                                    <p className={styles.price_tag}><TbCurrencyNaira/>{formatPrice(product.price)}</p>
                                    </div>
                                </Link>
                                <div className={styles.product_description}>
                                    <h4 className={styles.product_name}>{`${product.year} ${product.make} ${product.model}`}</h4>
                                    <div className={styles.other_details}>
                                        <div className={styles.left_details}>
                                            <p className={styles.product_location}><ImLocation2 /> {`${product.region} ${product.lga} ${product.state}`}</p>
                                            <p className={styles.product_mileage}><MdSpeed /> {product.mileage}</p>
                                        </div>
                                        <div className={styles.right_details}>
                                            <p className={styles.product_condition}><GiSpanner /> {product.condition}</p>
                                            <p className={styles.product_register}><GiNotebook /> {product.registrationStatus}</p>
                                        </div>
                                    </div>
                                    <div className={styles.price}>
                                        <p><TbCurrencyNaira/>{formatPrice(product.price)}</p>
                                        <Link href={`/${product.id}`}><button className={`btn`}>View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                        
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Products;