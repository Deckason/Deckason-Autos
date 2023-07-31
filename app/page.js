"use client"
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Logos from "./components/Logo/logos";
import Services from "./components/Services/services";
import Products from "./components/products/Products";
import { useAppContext } from "./context/ContextProvider";

const Home = () => {

  const [products, setProducts] = useState([])
    const { getDocument, collectionRef} = useAppContext() 

    const getProducts = async ()=>{
      const q = collectionRef;
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
    <>
      <LandingPage />
      <Services />
      <Products 
        page={"Foreign Used"}
        products={products}/>
      {/* <Logos /> */}
    </>
  );
}
 
export default Home;