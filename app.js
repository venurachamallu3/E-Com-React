import React from "react";
import ReactDOM  from "react-dom/client";

import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";

import { createBrowserRouter ,Router,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";


const AppLayout = ()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}


const AppRoute = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/gallery',
                element:<Error/>
            },
            
            
        ]
        
    },
    {
        path:'/products/:id',
        element:<ProductDetail/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])





const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>);
