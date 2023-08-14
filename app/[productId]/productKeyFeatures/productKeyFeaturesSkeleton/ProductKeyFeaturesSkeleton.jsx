import React from 'react'
import styles from "./productKeyFeaturesSkeleton.module.css"

const ProductKeyFeaturesSkeleton = () => {
  return (
    <div className={styles.skeleton}>
        <div className={styles.primary_features}>
            {[...Array(3).keys()].map(i=>(
                <p key={i}></p>
            ))}
        </div>
        <div className={styles.secondary_features}>
            {[...Array(3).keys()].map(i=>(
                <p key={i}></p>
            ))}
        </div>
        <div className={styles.contact_for_product}>
            {[...Array(2).keys()].map(i=>(
                    <p key={i}></p>
                ))}
        </div>
    </div>
  )
}

export default ProductKeyFeaturesSkeleton