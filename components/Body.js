import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import { products_API } from "./Config";
import ProductCard from "./productCard";
import { Link } from "react-router-dom";

const Body = ()=>{

    const [allproducts,setallproducts]=useState([]);


    useEffect(()=>{
        getproducts();

    },[])

    async function getproducts(){
        const resdata = await fetch(products_API);
        const resjson = await resdata.json();
        // console.log("resjson"+resdata)
        setallproducts(resjson.products);

    }


    return (allproducts?.length===0 )? <h1>NO ITEMS FOUND </h1> : (
        <>
        <h1>Body</h1>
        {allproducts.map(prod=>  {
            // {console.log("body")}

           
            return (
                <Link to={"/products/"+prod.id}>
                               
                <ProductCard {...prod}/>
                </Link>
                   
               )
        })}
        

        </>
    )
}

export default Body;