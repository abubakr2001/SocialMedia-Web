import React from 'react'
import './online.css'
export default function Online({user}) {
  return (
    <li className='rightbarfriend'>
        <div className="rightbarfriendprofilecontainer">
            <img src={user.profilePicture} alt="" className="rightbarfriendprofileimg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">{user.username}</span>
    </li>

  )
}
