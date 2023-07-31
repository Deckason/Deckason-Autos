import styles from "./RadioButtons.module.css"
const RadioButtons = () => {
    return (
        <>
            <div className={styles.radio_buttons_container}>
                <div className={styles.radio_button_wrapper}>
                    <input type="radio" name="price_range" className={styles.radio} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
                <div className={styles.radio_button_wrapper}>
                    <input type="radio" name="price_range" className={styles.radio} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
                <div className={styles.radio_button_wrapper}>
                    <input type="radio" name="price_range" className={styles.radio} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
                <div className={styles.radio_button_wrapper}>
                    <input type="radio" name="price_range" className={styles.radio} />
                    <p>{"search range"}</p>
                    <p>{`X products`}</p>
                </div>
            </div>
        </>
    );
}
 
export default RadioButtons;