"use client"
import { set, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import styles from "./ProductForm.module.css"
import { useAppContext } from "@/app/context/ContextProvider";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import Image from "next/image";
import { useEffect, useState} from "react";
import { storage } from "@/app/utils/firebaseConfiguration"

const ProductForm = () => {
    const {collectionRef, addDocument, isLoading, setIsLoading, singleDoc, updateDocument,
            handleErrMsg, err, setErr, errMsg, setErrMsg} = useAppContext()
    const [files, setFiles] = useState([])
    const [progress, setProgress] = useState("")
    const [productImages, setProductImages] = useState([])

    const schema = yup.object().shape({
        state: yup.string().required("State is required!"),
        lga: yup.string(),
        region: yup.string(),
        price: yup.number().typeError("This should be price format!").required("Price is required!").positive("Price cannot be negative!").integer("Decimals are not allowed!"),
        make: yup.string().required("Car make is required!"),
        model: yup.string().required("Car Model is required!"),
        year: yup.number().typeError("This should be year format!").required("Year is required!").min(4)
                .positive("Year cannot be negative!").integer("Decimals are not allowed!"),
        condition: yup.string().required("Car condition is required!"),
        body: yup.string(),
        mileage: yup.string(),
        fuel: yup.string(),
        registrationStatus: yup.string(),
        transmission: yup.string(),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })
    
    const uploadDocImages = async(array, id)=>{
        try {
            for (let i = 0; i < files.length; i++) {
                const imageRef = ref(storage, `images/${id}/${Date.now()}${files[i].name}`)
                const uploadImg = await uploadBytesResumable(imageRef, files[i])
                .then((snapshot)=>{
                    // console.log(snapshot.bytesTransferred)
                    // setProgress((snapshot.bytesTransferred / snapshot.totalBytes)*100)
                    getDownloadURL(snapshot.ref).then((url)=>{
                        array.push(...[url])
                    //    setProductImages(prev=>[...prev, url])
                        
                        // updateImages?console.log("Images url updated"):console.log("Images url not updated")
                    }).catch(err=>{
                        setIsLoading(false)
                        setErr(true)
                        setErrMsg(err.message)
                        console.log(err.message)
                    })
                }).catch((err)=>{
                    setIsLoading(false)
                    setErr(true)
                    setErrMsg(err.message)
                    console.log(err.message)
                })
            }
            updateDocument(id, {
                productImages: array,
            }).then(res=>{
                console.log("Urls added completed")
            }).catch(err=>{
                setIsLoading(false)
                setErr(true)
                setErrMsg(err.message)
                console.log(err.message)
            })
            
        } catch (error) {
            setIsLoading(false)
            setErr(true)
            setErrMsg(error)
            console.log(error)
        }
    }
    
    const submit = async (data)=>{
        data = {...data, productImages: []}
        try {
            setIsLoading(true)
            setErr(false)
            let urlArray = []

           if (files.length>0) {

                const doc = await addDocument(collectionRef, data)

                if (doc) {
                    const docId = doc.id;
                    const imgesUploaded = await uploadDocImages(urlArray, docId)
                }else{
                    setIsLoading(false)
                    setErr(true)
                    setErrMsg("Image-is-empty")
                }

                setIsLoading(false)
                document.querySelector("form").reset()
                setFiles([])
                data={}
            }else{
                setIsLoading(false)
                setErr(true)
                setErrMsg("Image-is-empty")
                console.log(data)
           }
        } catch (error) {
            setIsLoading(false)
            setErr(true)
            handleErrMsg(error)
            console.log(error)
        }
        
    }

    const previewImages = (e)=>{
        const file = e.target.files
        for (let i = 0; i < file.length; i++) {
            setFiles(prev=> [...prev, file[i]])
        }
    }

    return (
        <div className={styles.postProduct}>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <h1>Post Product</h1>
                {err&&<p className="errMsg">{errMsg}</p>}
                <div className={styles.form_inputs}>
                    <div className={`${styles.location} ${styles.inputCategory}`}>
                        <h4>Location</h4>
                        <label htmlFor="State">
                            <input type="text" placeholder="State*" {...register("state")}/>
                            <small className={styles.errors}>{errors.state?.message}</small>
                        </label>
                        <label htmlFor="L.G.A">
                            <input type="text" placeholder="L.G.A" {...register("lga")}/>
                            <small className={styles.errors}>{errors.lga?.message}</small>
                        </label>
                        <label htmlFor="Region">
                            <input type="text" placeholder="Region" {...register("region")}/>
                            <small className={styles.errors}>{errors.region?.message}</small>
                        </label>
                    </div>
                    <div className={`${styles.price} ${styles.inputCategory}`}>
                    <h4>Price</h4>
                        <label htmlFor="">
                            <input type="number" placeholder="Price*" {...register("price")}/>
                            <small className={styles.errors}>{errors.price?.message}</small>
                        </label>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Make</h4>
                        <label htmlFor="">
                            <input type="text" placeholder="Car Make*" {...register("make")}/>
                            <small className={styles.errors}>{errors.make?.message}</small>
                        </label>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Model</h4>
                        <label htmlFor="">
                            <input type="text" placeholder="Model*" {...register("model")}/>
                            <small className={styles.errors}>{errors.model?.message}</small>
                        </label>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Year</h4>
                        <label htmlFor="">
                            <input type="number" min={1900} max={2099} step={1} placeholder="Year*" {...register("year")}/>
                            <small className={styles.errors}>{errors.year?.message}</small>
                        </label>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Condition</h4>
                    <select className={styles.select_option} 
                        {...register("condition")}
                    >
                        <option hidden value={""}>Select Condition*</option>
                        
                        <option value="New">New</option>
                        <option value="Foreign used">Foreign Used</option>
                        <option value="Nigerian used">Nigerian Used</option>
                    </select>
                    <small className={styles.errors}>{errors.condition?.message}</small>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Body</h4>
                        <label htmlFor="">
                            <input type="text" placeholder="Body" {...register("body")}/>
                            <small className={styles.errors}>{errors.body?.message}</small>
                        </label>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Mileage</h4>
                        <label htmlFor="">
                            <input type="number" placeholder="Mileage" {...register("mileage")}/>
                            <small className={styles.errors}>{errors.mileage?.message}</small>
                        </label>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Fuel</h4>
                        <select className={styles.select_option}
                            {...register("fuel")}
                        >
                            <option hidden value={""}>Select Fuel type</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Electric">Electric</option>
                        </select>
                        <small className={styles.errors}>{errors.fuel?.message}</small>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                    <h4>Registration Status</h4>
                        <select className={styles.select_option}
                            {...register("registrationStatus")}
                        >
                            <option hidden value={""}>Select registration status</option>
                            <option value="registered">Registered</option>
                            <option value="unRegistered">Not Registered</option>
                        </select>
                        <small className={styles.errors}>{errors.registrationStatus?.message}</small>
                    </div>
                    <div className={`${styles.inputCategory}`}>
                        <h4>Transmission</h4>
                        <select className={styles.select_option}
                            {...register("transmission")}
                        >
                            <option hidden value={""}>Select transmission</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                        </select>
                        <small className={styles.errors}>{errors.transmission?.message}</small>
                    </div>
                    <div className={`${styles.image_input} ${styles.inputCategory}`}>
                    <h4>Images</h4>
                        <label htmlFor="">
                            <input type="file" multiple="multiple" className={`images`} onChange={previewImages}
                            />
                            <button className={`btn`} onClick={()=>{setFiles([])}}>Clear Images</button>
                        </label>
                    </div>
                </div>
                <div className={styles.preview_wrapper}>
                    {files && files.map((file,key)=>(
                        <div className={styles.preview} key={key}>
                            <Image
                            src={URL.createObjectURL(file)}
                            width={1}
                            height={1}
                            alt="file"
                            />
                            </div> )
                            )
                    }
                </div>
                <div className={styles.submit_button_container}>
                        <button className={`btn ${styles.submit}`}
                            // onClick={()=>{document.querySelector(".images").value==""?alert("Atleast one image is required!"):{}}}
                        >{isLoading?"Loading...":"Submit"}
                        </button>
                    </div>
                    {/* <div className={styles.preview_wrapper}>
                    {productImages &&
                        productImages.map((url, key)=>(
                            <div className={styles.preview} key={key}>
                                <Image
                                    src={url}
                                    width={1}
                                    height={1}
                                    alt="productImages"
                                    />
                            </div>
                        ))
                    }</div> */}
                    {/* <progress value={progress} max={100}>{progress}%</progress> */}
                    {/* <p>progress: {progress}% url={productImages}</p> */}
            </form>
        </div>
    );
}
 
export default ProductForm;