import React from "react";
import './products.css';
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { price,discount } = props.product;
    const priceWithNoDiscount = Math.round(discount ? price * 100 / (100 - discount) : price);
  return (
    <Link to={`/product/${props.product._id}`} className="product-card-main">
    <span className="product-card-img" style={{backgroundImage: `url(${props.product.images[0].url})`}}>
        </span>
    <span className="card-text">
        <span>
            <span className="product-card-brand-name">{props.product.brandName}</span> 
            <span className="product-card-rating">{props.product.ratings} <AiFillStar/> {`| ${props.product.numOfReviews}`}</span>
        </span> 
        <p>{props.product.name}</p>
        {/* <Rating {...options} /> */}
        <span>{`₹${price}`} <span className="price-without-discount-text">{`₹${priceWithNoDiscount}`}</span> {`(${discount}%)`}</span>
        </span>
  </Link>
  )
}

export default ProductCard