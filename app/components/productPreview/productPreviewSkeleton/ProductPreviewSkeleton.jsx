import React from 'react'
import styles from "./ProductPreviewSkeleton.module.css"

const ProductPreviewSkeleton = () => {
    
  return (
    <div className={styles.skeleton}>
        <div className={styles.preview_slider}></div>
        <div className={styles.preview_wrapper}>
            {[...Array(5).keys()].map(i=>(
                <p key={i}></p>
            ))}
        </div>
    </div>
  )
}

export default ProductPreviewSkeleton