import React from 'react';
import style from './common.module.css'

const Loader = (props) => {
  let loaderClass;
  if(props.loaderSize === "small") {
    loaderClass = style.loadersmall;
  } else {
    loaderClass = style.loaderbig;
  }

  return (
    <div class={loaderClass}></div>
  )
}

export default Loader