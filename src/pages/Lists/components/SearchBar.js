import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input input blue-bold-outline"
          type="text"
        />
        <div className="search-bar__submit">
          <i className="fas fa-search search__btn" />
        </div>
      </div>
    );
  }
}
