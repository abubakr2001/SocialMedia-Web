import React, { useState } from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData';
export default function Post({post}) {
    const [like , setlike] = useState(post.like)
    const [islike , issetlike] = useState(false)
    const likehandler = ()=>{
        setlike(islike? like-1: like+1)
        issetlike(!islike)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u)=>u.id ===post.userId)[0].profilePicture} alt="" className="postprofileImg" />
                <span className="postUsername">{
                    Users.filter((u)=>u.id ===post.userId)[0].username
                    }</span>
                <span className="postDate">{post.date}</span>

            </div>
            <div className="postTopRight">
                <MoreVert className='postTopIcon'/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeicon' src="assets/like.png" onClick={likehandler} alt="" />
                <img className='likeicon' src="/assets/heart.png" onClick={likehandler} alt="" />
                <span className="postlikecounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className='postcomment'>{post.comment} comment</span>
            </div>

        </div>
        </div>
    </div>
  )
}
