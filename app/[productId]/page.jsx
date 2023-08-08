"use client"
import AsideNav from "../components/AsideNav/AsideNav";
import styles from "./productId.module.css"
import Products from "../components/products/Products";
import ProductDetails from "./productDetails/ProductDetails";
import ProductKeyFeatures from "./productKeyFeatures/ProductKeyFeatures";
import { doc, getDoc } from "firebase/firestore";
import { collectionRef } from "../utils/firebaseConfiguration";
import { useEffect, useState } from "react";
import ProductPreview from "../components/productPreview/ProductPreview";

const productId = ({params: {productId}}) => {

    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getProduct = ()=>{
        setIsLoading(true)
        const docRef = doc(collectionRef, productId)
        getDoc(docRef)
        .then(doc=>{
            setProduct(doc.data())
            setIsLoading(false)
        }).catch(err=>{
            console.log(err.message)
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        getProduct()
    },[productId])

    return (
        <div className={`container ${""}`}>
            <div className={`aside_container ${""}`}>
                <AsideNav />
            </div>
            {!isLoading && <div className={`product_container ${styles.product_description}`}>
                <div className={styles.preview_products}>
                    <ProductPreview images={product?.productImages}/>
                </div>
                <div className={styles.product_details}>
                    <ProductKeyFeatures product={product}/>
                    <ProductDetails product={product}/>
                </div>
            </div>}
            {isLoading&& <p>Loading...</p>}
            {/* <div className={styles.similar_products}>
                <h2>Similar Cars</h2>
                <Products />
            </div> */}
        </div>
    );
}
 
export default productId;