"use client"
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/ContextProvider";
import ProductForm from "./ProductForm/ProductForm";
import { authentication } from "../utils/firebaseConfiguration";

const PostProduct = () => {
    const { isVerified} = useAppContext()
    const {push} = useRouter()
    console.log(authentication.currentUser)
    return (
        <>
            {authentication.currentUser?<ProductForm />:push("/auth")}
            {/* {!isVerified && <h1>Not Yet Verified</h1>} */}
        </>
    );
}
 
export default PostProduct;