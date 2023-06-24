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
import Address from './routes/address';
import CheckoutWrapper from './component/cart/checkoutwrapper';
import Aboutus from './component/infocomponents/aboutus';
import Contactus from './component/infocomponents/contactus';
import Story from './component/infocomponents/story';
import Tersmofuse from './component/infocomponents/termofuse';
import Faq from './component/infocomponents/faq';
import Privacy from './component/infocomponents/privacy';
import CancelPolicy from './component/infocomponents/cancelpolicy';
import Shipping from './component/infocomponents/shipping';
import Trackorder from './component/infocomponents/trackorder';
import Paymentpolicy from './component/infocomponents/paymentpolicy';


const router = createBrowserRouter([
  { path:'/',
  element: <Main />,
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
    path: 'checkout',
    element: <CheckoutWrapper />,
    children: [
      { path : 'summary', 
      element: <Checkout/>
      },
      {
        path:'address',
        element: <Address />
      },
      {
        path:'payment',
        element: <Payment />
      },
    ]
  },
  {
    path: "wishlist",
    element: <WishList/>
  },
  { path : 'orders', 
  element:<Orders/>
  },
  {
    path:'success',
    element: <Success />
  },
  {
    path: 'about-us',
    element: <Aboutus />
  },
  {
    path: 'contact-us',
    element: <Contactus />
  },
  {
    path: 'story',
    element: <Story />
  },
  {
    path:'terms-of-use',
    element: <Tersmofuse />
  },
  {
    path: 'faq',
    element: <Faq />
  },
  {
    path: 'privacy',
    element: <Privacy />
  },
  {
    path: 'cancellations',
    element: <CancelPolicy />
  },
  {
    path:'shipping',
    element:<Shipping />
  },
  {
    path:'track-orders',
    element: <Trackorder />
  },
  {
    path:'payments-policy',
    element: <Paymentpolicy />
  }
]);


function Container(props) {
  return <RouterProvider router={ router }/>
}

export default Container;