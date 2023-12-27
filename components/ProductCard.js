import React from "react";


const ProductCard = ({title,description,price,thumbnail,rating})=>{
    return (
        <>      
        <div className="card">
        
        <div className="image-container">
            {console.log("ASDF")}
            <img
                className="zoom-image"
                src={thumbnail}
                alt="Your Image"
            />
        </div>
        {/* <img src={thumbnail}/> */}
            
        <h3> Name : {title} </h3>
        <h3>  {description.slice(0,15)+"...more"}</h3>
        <h3 style={{colour:"green"}}> Price: {price }</h3>
        <h3> Rating : {rating}</h3>
        </div>
        </>
    );
};


export default ProductCard;