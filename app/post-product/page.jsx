import { useRouter } from "next/navigation";
import ProductForm from "./ProductForm/ProductForm";
import { authentication } from "../utils/firebaseConfiguration";

const PostProduct = () => {
    // const { isVerified} = useAppContext()
    // const {push} = useRouter()
    // console.log(authentication.currentUser)
    return (
        <>
            <ProductForm />
        </>
    );
}
 
export default PostProduct;