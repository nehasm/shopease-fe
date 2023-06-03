import React from 'react'
import ProductCard from './productcard';
import './products.css';

const Products = (props) => {
  let productPresent = props.products.length > 0;
  return <div className='products'>
  { productPresent
  ? (props.products.map(product => <ProductCard key={product._id} product={product}/>))
  : 
  <div class="product-not-found">
  <h2>Product not found</h2>
  <p>We're sorry, but the product you are looking for is currently unavailable.</p>
  </div> 
  }
</div>
    
}

export default Products