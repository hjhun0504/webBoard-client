import React, { Component } from "react";
import Button from "../../components/Button";
import "./Edit.css";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.option = props.match.path.slice(1, 7); // modify or delete

    this.state = {};
  }

  render() {
    return (
      <div className="edit-wrapper">
        <div className="edit__title">비밀번호를 입력하세요.</div>
        <div>
          <input className="edit__password" type="password"></input>
        </div>
        <div className="edit__button-box">
          <Button title="취소" css="button--grey" />
          <Button title="확인" css="button--blue" />
        </div>
      </div>
    );
  }
}
