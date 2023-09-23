import React from "react";
import Product from "../components/Product/product";
import ProductCount from "../components/Product/ProductCount";
import Navbar from "../components/Navbar"

const ProductPage =()=>{
    return(
        <div className='container__productPage'>
            <Navbar/>
            <h1 className='productPage__title'>PRODUCTO</h1>
            <Product />
            <ProductCount/>
        </div>
    )
}