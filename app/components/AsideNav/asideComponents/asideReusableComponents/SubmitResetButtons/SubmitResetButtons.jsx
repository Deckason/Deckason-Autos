import styles from "./SubmitResetButtons.module.css"
import Link from "next/link";
const SubmitResetButtons = () => {
const search = ""
    return (

        <>
            <div className={styles.reset_submit_buttons}>
                <Link href={""} className={``} onClick={()=>{""}}>Clear</Link>
                <Link href={{pathname: "/search", query: {search: search}}} className={``}>Apply</Link>
            </div>
        </>
    );
}
 
export default SubmitResetButtons;