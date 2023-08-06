import Link from "next/link";
import styles from "./products.module.css"
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import {MdSpeed} from "react-icons/md"
import {GiSpanner, GiNotebook} from "react-icons/gi"
import {TbCurrencyNaira} from "react-icons/tb"


const Products = ({products, page}) => {
    
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
                        products.map(car =>(
                            <div className={styles.product_card} key={car.key}>
                                <Link href={"/productId"}><div className={styles.product_img}>
                                    <Image 
                                        height={100}
                                        width={300}
                                        alt="product-Img"
                                        style={{'objectFit':"cover"}}
                                        src={car.productImages[0]}
                                        className={styles.img_wrapper}
                                    />
                                    <p className={styles.price_tag}><TbCurrencyNaira/>{car.price}</p>
                                    </div>
                                </Link>
                                <div className={styles.product_description}>
                                    <h4 className={styles.product_name}>{`${car.year} ${car.make} ${car.model}`}</h4>
                                    <div className={styles.other_details}>
                                        <div className={styles.left_details}>
                                            <p className={styles.product_location}><ImLocation2 /> {`${car.region} ${car.state}`}</p>
                                            <p className={styles.product_mileage}><MdSpeed /> {car.mileage}</p>
                                        </div>
                                        <div className={styles.right_details}>
                                            <p className={styles.product_condition}><GiSpanner /> {car.condition}</p>
                                            <p className={styles.product_register}><GiNotebook /> {car.registrationStatus}</p>
                                        </div>
                                    </div>
                                    <div className={styles.price}>
                                        <p><TbCurrencyNaira/>{car.price}</p>
                                        <Link href={"/productId"}><button className={`btn`}>View Details</button></Link>
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