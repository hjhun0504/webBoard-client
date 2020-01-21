import React from "react";
import "./CommentEntry.css";

const CommentEntry = () => {
  return (
    <>
      <div className="comment-entry">
        <span className="comment-entry__author comment-col">고양이맨</span>
        <span className="comment-entry__content comment-col">
          댓글 샘플 댓글 샘플
        </span>
        <span className="comment-entry__createdAt comment-col">
          2020-01-21<i className="fas fa-eraser comment-del"></i>
        </span>
      </div>
    </>
  );
};

export default CommentEntry;
