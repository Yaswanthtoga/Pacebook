// eslint-disable-next-line
import React, { useState } from 'react'
import './post.css';
import MoreVert from '@mui/icons-material/MoreVert';
import {Users} from '../../dummydata';

const Post = ({posts}) => {
    const [liked,setliked] = useState(posts.like);
    const [isLiked,setisLiked] = useState(false);

    const likeHandler = ()=>{
        setliked(isLiked? liked-1:liked+1);
        setisLiked(!isLiked);
    }

  return (
    <div className='postContainer'>
        <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id===posts?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {Users.filter(u=>u.id===posts?.userId)[0].username}
                    </span>
                    <span className="postDate">{posts.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVert/>
                </div>
            </div>


            <div className="postCenter">
                <span className="postText">{posts?.desc}</span>
                <img src={posts.photo} alt="" className="postpic" />
            </div>


            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assests/like.png" alt="" onClick={likeHandler} className="likeIcon thumbsup" />
                    <img src="/assests/love.png" alt="" onClick={likeHandler} className="likeIcon" />
                    <span className="postLikeCounter">{liked} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComment">{posts.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post