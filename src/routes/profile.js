import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSideBar from '../component/user/profilesidebar';
import style from '../component/user/profile.module.css'
const Profile = () => {
  return (
    <div className={style.profilemain}>
    <ProfileSideBar/>
    <Outlet />
    </div>
  )
}

export default Profile