import React from 'react';
import './Home.css';
import Topbar from '../../components/Topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';


const Home = () => {
  return (
    <div className="home">
      <Topbar></Topbar>
      <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
        
      </div>
    </div>
  )
}

export default Home