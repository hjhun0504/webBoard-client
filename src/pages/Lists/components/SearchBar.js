import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
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
};

export default SearchBar;
