import React from "react";

const ListHead = () => {
  return (
    <thead>
      <tr className="board__row">
        <th className="board__head">번호</th>
        <th className="board__head">제목</th>
        <th className="board__head">글쓴이</th>
        <th className="board__head">작성일</th>
      </tr>
    </thead>
  );
};

export default ListHead;
