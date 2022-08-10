import React from 'react'
import './topbar.css';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notification from '@mui/icons-material/Notifications';


const topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">ᴘᴀᴄᴇʙᴏᴏᴋ</span>
        </div>


        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input placeholder="Search your friends" className="searchinput" />
            </div>
        </div>


        <div className="topbarRight">
            <div className="topbarlinks">
                <div className="topbarlink">Homepage</div>
                <div className="topbarlink">Timeline</div>
            </div>


            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarBadge">1</span>
                </div>

                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarBadge">1</span>
                </div>

                <div className="topbarIconItem">
                    <Notification/>
                    <span className="topbarBadge">1</span>
                </div>
            </div>

            <img src="/assests/profiles/pic1.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default topbar