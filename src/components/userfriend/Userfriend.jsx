import React from 'react'
import "./userfriend.css"
export default function Userfriend({user}) {
  return (
    <li className="Sidebarfriend">
            <img className='SidebarfriendImage' src={user.profilePicture} alt="" />
            <span className="SidebarfriendName">{user.username}</span>
    </li>
  )
}
