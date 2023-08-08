"use client"
import Image from "next/image";
import styles from "./ProductPreview.module.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const ProductPreview = ({images}) => {

    const [imgIndex, setImgIndex] = useState(0)

    const numOfImgs = images?.length;
    const nextImg = ()=>{
        if (imgIndex === (numOfImgs-1)) {
            setImgIndex(numOfImgs-1)
        }else{
            setImgIndex(imgIndex+1)
        }
    }
    
    const prevImg = ()=>{
        if (imgIndex === 0) {
            setImgIndex(0)
        }else{
            setImgIndex(imgIndex-1)
        }
    }

    return (
        <>
        <div className={styles.preview_container}>
            {images &&
            <div className={styles.preview_slider}>
                <Image
                    src={images[imgIndex]}
                    width={500}
                    height={100}
                    alt="Img"
                />
                <div className={styles.arrow_nav}>
                    <span className={styles.left_arrow} onClick={prevImg}><FaArrowLeft /></span>
                    <span className={styles.right_arrow} onClick={nextImg}><FaArrowRight /></span>
                </div>
            </div>}
            <div className={styles.preview_wrapper}>
                {images?.map((image,key)=>(
                    <div className={`${styles.preview} ${images.indexOf(image) == imgIndex ? styles.currentImg:""}`} 
                        key={key} onClick={()=>setImgIndex(images.indexOf(image))}>
                        <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="img"
                        />
                    </div> ))
                }
            </div>
        </div>
        </>
    );
}
 
export default ProductPreview;