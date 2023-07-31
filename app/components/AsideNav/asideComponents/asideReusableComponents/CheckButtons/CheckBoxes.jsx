import styles from "./CheckBoxes.module.css"
const CheckBoxes = () => {
    return (
        <>
            <div className={styles.checkBox_buttons_container}>
                <div className={styles.checkBox_button_wrapper}>
                    <input type="checkbox" name="price_range" className={styles.checkBox} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
                <div className={styles.checkBox_button_wrapper}>
                    <input type="checkbox" name="price_range" className={styles.checkBox} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
                <div className={styles.checkBox_button_wrapper}>
                    <input type="checkbox" name="price_range" className={styles.checkBox} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
                <div className={styles.checkBox_button_wrapper}>
                    <input type="checkbox" name="price_range" className={styles.checkBox} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
            </div>
        </>
    );
}
 
export default CheckBoxes;