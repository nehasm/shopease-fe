import React ,{ useEffect } from 'react';
import Container from './container';
import store from './store';
import { getUserData } from './service/user';
import { getCart } from './service/cart';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
    store.dispatch(getUserData());
    store.dispatch(getCart())
  },[])
  
  return <>
  <Container/>
  <ToastContainer position="bottom-left" autoClose={2000} toastStyle={{ color: "#000" }} />
  </>
    
}

export default App