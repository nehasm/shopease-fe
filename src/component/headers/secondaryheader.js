import React, { useState } from 'react';
import { ProductCategories } from '../../constant';
import style from './header.module.css'
import  { BiDotsVertical } from 'react-icons/bi'
import Headernav from '../common/sidenav/headernav';
const SecondaryHeader = (props) => {
  const [openSideNav,setOpenSideNav] = useState(false);

  const sendCategory = (val) => {
    props.checkByCategory(val)
  }
  const closeSideNavHandler = () => {
    setOpenSideNav(false)
  }
  
  return <div className={style['secondary-header-main']}>
    <div className={style["secondary-header"]}>
      {ProductCategories.map ( (product) => <div key={product.value} onClick={() => {sendCategory(product.value)}}>{product.text}</div>)}
    </div>
    <div className={style["category-dd-main"]}>
      <div onClick={() => setOpenSideNav(true)}>
      <span className={style.categorytooltip}>Check Categories</span>
      <BiDotsVertical />
      </div>
      {openSideNav && <Headernav sendCategory={sendCategory} data={ProductCategories} headerType={"categories"} closeSideNavHandler={closeSideNavHandler}/>}
    </div>
    </div>
}

export default SecondaryHeader