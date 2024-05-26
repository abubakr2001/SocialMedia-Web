import React from 'react'
import './closefriend.css'
export default function Closefriend({user}) {
  return (
    <li className="sidebarfriend">
            <img className='sidebarfriendImage' src={user.profilePicture} alt="" />
            <span className="sidebarfriendName">{user.username}</span>
    </li>
  )
}
