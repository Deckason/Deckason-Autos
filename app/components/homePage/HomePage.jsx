"use client"
import { useEffect, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services/services";
import Products from "../products/Products";
// import { useAppContext } from "@/app/context/ContextProvider";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// import LandingPage from "./components/LandingPage/LandingPage";
// import Logos from "./components/Logo/logos";
// import Services from "./components/Services/services";
// import Products from "./components/products/Products";
// import { useAppContext } from "./context/ContextProvider";

const HomePage = () => {

  const [products, setProducts] = useState([])
    // const { getDocument, collectionRef} = useAppContextxt() 
    const db = getFirestore()
    const collectionRef = collection(db, "Cars")
    

    const getProducts = async ()=>{
    //   const q = collectionRef;
        let carProducts = []
        try {
            // const snapshot = await getDocument(q)
            const snapshot = await getDocs(collectionRef)
            snapshot.docs.forEach(product => {
                carProducts.push({...product.data(), id: product.id})
            });
            setProducts(carProducts)
            connectStorageEmulator.log("Products",  carProducts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <>
      <LandingPage />
      <Services />
      <Products 
        page={"Featured"}
        products={products}/>
    </>
  );
}
 
export default HomePage;