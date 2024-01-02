import { useEffect, useState } from "react"

const useGetProductDetail = (id)=>{

    const [prodde,setprodde] = useState();

    useEffect(()=>{
        getProductDetail();

    },[])   

    async function getProductDetail(){
        const prod = await fetch(products_API+"/"+id);
        const prodjson = await prod.json();
        setprodde(prodjson);
        return prodde;
        // console.log("from api "+ prodjson)
    }
}



export default useGetProductDetail;

