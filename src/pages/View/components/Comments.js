import React from "react";
import "./Comments.css";
import CommentEntry from "./CommentEntry";
import Button from "../../../components/Button";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__count">
        전체 리플 <font color="#D83F36">0</font>개
      </div>
      <div className="comments__list">
        <CommentEntry />
        <CommentEntry />
        <CommentEntry />
        <CommentEntry />
        <CommentEntry />
        <CommentEntry />
      </div>

      <div className="comments__write-box">
        <div className="write-box__column">
          <input
            className="input__author input"
            type="text"
            placeholder="닉네임"
          />
          <input
            className="input__password input"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="write-box__column">
          <textarea
            className="input__content input"
            placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다."
          />
          <div className="input__content__bottom">
            <Button title="등록" css="button--blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
