import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { products_API } from "./Config";

const ProductDetail = () =>{

    const {id} = useParams();
    const [proddetail , setproddetail]= useState([])

    useEffect(()=>{

        getProductDetail();
    },[])

    async function getProductDetail(){
        const prod = await fetch(products_API+"/"+id);
        const prodjson = await prod.json();
        setproddetail(prodjson);
        // console.log("from api "+ prodjson)
    }



    return (setproddetail.length===0) ? (<h1>Loading....</h1>) : (
        <>
        <h1>PROD DETILAS ...........</h1>
        <h1>PRODUCT ID : {id}</h1>
        <h1> {proddetail.title}</h1>
        <img src={proddetail.images}/>

        </>

    )
}

export default ProductDetail;