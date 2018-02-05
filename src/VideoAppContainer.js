import React, { Component } from "react";
import VideoSearch from "./VideoSearch";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import FetchAdapter from "./adapters";
import keys from "./keys";

class VideoAppContainer extends Component {
  state = {
    videos: [],
    searchTerm: "",
    selectedVideo: "",
    pageToken: ""
  };

  componentDidMount() {
    this.videoSearch();
  }

  videoSearch = () => {
    FetchAdapter.searchFetch(
      keys.API_KEY,
      this.state.searchTerm,
      this.state.pageToken
    ).then(json => {
      this.setState({
        videos: json.items,
        selectedVideo: json.items[0],
        pageToken: json.nextPageToken
      });
    });
  };

  getMoreVideos = () => {
    FetchAdapter.searchFetch(
      keys.API_KEY,
      this.state.searchTerm,
      this.state.pageToken
    ).then(json => {
      this.setState(previousState => {
        return {
          videos: [...previousState.videos, ...json.items],
          pageToken: json.nextPageToken
        };
      });
    });
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.videoSearch();
  };

  selectVideo = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    console.log(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
        keys.API_KEY
      }&q=${this.state.searchTerm}&type=video&pageToken=${this.state.pageToken}`
    );
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "10% auto"
        }}
      >
        <div>
          <VideoSearch
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <button onClick={this.getMoreVideos}>Get More Videos</button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
          }}
        >
          <VideoDetail selectedVideo={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            selectVideo={this.selectVideo}
          />
        </div>
      </div>
    );
  }
}

export default VideoAppContainer;
