import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
export default function Profile() {
  return (
    <>
      <Topbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
            <div className="profilrightTop">
              <div className="profilecover">
                <img src="/assets/post/3.jpeg" alt="" className="profilecoverimg" />
                <img src="/assets/me2.JPG" alt="" className="profileuserimg" />
              </div>
              <div className="profileinfo">
                <h4 className='profileinfoname'>AbuBakr Mohamed</h4>
                <span className="profileinfodesc"> Hello My Friends!</span>
              </div>
            </div>
            <div className="profilerightBottom">
              <Feed/>
              <Rightbar profile />
            </div>
          </div>
          
        </div>
    </>
      )
}
