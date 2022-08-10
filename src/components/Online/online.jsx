import React from 'react'
import './online.css';

const online = ({profiles}) => {
  return (
    <li className="rightBarFriend">
        <div className="rightBarProfileContainer">
            <img src={profiles.profilePicture} alt="" className="rightBarProfileImg" />
            <span className="rightBarProfileOnline"></span>
        </div>
        <span className="rightBarProfileUsername">
            {profiles.username}
        </span>
  </li>
  )
}

export default online