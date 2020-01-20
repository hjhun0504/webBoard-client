import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./Write.css";
import axios from "axios";

export default class Write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      author: "",
      password: "",
      title: "",
      content: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const { isLogin, author, password, title, content } = this.state;

    if (this.props.modify === "true") {
      console.log("수정 요청 보낸다.");
    } else {
      axios
        .post("http://localhost:4000/posts", {
          isLogin: isLogin,
          author: author,
          password: password,
          title: title,
          content: content
        })
        .then(result => {
          this.props.history.push(`/view/${result.data}`);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className="write-wrapper">
        <div>
          <input
            name="author"
            className="write__author"
            type="text"
            placeholder="닉네임"
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            className="write__password"
            type="password"
            placeholder="비밀번호"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            name="title"
            className="write__title"
            type="text"
            placeholder="제목을 입력해 주세요."
            onChange={this.handleInputChange}
          />
        </div>
        <div className="write__disclaimer">
          <div className="write__disclaimer__content">
            ※ 쉬운 비밀번호를 입력하면 타인의 수정, 삭제가 쉽습니다.
          </div>
          <div className="write__disclaimer__content">
            ※ 음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민,
            형사상의 책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]
          </div>
        </div>
        <div>
          <textarea
            name="content"
            className="write__box"
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <div className="write__button-box button-box">
          <Link to="/">
            <Button title="취소" css="button--grey"></Button>
          </Link>
          <Button title="등록" css="button--blue" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
