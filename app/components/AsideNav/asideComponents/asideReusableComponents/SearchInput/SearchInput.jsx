import { FaSearch } from "react-icons/fa";
import styles from "./SearchInput.module.css"
const SearchInput = ({searchTitle}) => {
    return (
        <>
            <div className={styles.search_input}>
                <FaSearch className={styles.searchIcon}/>
                <input type="text" name="" placeholder={searchTitle} />
            </div>
        </>
    );
}
 
export default SearchInput;