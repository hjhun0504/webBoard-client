import React from "react";
import "./ListEntry.css";

const ListEntry = ({ post }) => {
  return (
    <tr className="list">
      <td className="list__id">{post.id}</td>
      <td className="list__title">
        <i className="list__icon fas fa-comment-dots fa-flip-horizontal"></i>
        {post.title}
      </td>
      <td className="list__author">{post.author}</td>
      <td className="list__createdAt">{post.createdAt}</td>
    </tr>
  );
};

export default ListEntry;
