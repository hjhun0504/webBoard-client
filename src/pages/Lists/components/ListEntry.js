import React from "react";
import "./ListEntry.css";
import { Link } from "react-router-dom";

const ListEntry = ({ post }) => {
  return (
    <tr className="list">
      <td className="list__id board__data">{post.id}</td>
      <td className="list__title board__data">
        <span className="list__title__content">
          <Link to={`/view/${post.id}`}>
            <i className="list__icon fas fa-comment-dots fa-flip-horizontal"></i>
            {post.title.length > 40
              ? post.title.slice(0, 40) + "..."
              : post.title}
          </Link>
        </span>
        <span className="list__comment">
          {post.commentCount ? `[${post.commentCount}]` : ""}
        </span>
      </td>
      <td className="list__author board__data">
        {post.author ? post.author : "👻 unknown"}
      </td>
      <td className="list__createdAt board__data">
        {post.createdAt.slice(0, 10)}
      </td>
    </tr>
  );
};

export default ListEntry;
