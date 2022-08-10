import React from 'react'
import './share.css';
import Media from '@mui/icons-material/Mms';
import Label from '@mui/icons-material/Label';
import Place from '@mui/icons-material/Place';
import AddReaction from '@mui/icons-material/AddReaction';

function share() {
  return (
    <div className='shareContainer'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='sharedProfileImg' src="/assests/profiles/pic2.jpg" alt="" />
                <input placeholder="what's in ur mind" className="shareInput" />
            </div>

            <hr className="shareHr" />

            <div className="shareBottom">

                <div className="shareOptions">
                    <div className="shareOption">
                        <Media htmlColor="tomato" className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>

                    <div className="shareOption">
                        <Label htmlColor="blue" className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>

                    <div className="shareOption">
                        <Place htmlColor="green" className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>

                    <div className="shareOption">
                        <AddReaction htmlColor="gold" className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>

                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default share