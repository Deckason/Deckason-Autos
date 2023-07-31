import styles from "./MinMax.module.css"
const MinMax = () => {
    return (
        <>
            <div className={styles.min_max_input}>
                <input type="number" name="min" placeholder="min" />
                <span>-</span>
                <input type="number" name="max" placeholder="max" />
            </div>
        </>
    );
}
 
export default MinMax