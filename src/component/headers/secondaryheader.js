import React from 'react';
import { ProductCategories } from '../../constant';
import style from './header.module.css'
const SecondaryHeader = (props) => {

  const sendCategory = (val) => {
    props.checkByCategory(val)
  }
  
  return (
    <div className={style["secondary-header"]}>
      {ProductCategories.map ( (product) => <div key={product.value} onClick={() => {sendCategory(product.value)}}>{product.name}</div>)}
    </div>
  )
}

export default SecondaryHeader