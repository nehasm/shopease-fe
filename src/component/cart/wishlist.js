import React from 'react'

const Wishlist = (props) => {
    const removeProductFromWishListHandler = () => {
        return props.removeProductFromWishList(props.product.product);
    }
  return (
    <div>
    {props.product.name}
    <button onClick={removeProductFromWishListHandler}>Remove from wishlist</button>
  </div>
  )
}

export default Wishlist