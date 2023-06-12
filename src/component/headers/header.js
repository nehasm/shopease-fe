import React from 'react'
import PrimaryHeader from './primaryheader'
import SecondaryHeader from './secondaryheader';
import style from './header.module.css'


const Header = (props) => {
  return (
    <div className={style.header}>
        <PrimaryHeader searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm} searchSubmitHandler={props.searchSubmitHandler} clearSearchHandler={props.clearSearchHandler} />
        <SecondaryHeader checkByCategory={props.checkByCategory}></SecondaryHeader>
    </div>
  )
}

export default Header