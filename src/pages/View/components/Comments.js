import React, { Component } from "react";
import axios from "axios";
import "./Comments.css";
import CommentEntry from "./CommentEntry";
import Button from "../../../components/Button";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      author: "",
      title: "",
      password: ""
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
    const { author, content, password } = this.state;
    axios
      .post("http://localhost:4000/comments", {
        isLogin: false,
        postId: this.props.postId,
        author: author,
        password: password,
        content: content
      })
      .then(result => {
        this.setState({ comments: result.data });
      })
      .catch(err => console.log(err));
  }

  handleDelete() {
    console.log("DELETE COMMENT");
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/posts/comments/${this.props.postId}`)
      .then(result => {
        console.log(result.data);
        this.setState({
          comments: result.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let css = "";
    if (this.state.comments.length) {
      css = "underbar";
    }

    return (
      <div className="comments">
        <div className={`comments__count ${css}`}>
          전체 리플 <font color="#D83F36">{this.state.comments.length}</font>개
        </div>
        <div className="comments__list">
          {this.state.comments.map(comment => (
            <CommentEntry key={comment.id} data={comment} />
          ))}
        </div>

        <div className="comments__write-box">
          <div className="write-box__column">
            <input
              className="input__author input"
              name="author"
              type="text"
              placeholder="닉네임"
              onChange={this.handleInputChange}
            />
            <input
              className="input__password input"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="write-box__column">
            <textarea
              className="input__content input"
              name="content"
              placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다."
              onChange={this.handleInputChange}
            />
            <div className="input__content__bottom">
              <Button
                title="등록"
                css="button--blue"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
