import React from "react";

const VideoListItem = props => {
  // console.log(props.video.id.videoId);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      }}
      onClick={() => props.selectVideo(props.video)}
    >
      <img src={props.video.snippet.thumbnails.default.url} alt="video" />
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          overflow: "scroll"
        }}
      >
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoListItem;
