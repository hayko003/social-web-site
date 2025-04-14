import React from 'react'
import "./UserCard.css"
import userImg from "../../assets/smallUser.png"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function UserCard({user}) {
// console.log(user);

  return (
    <div className='user'>
      <h2 className='h2_user'>{user?.name ? user?.name : <Skeleton/>}</h2>
      <img className='smallImg' src={user?.photos?.large === null ? userImg : user?.photos?.large }/>
      <button>Follow</button>
    </div>
  )
}

export default UserCard