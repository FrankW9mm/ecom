import React, { use } from 'react'
import Header from '../components/Header';
import axios from 'axios'
import { useState, useEffect } from 'react';
// import { products } from '../data/products'
import './header.css';
import './HomePage.css';
const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
      getProduct();

    axios.get('http://localhost:3000/api/cart-items')
    .then((response)=>{
      setCart(response.data);
      
    })
        
  },[]);

  const getProduct = async()=> {
    const response = await fetch('http://localhost:3000/api/products');
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
        <div className="products-grid">


          {product.map((singleProduct) => {
            return (
              <div key={singleProduct.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image"
                    src={singleProduct.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {singleProduct.name}
                </div>

                <div className="product-rating-container">
                  <img className="product-rating-stars"
                    src={`images/ratings/rating-${singleProduct.rating.stars *10}.png`} />
                  <div className="product-rating-count link-primary">
                    {singleProduct.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  ${(singleProduct.priceCents /100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            )

              ;
          })}

          
        </div>
      </div>
    </>
  )
}

export default HomePage