import React, { Component } from "react";
import Button from "../../components/Button";
import axios from "axios";
import "./Edit.css";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.option = props.match.path.slice(1, 7); // modify or delete

    this.state = { password: null };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInputChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    if (this.option === "delete") {
      axios
        .delete(`http://localhost:4000/posts/${this.id}`, {
          data: { password: this.state.password }
        })
        .then(() => {
          window.alert("게시물이 삭제 되었습니다.");
          this.props.history.push("/");
        })
        .catch(err => {
          window.alert(err.response.data);
        });
    } else if (this.option === "modify") {
      console.log("modify");
    }
  }

  handleCancel() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="edit-wrapper">
        <div className="edit__title">비밀번호를 입력하세요.</div>
        <div>
          <input
            className="edit__password"
            type="password"
            onChange={this.handleInputChange}
          ></input>
        </div>
        <div className="edit__button-box">
          <Button title="취소" css="button--grey" onClick={this.handleCancel} />
          <Button title="확인" css="button--blue" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
