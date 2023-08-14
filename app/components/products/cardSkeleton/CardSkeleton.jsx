import React from 'react'
import styles from "./cardSkeleton.module.css"

const CardSkeleton = () => {
  return (
    <div className={styles.skeleton}>
        {[...Array(10).keys()].map(i=>(
            <div className={styles.skeleton_card} key={i}>
            <div className={styles.skeleton_img}>
            </div>
            <div className={styles.skeleton_description}>
                <h4 className={styles.skeleton_name}></h4>
                <div className={styles.other_details}>
                    <div className={styles.left_details}>
                        <p className={styles.skeleton_location}></p>
                        <p className={styles.skeleton_mileage}></p>
                    </div>
                    <div className={styles.right_details}>
                        <p className={styles.skeleton_condition}></p>
                        <p className={styles.skeleton_register}></p>
                    </div>
                </div>
                <div className={styles.price}>
                    <p>{styles.skeleton_price}</p>
                    <p className={styles.skeleton_btn}></p>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default CardSkeleton