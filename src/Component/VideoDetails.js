import React from "react";

export default function VideoDetails({ video }) {
  if (!video) {
    return <div>Loading....</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
