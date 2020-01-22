import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { keyword: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ keyword: event.target.value });
    console.log(this.state.keyword);
  }

  handleSubmit() {
    this.props.history.push(`/lists/?search=all&keyword=${this.state.keyword}`);
    this.props.fetchData(this.state.keyword);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input input blue-bold-outline"
          type="text"
          onChange={this.handleInputChange}
        />
        <div className="search-bar__submit" onClick={this.handleSubmit}>
          <i className="fas fa-search search__btn" />
        </div>
      </div>
    );
  }
}
