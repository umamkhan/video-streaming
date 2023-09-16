import React, { cloneElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
const [searchParams] = useSearchParams();
console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(()=> {
  dispatch(closeMenu())
    })
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 flex'>
      <div>
        <iframe
         width="950" 
         height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           </div>
           <div className='w-full'>
            <LiveChat/>
           </div>
    </div>
    <CommentContainer/>
    </div>
  )
}

export default WatchPage