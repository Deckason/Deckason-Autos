import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const AsideHeader = ({boxStatus, header}) => {

    return (
        <>
            <h5 className={`aside_title`}>{header}</h5>
            {boxStatus?
                <h5 className={`aside_icon`}><FaArrowUp /></h5>:
                <h5 className={`aside_icon`}><FaArrowDown /></h5>
            }
        </>
    );
}
 
export default AsideHeader;