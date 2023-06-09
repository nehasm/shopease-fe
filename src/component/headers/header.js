import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PrimaryHeader from './primaryheader'
import SecondaryHeader from './secondaryheader';
import { useDispatch } from 'react-redux';
import style from './header.module.css'


const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch()
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
    <div className={style.header}>
        <PrimaryHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchSubmitHandler={searchSubmitHandler} clearSearchHandler={clearSearchHandler} />
        <SecondaryHeader checkByCategory={checkByCategory}></SecondaryHeader>
    </div>
  )
}

export default Header