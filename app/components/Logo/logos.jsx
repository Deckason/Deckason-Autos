import styles from "./Logos.module.css"
import acura from "../../../public/media/car logos/acura-logo.png"
import alfa_romeo from "../../../public/media/car logos/alfa-romeo-logo.png"
import aston_martin from "../../../public/media/car logos/Aston-Martin-logo-2003-6000x3000.png"
import audi from "../../../public/media/car logos/audi-logo-2016.png"
import basic_motor from "../../../public/media/car logos/BAIC-Motor-logo-2560x1440.png"
import bentley from "../../../public/media/car logos/bentley-logo-1700x950.png"
import bmw from "../../../public/media/car logos/bmw-logo-2020-gray-download.png"
import bugatti from "../../../public/media/car logos/bugatti-logo.png"
import buick from "../../../public/media/car logos/buick-logo.png"
import cadillac from "../../../public/media/car logos/cadillac-logo-2014.png"
import Chevrolet from "../../../public/media/car logos/Chevrolet-logo-2013-640x281.jpg"
import Image from "next/image"


const Logos = () => {
    return (
        <>
        <div className={styles.logo}>
            <h1 className={styles.background_text}>
                CAR MODELS
            </h1>
            <div className={styles.model_section}>
                <h1>CAR MODELS</h1>
                <div className={styles.logo_container}>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={acura}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={alfa_romeo}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={aston_martin}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={audi}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={basic_motor}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={bentley}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={bmw}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={bugatti}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={buick}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={cadillac}
                        />
                    </div>
                    <div className={styles.logo_img_container}>
                        <Image
                            src={Chevrolet}
                        />
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}
 
export default Logos;