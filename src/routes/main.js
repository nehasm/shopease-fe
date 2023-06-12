import React,{Fragment,useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/headers/header';
import Footer from '../component/footer/footer';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [category,setCategory] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    let newsearch = searchTerm.trim();
    setSearchTerm(newsearch);
    updateProducts(newsearch,category);
  };
  const clearSearchHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
    updateProducts('',category);
  }
  const updateProducts = (newSearch,newCategory) => {
      history(`/?searchTerm=${newSearch}&category=${newCategory}`);
  }
  const checkByCategory = (category) => {
    setCategory(category);
    updateProducts(searchTerm,category);
  };

  return (
    <Fragment>
      <Header  searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchSubmitHandler={searchSubmitHandler} clearSearchHandler={clearSearchHandler} checkByCategory={checkByCategory}/>
      <Outlet/>
      <Footer checkByCategory={checkByCategory}/>
    </Fragment>
  )
}

export default Main;