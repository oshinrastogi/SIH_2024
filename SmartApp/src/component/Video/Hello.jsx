import React, { useRef } from 'react'
import VideoPlayer from './VideoPlayer';
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Hello = () => {
    const playerRef = useRef(null);
    const videoLink = "http://localhost:8000/uploads/courses/3b36a811-722c-4b93-b11f-5fcd6c409771/index.m3u8";
    const videoPlayerOptions = {
        controls : true ,
        responsive : true ,
        fluid : true ,
        sources : [
            {
                src : videoLink,
                video : "application/x-mpegURL"
            }
        ]
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player;
    
        // You can handle player events here, for example:
        player.on("waiting", () => {
          videojs.log("player is waiting");
        });
    
        player.on("dispose", () => {
          videojs.log("player will dispose");
        });
    };
  return (
    <div>
      <h1>Video Player</h1>
      <VideoPlayer 
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
       />
    </div>
  )
}

export default Hello
