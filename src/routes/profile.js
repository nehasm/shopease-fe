import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSideBar from '../component/user/profilesidebar';

const Profile = () => {
  return (
    <div>
    <ProfileSideBar />
    <Outlet />
    </div>
  )
}

export default Profile