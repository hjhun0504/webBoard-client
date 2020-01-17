import React, { Component } from "react";
import { ListEntry, ListHead, SearchBar, WriteButton } from "./components";
import "./Lists.css";

export default class Lists extends Component {
  render() {
    return (
      <>
        <table className="board">
          <ListHead />
          <tbody>
            <ListEntry />
            <ListEntry />
            <ListEntry />
            <ListEntry />
            <ListEntry />
            <ListEntry />
            <ListEntry />
            <ListEntry />
            <ListEntry />
          </tbody>
        </table>

        <div className="lists__buttons">
          <WriteButton />
        </div>

        <div className="lists__paging">1 2 3 4 5</div>

        <div className="lists__search">
          <SearchBar />
        </div>
      </>
    );
  }
}
