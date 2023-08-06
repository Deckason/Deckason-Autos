"use client"
import styles from "./foreign.module.css"
import AsideNav from "../components/AsideNav/AsideNav";
import Products from "../components/products/Products";
import { useAppContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ForeignUsed = () => {

    const [products, setProducts] = useState([])
    const db = getFirestore()
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
        } catch (error) {
            console.log(error)
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
                <Products 
                    page={"Foreign Used"}
                    products={products}/>
            </div>
        </div>
    );
}
 
export default ForeignUsed;