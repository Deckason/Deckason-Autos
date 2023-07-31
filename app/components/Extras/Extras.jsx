import { MdClose } from "react-icons/md";
import AsideNav from "../AsideNav/AsideNav";
import styles from "./Extras.module.css"
const Extras = ({extras, setExtras}) => {
    return (

        <>
            <div className={`${styles.extras} ${extras?styles.open_extras:styles.close_extras}`}>
                <div className={styles.exit_extras}>
                    <MdClose onClick={()=>{setExtras(false)}} className={styles.close_icon}/>
                </div>
                <AsideNav />
            </div>
        </>
    );
}
 
export default Extras;