import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "./../apis/youtubeApi";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

const KEY = "AIzaSyAznWU6O_k7wjCb1KGctNe07hD05BEwCug";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.onSubmitForm("cars");
  };

  onSubmitForm = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 25,
        type: "video",
        key: KEY,
      },
    });

    //console.log(response.data.items);
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: " 20px" }}>
        <SearchBar onSubmitForm={this.onSubmitForm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
