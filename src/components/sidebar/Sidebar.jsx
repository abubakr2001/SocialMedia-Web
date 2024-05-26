import React from 'react'
import "./sidebar.css"
import { HelpOutline, RssFeed, School, WorkOutline ,Event, Bookmark, Group, PlayCircleFilledOutlined } from '@mui/icons-material'
import {Users} from "../../dummyData"
import Closefriend from '../closefriend/Closefriend'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarList">
          <li className="sidebarlistItem">
            <RssFeed className='sidebarIcon'/>
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className="sidebarlistItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className="sidebarlistItem">
            <Group className='sidebarIcon'/>
            <span className='sidebarListItemText'>Group</span>
          </li>
          <li className="sidebarlistItem">
            <Bookmark className='sidebarIcon'/>
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className="sidebarlistItem">
            <HelpOutline className='sidebarIcon'/>
            <span className='sidebarListItemText'>Qestions</span>
          </li>
          <li className="sidebarlistItem">
            <WorkOutline className='sidebarIcon'/>
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className="sidebarlistItem">
            <Event className='sidebarIcon'/>
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className="sidebarlistItem">
            <School className='sidebarIcon'/>
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarfriendList">
          {
            Users.map((u)=>(< Closefriend key={u.id} user = {u}/>))
          }
          
        </ul>
      </div>

    </div>
  )
}
