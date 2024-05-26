import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'
import Userfriend from "../userfriend/Userfriend";
export default function Rightbar({profile}) {
  const Homerightbar = ()=>{
    return(
      <>
        <div className="birthdaycontainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Mohamed Samir</b> and <b>3 other friends</b>have a birthday today</span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbaradAd" />
        <h4 className="rightbartitle">Online Friends </h4>
        <ul className='rightbarfriendList'>
          {
            Users.map((u)=>(<Online key={u.id} user ={u}/>))
          }
        </ul>
      </> 
    )
  }
  const Profilerightbar = ()=>{
    return(
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfiitem">
            <span className='rightbarinfokey'>City:</span>
            <span className='rightbarinfovalue'>Fayoum</span>
          </div>
          <div className="rightbarinfiitem">
            <span className='rightbarinfokey'>From:</span>
            <span className='rightbarinfovalue'>Itsa</span>
          </div>
          <div className="rightbarinfiitem">
            <span className='rightbarinfokey'>Relationship:</span>
            <span className='rightbarinfovalue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <ul className="rightbarfollowing">
          {
            Users.map((u)=>(< Userfriend key={u.id} user = {u}/>))
          }
          </ul>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <Profilerightbar/> : <Homerightbar/>}
      </div>
    </div>
  )
}
