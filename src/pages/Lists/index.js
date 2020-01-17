import React from "react";
import ListEntry from "./ListEntry";
import WriteButton from "./WriteButton";
import SearchBar from "./SearchBar";

const Lists = () => {
  return (
    <div>
      <div>번호 / 제목 / 글쓴이 / 작성일</div>
      <ListEntry />
      <ListEntry />
      <ListEntry />
      <WriteButton />
      <div>1 2 3 4 5</div>
      <SearchBar />
    </div>
  );
};

export default Lists;
