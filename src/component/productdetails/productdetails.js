import React, { useEffect, useState } from 'react';
import './productdetails.css';
import { AiFillStar,AiOutlineHeart ,AiFillHeart} from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { HiArrowSmallRight } from 'react-icons/hi2'
import { offerList } from '../../constant'
import { MdStars } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {MdOutlineDeleteOutline} from 'react-icons/md'
 
const ratingsDisplayArr = [
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':5
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':4
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':3
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':2
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':1
    },
]

const ProductDetails = (props) => {
    const [ratingsDisplayList,setRatingsDisplayList] = useState(JSON.parse(JSON.stringify(ratingsDisplayArr)));
    const { price,discount } = props.product;
    const navigate = useNavigate();
    const isProductPresentInWishlist = props.productPresentInWishlist ? true : false;
    const [isProductPresentInCart,setIsProductPresentInCart] = useState(false);
    const priceWithNoDiscount = Math.round(discount ? price * 100 / (100 - discount) : price);
    useEffect(()=>{
        if(props.cartData) {
            setIsProductPresentInCart(typeof(props.cartData.find(cart=>cart.product === props.product._id)) !== 'undefined') 
        }
        let ratingarr = ratingsDisplayList;
        props.product.reviews.map(element => {
            let rating = Math.floor(element.rating);
            let index = ratingarr.findIndex(val => val.rating === rating)
            ratingarr[index].reviewCount++;
        });
        ratingarr.map(element => element.reviewPercentage = ( element.reviewCount/props.product.numOfReviews)*100);
        setRatingsDisplayList(ratingarr);
    },[])
    const date = new Date()
    const addItemInCart = () => {
        let productData = {
            name : props.product.name,
            price: props.product.price,
            image:props.product.images[0].url,
            quantity:1,
            discount:props.product.discount,
        }
        navigate('/cart');
        return props.addItemInCartHandler(props.product._id,productData);
    }
    const placeOrder = () => {
        const orderItems = [
            {
                "product":props.product._id,
                "name":props.product.name,
                "price":props.product.price,
                "quantity":1,
                "image":props.product.images[0].url
            }
        ]
        return navigate('/checkout/summary',{state:{orderItems}})
    }
    const addToWishlist = () => {
        if(isProductPresentInWishlist) {
            navigate('/wishlist');
            return
        }
        let productData = {
            name : props.product.name,
            price: props.product.price,
            image:props.product.images[0].url,
            ratings:props.product.ratings,
            product:props.product._id
        }
        return props.addItemInWishlistHandler(productData)
    }
    const deleteReview = (id) => {
        return props.deleteReviewHandler(props.product._id,id);
    }
  return (
    <div className='product-detail-main'>
        <div className='product-imgs'>
        <span>{props.product.images.map(img => <span className='product-img-list' style={{backgroundImage: `url(${img.url})`}}></span>)}</span>
        <img className="product-img" src={props.product.images[0].url} alt='Main product'/>


        </div>
        <div className='product-text'>
            <h5 className='brand-name'>{props.product.brandName}</h5>
            <h4 className='product-title'>{props.product.name}</h4>
            <div className='product-rating-header'>
                <span className='product-rating-header-box'>
                <span>{props.product.ratings}</span>
                <AiFillStar/> 
                <span className='divider'>|</span>
                <span>{props.product.numOfReviews}</span>
                </span>
                <span className="wishlist-btn" onClick={addToWishlist}>{isProductPresentInWishlist ? <AiFillHeart/> : <AiOutlineHeart />} <span>{isProductPresentInWishlist ? `Added to` : `Add to`}  Wishlist</span></span>
            </div>
            <div className='product-price-main'>
                <h4 className='product-price'>{`₹${props.product.price}`}</h4>
                <h6 className='product-price-without-discount'>{priceWithNoDiscount}</h6>
                <h5 className='product-discount'>{`(${props.product.discount}% off)`}</h5>
            </div>
            <p className='include-tax'>inclusive of all taxes</p>
            <div className='cart-wishlist-btn'>
                {isProductPresentInCart ? <Link to={'/cart'}><button>Go to Cart  <HiArrowSmallRight/> </button></Link> : <button onClick={addItemInCart}><BsFillCartFill />Add to Cart</button>}
                <button onClick={placeOrder}>Buy Now</button>
            </div>
            <div className='delivery-options'>
                <div>DELIVERY OPTIONS</div>
                <form>
                <span>
                    <input placeholder='Enter pincode'></input>
                    <button>check</button></span>
                </form>
                <p>Please enter PIN code to check delivery time & Delivery charges</p>
                <span>
                    <p>100% Original Products</p>
                    <p>You can return the product within 14 days if the delivered product is damaged, expired, different from ordered.
                    </p>
                </span>
            </div>
            <div className='offers-list'>
                <h6>OFFERS</h6>
                <ul>
                {offerList.map(offer => <li dangerouslySetInnerHTML={{__html: offer.text}}></li>)}
                </ul>
            </div>
            <div className='product-details'>
                <h6>ProductDetails</h6>
                <span>{props.product.description}</span>
            </div>
            <div className='product-ratings'>
                <span><h6>RATINGS</h6><MdStars /></span>
                <div >
                    <div className='ratings-total'> 
                        <span><span>{props.product.ratings}</span> <AiFillStar/> </span>
                        <span>{props.product.numOfReviews} verified Buyers</span>
                    </div>
                    <div className='ratings-split'>
                        {ratingsDisplayList.map(val => <span>{val.rating} <AiFillStar/> <span className='rating-progress'><span style={{width:`${val.reviewPercentage}px`}}></span></span>{val.reviewCount} </span> )}
                    </div>

                </div>
            </div>
            <div className='customer-reviews'>
                <h6>CUSTOMER REVIEWS</h6>
                {props.product.reviews.map(review => 
                <div>
                    <span>
                        <span>{review.rating}</span>
                        <AiFillStar />
                    </span>
                <div>
                    <span>{review.comment}</span>
                    <span>
                        <span>{review.name}</span>
                        <span>|</span>
                        <span>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</span>
                    </span>
                </div>
                {props?.userId ?.toString() === review?.user?.toString() && <span onClick={()=>deleteReview(review._id)} className="reviewdeletebtn"><MdOutlineDeleteOutline /></span>}
                </div>
                )}

            </div>
        </div>
    </div>
  )
}

export default ProductDetails