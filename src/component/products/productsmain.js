import React, { Fragment, useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAllProducts } from '../../service/products';
import { customerRatingUiInitialState,sortingOptions} from '../../constant';
import Products from './products';
import ProductsFilter from './productsFilter';
import { useSearchParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Offers from '../offers/offers'
import Loader from '../common/loader';
import './products.css'

const ProductsMain = ({match}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { isError,isLoading,products,totalProductCount,itemPerPage,totalProductCountAfterFilter } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100000]);
  const [rating,setRating] = useState(0);
  const [ratingui,setRatingUi] = useState(customerRatingUiInitialState);
  const [sort,setSort] = useState({ ...sortingOptions[0]});
  const searchTerm = searchParams.get('searchTerm');
  const category = searchParams.get('category');
  useEffect( () => {
      dispatch(getAllProducts(searchTerm,currentPage,category,price,rating));
  },[dispatch,price,rating,currentPage,searchTerm,category])

const sortHandler = (option) => {
    if(sort.value !== option.value) {
     setSort(option);
    }
}
const setCurrentPageNo = (e) => {
  setCurrentPage(e);
};
const priceHandler = (event,newPrice) => {
    if (newPrice !== price) {
        setPrice(newPrice);
    }
  };
const getPriceValue = () => {
    return price;
}
const filterByRating = (event,val) => {
    if (val) {
        let boolVal = event.target.checked ? true : false;
        let newArray = ratingui.map(ele => ele.val === val ? { ...ele,bool:boolVal} : ele);
        setRatingUi(newArray);
        let getRatingValue = 0;
        newArray.forEach(ele => {
            if (ele.bool) {
                getRatingValue = ele.val;
            }
        })
        if ( getRatingValue !== rating) {
          setRating(getRatingValue);
        }
    }
}
  return (
    <Fragment>
    <Offers />
        <div className='products-main'>
          <ProductsFilter sort={sort} price={price} sortHandler={sortHandler} priceHandler={priceHandler} getPriceValue={getPriceValue} filterByRating={filterByRating} />
          {isLoading || isError ? 
          <Loader /> : 
          <div>
          <Products  products={products} />
          {itemPerPage < totalProductCountAfterFilter ? (
            <div className='paginationBox'>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemPerPage}
                totalItemsCount={totalProductCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          ) : <></> }
            </div>
          // 
          }
         </div>  
      </Fragment>

)}

export default ProductsMain