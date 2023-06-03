import React from 'react'
import { useSelector } from 'react-redux'

const ProfileData = () => {
    const { user,error,loading} = useSelector((state) => state.user);
  return <div>
    <div>{user.name}</div>
    <div>{user.email}</div>
  </div>
}

export default ProfileData