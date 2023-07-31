import Link from "next/link";
import styles from "./products.module.css"
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import {MdSpeed} from "react-icons/md"
import {GiSpanner, GiNotebook} from "react-icons/gi"
import {TbCurrencyNaira} from "react-icons/tb"
import product_img_1 from "../../../public/media/car images/FB_IMG_1615720872137.jpg"
import product_img_2 from "../../../public/media/car images/FB_IMG_16223932793306100.jpg"
// import { useAppContext } from "@/app/context/ContextProvider";
// import { useEffect, useState } from "react";


const Products = ({products, page}) => {
    // const [products, setProducts] = useState([])
    // const { getDocument, collectionRef} = useAppContext() 

    // const getProducts = async ()=>{
    //     let carDocs = []
    //     try {
    //         const snapshot = await getDocument(collectionRef)
    //         snapshot.docs.forEach(product => {
    //             carDocs.push({...product.data(), id: product.id})
    //         });
    //         setProducts(carDocs)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //     getProducts()
    // },[])

    const carList = [
        {
            id: 1,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 2,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 3, 
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 4,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 5,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 6,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        }
    ]
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
                    {products&&
                        products?.map(car =>(
                            <div className={styles.product_card} key={car.key}>
                                <div className={styles.product_img}>
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
                                        <button className={`btn`}>View Details</button>
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