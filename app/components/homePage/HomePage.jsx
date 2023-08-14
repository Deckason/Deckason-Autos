"use client"
import { useEffect, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services/services";
import Products from "../products/Products";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "@/app/utils/firebaseConfiguration";
import CardSkeleton from "../products/cardSkeleton/CardSkeleton";

const HomePage = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
    const collectionRef = collection(db, "Cars")
    

    const getProducts = async ()=>{
        let carProducts = []
        try {
            const snapshot = await getDocs(collectionRef)
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
    <>
      <LandingPage />
      <Services />
      {isLoading ? <CardSkeleton />
        : <Products page={"Featured"} products={products}/>}
    </>
  );
}
 
export default HomePage;