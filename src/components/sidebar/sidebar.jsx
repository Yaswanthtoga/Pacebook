import React from 'react'
import './sidebar.css'
import RssFeed from '@mui/icons-material/RssFeed';
import Chat from '@mui/icons-material/Chat';
import PlayCircle from '@mui/icons-material/PlayCircle';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Bookmark from '@mui/icons-material/Bookmarks';
import LiveHelp from '@mui/icons-material/LiveHelp';
import Job from '@mui/icons-material/WorkOutline';
import Event from '@mui/icons-material/EventNote';
import Course from '@mui/icons-material/School';
import Friend from '../Friend/friend';
import {Users} from '../../dummydata';



function sidebar() {
  return (
    <div className='sideBar'>
        <div className="sidebarWrapper">
            <ul className="sideBarlist">
                <li className="sideBarlistItem">
                    <RssFeed className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Feed</span>
                </li>

                <li className="sideBarlistItem">
                    <Chat className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Chats</span>
                </li>

                <li className="sideBarlistItem">
                    <PlayCircle className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Videos</span>
                </li>

                <li className="sideBarlistItem">
                    <PeopleAlt className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Groups</span>
                </li>

                <li className="sideBarlistItem">
                    <Bookmark className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Bookmarks</span>
                </li>

                <li className="sideBarlistItem">
                    <LiveHelp className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Questions</span>
                </li>

                <li className="sideBarlistItem">
                    <Job className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Jobs</span>
                </li>

                <li className="sideBarlistItem">
                    <Event className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Events</span>
                </li>

                <li className="sideBarlistItem">
                    <Course className='sideBarIcon'/>
                    <span className="sideBarlistItemText">Courses</span>
                </li>

            </ul>
            <button className="sideBarbutton">Show more..</button>
            <hr className="horizont" />
            <ul className="sideBarFriendList">
                {Users.map(u=>{
                    return (
                        <Friend
                            key={u.id}
                            user={u}
                        />
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default sidebar