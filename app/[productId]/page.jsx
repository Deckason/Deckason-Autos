"use client"
import AsideNav from "../components/AsideNav/AsideNav";
import styles from "./productId.module.css"
import ProductDetails from "./productDetails/ProductDetails";
import ProductKeyFeatures from "./productKeyFeatures/ProductKeyFeatures";
import { doc, getDoc } from "firebase/firestore";
import { collectionRef } from "../utils/firebaseConfiguration";
import { useEffect, useState } from "react";
import ProductPreview from "../components/productPreview/ProductPreview";
import ProductDetailsSkeleton from "./productDetails/productDetailsSkeleton/ProductDetailsSkeleton";
import ProductKeyFeaturesSkeleton from "./productKeyFeatures/productKeyFeaturesSkeleton/ProductKeyFeaturesSkeleton";
import ProductPreviewSkeleton from "../components/productPreview/productPreviewSkeleton/ProductPreviewSkeleton";

const productId = ({params: {productId}}) => {

    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(true)

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
            <div className={`product_container ${styles.product_description}`}>
                <div className={styles.preview_products}>
                    {isLoading ? <ProductPreviewSkeleton /> : <ProductPreview images={product?.productImages}/>}
                </div>
                <div className={styles.product_details}>
                    {isLoading? <ProductKeyFeaturesSkeleton /> : <ProductKeyFeatures product={product}/>}
                    {isLoading? <ProductDetailsSkeleton /> : <ProductDetails product={product}/>}
                    
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