import React from "react";
import { ListEntry, ListHead, SearchBar, WriteButton } from "./components/";
import "./index.css";

const Lists = () => {
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
};

export default Lists;
