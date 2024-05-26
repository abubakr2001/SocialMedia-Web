import React from 'react'
import "./share.css"
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareprofileImg' src="/assets/me2.JPG" alt="" />
                <input className='shareInput' placeholder='What is your mind Bakar'/>

            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareoptionText'>Photo or Video</span>
                    </div>
                    <div className="shareoption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareoptionText'>Tag</span>
                    </div>
                    <div className="shareoption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className='shareoptionText'>Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareoptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'> Share</button>
            </div>    
        </div>
        
    </div>
  )
}
