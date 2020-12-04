import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "./../apis/youtubeApi";

const KEY = "AIzaSyAznWU6O_k7wjCb1KGctNe07hD05BEwCug";

export default class App extends Component {
  onSubmitForm = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    console.log(response);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: " 20px" }}>
        <SearchBar onSubmitForm={this.onSubmitForm} />
      </div>
    );
  }
}
