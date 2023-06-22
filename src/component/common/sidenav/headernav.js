import React from 'react';
import {BsArrowLeft,BsHandbagFill} from 'react-icons/bs';
import style from './headernav.module.css'
import profile from '../../../assets/profile.svg';
import Navblock from './navblock';
import {GiClothes,GiBallerinaShoes,GiHeartNecklace,GiSpellBook,GiWashingMachine,GiPencilBrush,GiMedicinePills} from 'react-icons/gi'
import { ImHome } from 'react-icons/im'
import { MdLocalGroceryStore } from 'react-icons/md'



const Headernav = (props) => {
    const closeNavBar = () => {
        props.closeSideNavHandler()
    }
  return (
    <div className={style.headerwrapper}>
        <div className={style.bgfill}></div>
        <div className={style.headermain}>
            <div onClick={closeNavBar} className={style.closeicon}><BsArrowLeft /></div>
            <div className={style.profile}>
                {props.headerType === "account" ? <img src={profile} alt="profile" /> : 
                <span>
                    <GiClothes />
                    <GiBallerinaShoes />
                    <BsHandbagFill />
                    <GiHeartNecklace />
                    <ImHome />
                    <MdLocalGroceryStore />
                    <GiSpellBook />
                    <GiWashingMachine />
                    <GiPencilBrush />
                    <span></span>
                    <GiMedicinePills />
                    <span></span>
                    </span> }
                
                </div>
            <div className={style.navelement}>
                {props.data.map(block => <Navblock  key={block.text} headerType={props.headerType} sendCategory={props.sendCategory} data={block}/>
                
                )}
            </div>
        </div>
    </div>
  )
}

export default Headernav;