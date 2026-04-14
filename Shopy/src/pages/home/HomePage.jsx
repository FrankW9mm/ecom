import React, { use } from 'react'
import ProductGrid from './ProductGrid';
import Header from '../../components/Header';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { formatMoney } from '../../utils/money';
// import { products } from '../data/products'
import '../header.css';
import './HomePage.css';
const HomePage = ({ cart }) => {

  const [product, setProduct] = useState([]);
  

  useEffect(()=>{
      getProduct();

    
        
  },[]);

  const getProduct = async()=> {
    const response = await fetch('/api/products');
    const product = await response.json();
    console.log(product);
    setProduct(product);
  }

  // const test=getProduct();
  // console.log(test);
  
  
  return (
    <>
      <title>Ecomerce</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid product={product} />
      </div>
    </>
  )
}

export default HomePage