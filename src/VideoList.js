import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const renderVideoList = () =>
    props.videos.map(video => (
      <VideoListItem
        video={video}
        key={video.id.videoId}
        selectVideo={props.selectVideo}
      />
    ));

  return <div>{renderVideoList()}</div>;
};

export default VideoList;
