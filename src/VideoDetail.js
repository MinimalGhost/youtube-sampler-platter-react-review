import React from "react";
import logo from "./logo.svg";

const VideoDetail = props => {
  console.log(props);
  if (!props.selectedVideo) {
    return <img src={logo} />;
  } else {
    const videoId = props.selectedVideo.id.videoId;
    return (
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="youtube video"
        />
        <div>{props.selectedVideo.snippet.title}</div>
        <div>{props.selectedVideo.snippet.description}</div>
        <div>{props.selectedVideo.snippet.channelTitle}</div>
        <div>{props.selectedVideo.snippet.publishedAt}</div>
      </div>
    );
  }
};

export default VideoDetail;
