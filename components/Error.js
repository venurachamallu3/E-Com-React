import { useRouteError } from "react-router-dom"
import React from "react";

const Error = () =>{

    const Err = useRouteError();
    return (
        <>
        <h1> OOPS !!</h1>
        </>
    );
};
export default Error;
