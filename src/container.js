import React, { useEffect, useState } from 'react'; 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'; 
import Main from './routes/main';
import Product from './routes/product';
import Checkout from './routes/checkout';
import Error from './component/common/error';
import ProductsMain from './component/products/productsmain';
import LoginRoute from './routes/login';
import ForgotPasswordForm from './component/account/forgotpasswordform';
import ResetPassword from './component/account/resetpassword'
import Profile from './routes/profile';
import EditProfile from './component/user/editprofile';
import ChangePassword from './component/user/changepassword';
import ProfileData from './component/user/profileData';
import Cart from './routes/cart';
import WishList from './routes/wishlist';
import Orders from './routes/orders';
import Payment from './routes/payment';
import Success from './routes/success';


const router = createBrowserRouter([
  { path:'/',
  element: <Main />,
  errorElement: <Error/>,
  children:[
    {
      path: '/',
      element: <ProductsMain/>
    },
    {
      path : ':searchTerm',
      element:<ProductsMain/>
    },
    {
      path:'product',
      children: [
        { path : ':id', element: <Product />},
      ]
    },
  ]
  }, 
  {
    path:'login',
    element:<LoginRoute/>,
  },
  {
    path: 'forgotpassword',
    element: <ForgotPasswordForm />
  },
  {
    path:'password/reset/:token',
    element: <ResetPassword />
  },
  {
    path:'profile',
    element: <Profile />,
    children: [
      { path: '',element:<ProfileData/>},
      { path: 'edit', element:<EditProfile />},
      { path:'changepassword',element:<ChangePassword/>}
    ]
  },
  {
    path: "cart",
    element: <Cart/>
  },
  {
    path: "wishlist",
    element: <WishList/>
  },
  { path : 'checkout', 
  element:<Checkout/>
  },
  { path : 'orders', 
  element:<Orders/>
  },
  {
    path:'payment',
    element: <Payment />
  },
  {
    path:'success',
    element: <Success />
  }

]);


function Container(props) {
  return <RouterProvider router={ router }/>
}

export default Container;