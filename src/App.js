import React ,{ useEffect } from 'react';
import Container from './container';
import store from './store';
import { getUserData } from './service/user';
import { getCart } from './service/cart';

const App = () => {
  useEffect(() => {
    store.dispatch(getUserData());
    store.dispatch(getCart())
  },[])
  
  return (
    <Container/>
  )
}

export default App