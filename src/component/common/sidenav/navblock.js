import React from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import style from './headernav.module.css';
import { useNavigate } from 'react-router-dom';

const Navblock = (props) => {
    const navigate = useNavigate();
    const moveToSelectedItem = (element) => {
            navigate(element.path)
    }
    const navBlockHandler = () => {
        if(props.data.options) {
            return
        }
        if(props.data.path && props.headerType === "account") {
            navigate(props.data.path)
            return;
        }
        props.sendCategory(props.data.value);
    }
  return <div>
    <div onClick={navBlockHandler} className={style.navblock}>
        <span >{props.data.text}</span>
        {props.data.options && 
        <span className={style.ddicon}>
            <MdOutlineKeyboardArrowDown/>
        </span>}
    </div>
    {props.data.options && 
        <div className={style.optiondd}>
            {props.data.options.map(navelement => 
             <span onClick={(e) => moveToSelectedItem(navelement)}>
                {navelement.text}
            </span>
                )}
        </div>
        }
          </div>
}

export default Navblock