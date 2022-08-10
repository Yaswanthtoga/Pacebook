// eslint-disable-next-line

import React from 'react'
import './feed.css'
import Share from '../share/share';
import Post from '../Post/post';
import {Posts} from '../../dummydata';


function feed() {
  return (
    <div className='Feed'>
        <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>{
          return (<Post 
            key={p.id}
            posts={p}
          />)
        })}
        
        </div>
    </div>
  )
}

export default feed