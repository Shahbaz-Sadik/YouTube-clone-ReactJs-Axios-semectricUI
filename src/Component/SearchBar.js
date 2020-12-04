import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onChangeValue = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div>
            <label>{`Search Videos`}</label>
            <div>
              <input type="text" value={this.state.term} onChange={this.onChangeValue}></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
