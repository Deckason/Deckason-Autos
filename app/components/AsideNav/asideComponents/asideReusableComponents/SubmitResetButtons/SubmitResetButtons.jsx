import styles from "./SubmitResetButtons.module.css"
const SubmitResetButtons = () => {
    return (

        <>
            <div className={styles.reset_submit_buttons}>
                <button type="submit" className={`btn`}>Clear</button>
                <button type="submit" className={`btn`}>Submit</button>
            </div>
        </>
    );
}
 
export default SubmitResetButtons;