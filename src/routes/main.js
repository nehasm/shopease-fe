import React,{Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/headers/header';
import Footer from '../component/footer/footer';

const Main = () => {

  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer />
    </Fragment>
  )
}

export default Main;