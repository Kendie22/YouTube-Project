import YouTube from "react-youtube";
import { useParams, useLocation } from "react-router-dom"
import React from "react";


export function SingleVideoPage() {
  const location = useLocation();
  const item = location.state;
  const id = item.id.videoId;
  console.log(item)

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    }
  }

  return (

    <YouTube videoId={id} opts={opts} />



  )
}
