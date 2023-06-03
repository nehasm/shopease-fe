import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSideBar = () => {
  return <div>
    <div>
        Profile
    </div>
    <div>
       <Link to={'/profile/edit'}>Edit Profile</Link> 
    </div>
    <div>
        <Link to={'/profile/changepassword'}>Change Password</Link>
    </div>
  </div>
}

export default ProfileSideBar