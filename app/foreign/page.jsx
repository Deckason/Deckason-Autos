"use client"
import styles from "./foreign.module.css"
import AsideNav from "../components/AsideNav/AsideNav";
import Products from "../components/products/Products";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfiguration";
import CardSkeleton from "../components/products/cardSkeleton/CardSkeleton";

const ForeignUsed = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const collectionRef = collection(db, "Cars") 

    const getProducts = async ()=>{
      const q = query(collectionRef, where("condition", "==", "Foreign used"))
        let carProducts = []
        try {
            const snapshot = await getDocs(q)
            snapshot.docs.forEach(product => {
                carProducts.push({...product.data(), id: product.id})
            });
            setProducts(carProducts)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div className={`container ${styles.foreign_used}`}>
            <div className={`aside_container ${styles.aside_container}`}>
                <AsideNav />
            </div>
            <div className={`product_container ${styles.product_container}`}>
                {isLoading && <CardSkeleton />}
                {products.length > 0 ?
                <Products page={"Foreign used"} products={products}/>:
                <Products page={"Product not yet available"} products={products}/>}
            </div>
        </div>
    );
}
 
export default ForeignUsed;