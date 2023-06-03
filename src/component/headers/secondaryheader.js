import React from 'react';
import { ProductCategories } from '../../constant';

const SecondaryHeader = (props) => {

  const sendCategory = (val) => {
    props.checkByCategory(val)
  }
  
  return (
    <div className='common-header secondary-header'>
      {ProductCategories.map ( (product) => <div key={product.value} onClick={() => {sendCategory(product.value)}}>{product.name}</div>)}
    </div>
  )
}

export default SecondaryHeader