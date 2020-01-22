import React from "react";
import "./CommentEntry.css";

const CommentEntry = props => {
  const { author, content, createdAt } = props.data;

  return (
    <>
      <div className="comment-entry">
        <span className="comment-entry__author comment-col">{author}</span>
        <span className="comment-entry__content comment-col">{content}</span>
        <span className="comment-entry__createdAt comment-col">
          {createdAt.slice(0, 10)}
          <i className="fas fa-eraser comment-del"></i>
        </span>
      </div>
    </>
  );
};

export default CommentEntry;
