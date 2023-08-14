import React from 'react'
import styles from "./ProductDetailsSkeleton.module.css"

const ProductDetailsSkeleton = () => {
  return (
    <div className={styles.skeleton}>
        <h2></h2>
        <div className={styles.details}>
        {[...Array(5).keys()].map(i=>(
            <p key={i}></p>
        ))}
        </div>
    </div>
  )
}

export default ProductDetailsSkeleton