import React from 'react'
import { useSelector } from 'react-redux';
import style from './profile.module.css';
import fromstyle from '../account/login.module.css';


const ProfileData = () => {
    const { user,error,loading} = useSelector((state) => state.user);
  return <div className={style.profilesectionman}>
    <div className={style.tabHeading}>
      <h2>PROFILE</h2>
    </div>
    <div className={`${fromstyle.loginform} ${style.tabmainarea}`}>
      <div >
        <span>Name : </span>
        <span>{user.name}</span>
      </div>
      <div>
        <span>Email : </span>
        <span>{user.email}</span>
      </div>
    </div>
  </div>
}

export default ProfileData