"use client"
import React from 'react'
import styles from "./search.module.css"
import AsideNav from '../components/AsideNav/AsideNav'
import {useSearchParams} from "next/navigation"
import {useState, useEffect} from "react"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../utils/firebaseConfiguration";
import CardSkeleton from "../components/products/cardSkeleton/CardSkeleton";
import Products from "../components/products/Products";

const SearchPage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const collectionRef = collection(db, "Cars") 

    const searchParams = useSearchParams()
    const search = searchParams.get("search")
    const searchParam = [search]

    const navSearch = async ()=>{
        try{
            const querySnap = await getDocs(collectionRef)
            const results = []

            querySnap.docs.forEach(doc=>{
                const data = {...doc.data(), id: doc.id}

                const matchFound = Object.keys(data).some(key=>{
                    if (key !== "productImages") {
                        const fielValue = data[key]
                        return searchParam.some(param=>{
                            param = param.toString().toLowerCase()
                            if (typeof fielValue !== "boolean" && fielValue.toString().toLowerCase().includes(param)) {
                                return true
                            }
                            return false
                        })
                    }
                })

                if (matchFound) {
                    results.push({...data})
                }
                console.log(results.length)
            })
            console.log(results)
            setProducts(results)
            setIsLoading(false)
        }catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        navSearch()
    },[search])


    
  return (
    <div className={`container ${styles.search_container}`}>
        <div className={`aside_container ${styles.aside_container}`}>
            <AsideNav navData={products}/>
        </div>
        <div className={`product_container ${styles.product_container}`}>

            {isLoading && <CardSkeleton />}
            {products.length > 0 ?
            <Products page={`Results for ${searchParam}`} products={products}/>:
            <Products page={"Result not found"} products={products}/>}
                
        </div>
    </div>
  )
}

export default SearchPage