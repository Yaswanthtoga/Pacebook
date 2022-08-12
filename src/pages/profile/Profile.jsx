// eslint-disable-next-line
import React from 'react'
import './Profile.css';
import Topbar from '../../components/Topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';


const Profile = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="profileContainer">
        <Sidebar></Sidebar>
        <div className="profileRight">
            <div className="profileRightTop">
               <div className="profileCover">
               <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="profileCoverImg" />
                <img src="/assests/profiles/pic1.jpg" alt="" className="profileUserImg" />
                
               </div>
               <div className="profileInfo">
                <h2 className="Name">Saahoo</h2>
                <p className="desc">Hello Friends</p>
               </div>
            </div>
            <div className="profileRightBottom">
                <Feed></Feed>
                <Rightbar profile></Rightbar>
            </div>          
        </div>
      </div>
    </div>
  )
}

export default Profile