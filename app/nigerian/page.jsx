"use client"
import styles from "./nigerian.module.css"
import AsideNav from "../components/AsideNav/AsideNav";
import Products from "../components/products/Products";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/ContextProvider";
import { query, where } from "firebase/firestore";

const ForeignUsed = () => {

    const [products, setProducts] = useState([])
    const { getDocument, collectionRef} = useAppContext() 

    const getProducts = async ()=>{
      const q = query(collectionRef, where("condition", "==", "Nigerian used"))
        let carDocs = []
        try {
            const snapshot = await getDocument(q)
            snapshot.docs.forEach(product => {
                carDocs.push({...product.data(), id: product.id})
            });
            setProducts(carDocs)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div className={`aside_product_container ${styles.nigerian_used}`}>
            <div className={`aside_container ${styles.aside_container}`}>
                <AsideNav />
            </div>
            <div className={`product_container ${styles.product_container}`}>
                <Products 
                    page={"Nigerian Used"}
                    products={products}/>
            </div>
        </div>
    );
}
 
export default ForeignUsed;