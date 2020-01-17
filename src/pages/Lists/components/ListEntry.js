import React from "react";
import "./ListEntry.css";

const ListEntry = () => {
  return (
    <tr className="list">
      <td className="list__id">123</td>
      <td className="list__title">
        <i className="list__icon fas fa-comment-dots fa-flip-horizontal"></i>
        우리집 냥이 보고 가~
      </td>
      <td className="list__author">고양이맨</td>
      <td className="list__createdAt">2020/01/17</td>
    </tr>
  );
};

export default ListEntry;
