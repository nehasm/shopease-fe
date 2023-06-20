import React  from 'react'
import style from './profile.module.css';
import { useNavigate } from 'react-router-dom';

const ProfileSideBar = (props) => {
  const navigate = useNavigate();
  const changeTab = (val) => {
    navigate(val);
  }
  return <div className={style.profilenavmain}>
    <div className={style.profiletab} onClick={()=>changeTab('/profile')}>
    PROFILE
    </div>
    <div className={style.profiletab} onClick={()=>changeTab('/profile/edit')}>
       EDIT PROFILE
    </div>
    <div className={style.profiletab} onClick={()=>changeTab('/profile/changepassword')}>
      CHANGE PASSWORD
    </div>
  </div>
}

export default ProfileSideBar