import React, { useState } from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import style from './headernav.module.css';
import { useNavigate } from 'react-router-dom';

const Navblock = (props) => {
    const [openDd,setOpenDd] = useState(false);
    const navigate = useNavigate();
    const dDHandler = () => {
        setOpenDd(!openDd);
    }
    const moveToSelectedItem = (element) => {
            navigate(element.path)
        
    }
    const navBlockHandler = () => {
        if(props.data.path && props.headerType === "account") {
            navigate(props.data.path)
        }
        props.sendCategory(props.data.value)
    }
  return <>
    <div className={style.navblock}>
        <span onClick={navBlockHandler}>{props.data.text}</span>
        {props.data.options && 
        <span onClick={dDHandler} className={style.ddicon}>
            <MdOutlineKeyboardArrowDown/>
        </span>}
    </div>
    {openDd && 
        <div className={style.optiondd}>
            {props.data.options.map(navelement => 
             <span onClick={(e) => moveToSelectedItem(navelement)}>
                {navelement.text}
            </span>
                )}
        </div>
        }
    </>
}

export default Navblock