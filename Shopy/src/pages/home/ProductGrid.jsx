import React, { useState } from 'react'
import { formatMoney } from '../../utils/money'
import axios from 'axios'
import Products from './Products'
const ProductGrid = ({product, loadCart}) => {
    
  return (
    <div className="products-grid">


          {product.map((singleProduct) => {
            
            return (
              <Products key={singleProduct.id} singleProduct={singleProduct} loadCart={loadCart} />
            )

              ;
          })}

          
        </div>
  )
}

export default ProductGrid