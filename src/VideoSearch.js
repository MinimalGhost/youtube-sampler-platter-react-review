import React from "react";

const VideoSearch = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default VideoSearch;
