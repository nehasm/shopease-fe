import React from 'react';
import { Outlet } from 'react-router-dom';
import style from '../component/user/profile.module.css'
const Profile = () => {
  return (
    <div className={style.profilemain}>
    <Outlet />
    </div>
  )
}

export default Profile