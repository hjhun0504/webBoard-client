import React, { Component } from "react";
import Button from "../../components/Button";
import "./Write.css";
import { Link } from "react-router-dom";

export default class Write extends Component {
  render() {
    return (
      <div className="write-wrapper">
        <div>
          <input type="text" placeholder="닉네임" />
          <input type="text" placeholder="비밀번호" />
        </div>
        <div>
          <input type="text" placeholder="제목을 입력해 주세요." />
        </div>
        <div>
          <div>※ 쉬운 비밀번호를 입력하면 타인의 수정, 삭제가 쉽습니다.</div>
          <div>
            음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민,
            형사상의 책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]
          </div>
        </div>
        <div>
          <textarea className="write__box"></textarea>
        </div>
        <div>
          <Link to="/">
            <Button title="취소" css="button--grey"></Button>
          </Link>
          <Button title="등록" css="button--blue"></Button>
        </div>
      </div>
    );
  }
}
