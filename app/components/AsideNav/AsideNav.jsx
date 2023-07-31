import styles from "./AsideNav.module.css"
import Location from "./asideComponents/Location/Location";
import Price from "./asideComponents/Price/Price";
import Make from "./asideComponents/Make/Make"
import Model from "./asideComponents/Model/Model"
import Year from "./asideComponents/Year/Year";
import Condition from "./asideComponents/Condition/Condition";
import BodyType from "./asideComponents/BodyType/BodyType";
import Mileage from "./asideComponents/Mileage/Mileage";
import Fuel from "./asideComponents/Fuel/Fuel";
import Registered from "./asideComponents/Registered/Registered";
import Transmission from "./asideComponents/Transmission/Transmission";

const AsideNav = () => {
    return (
        <>
           <aside className={`aside ${styles.aside}`}>
                <Location />
                <Price />
                <Make />
                <Model />
                <Year />
                <Condition />
                <BodyType />
                <Mileage />
                <Fuel />
                <Registered />
                <Transmission />
           </aside>
        </>
    );
}
 
export default AsideNav;