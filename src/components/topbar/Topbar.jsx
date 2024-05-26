import React from 'react'
import "./topbar.css"
import {Chat, Person, Search , Notifications} from "@mui/icons-material"
import { Link } from 'react-router-dom'
export default function Topbar() {
  return (
    <div className='topbarcontainer'>
        <div className="topbarLeft">
          <Link to='/' style={{textDecoration:"none"}}>
            <span className="logo">BekoSocial</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='search for friend or post or video' className='searchInput' />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarlink">HomePage</span>
            <span className="topbarlink">TimeLine</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">3</span>
            </div>
          </div>
          <Link to="/profile">
            <img src="/assets/me2.JPG" alt="" className='topbarImage' />
          </Link>
        </div>

    </div>
  )
}
