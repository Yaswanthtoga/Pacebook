import React from 'react'
import './rightbar.css'
import {Users} from "../../dummydata";
import Online from '../Online/online';

function rightbar({profile}) {
  const HomeRightBar = ()=>{
    return(
      <>
        <div className="birthdayContainer">
              <img src="/assests/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText">
                <b>Yaswanth Kumar</b> and <b> 3 others </b> have birthdays today
              </span>
            </div>

            <img src="/assests/ad.jpg" alt="" className="adImg" />
            <h4 className="rightBarTitle">Online Friends</h4>
            <ul className="rightBarFriendList">
              {Users.map(u=>{
                return (
                  <Online
                    key={Users.id}
                    profiles = {u}
                  />
                )
              })}
            </ul>

      </>
    )
  }

  const ProfileRightBar = ()=>{
    return (
      <>
        <h4 className='userInfoTitle'>User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoItemKey">City : </span>
            <span className="rightBarInfoItemValue">Greater Noida</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoItemKey">From :</span>
            <span className="rightBarInfoItemValue">Srikakulam</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoItemKey">Relationship :</span>
            <span className="rightBarInfoItemValue">Single</span>
          </div>

          <h4 className='userInfoTitle'>User Friends</h4>
          <div className="rightBarFollowings">
            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic2.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>

            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic3.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>

            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic4.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>

            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic5.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>

            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic6.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>

            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic7.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>


            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic7.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>

            <div className="rightBarFollowing">
              <img src="/assests/profiles/pic6.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingUserName">Yusuf Pathan</span>
            </div>
          </div>
        </div>
      </>
    )
  }


  return (
    <div className='rightBar'>
        <div className="rightbarContainer">
          <div className="rightBarWrapper">
            {profile?<ProfileRightBar/>:<HomeRightBar/>}
          </div>
        </div>
    </div>
  )
}

export default rightbar