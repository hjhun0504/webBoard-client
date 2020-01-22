import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Comments } from "./components";
import Button from "../../components/Button";
import axios from "axios";
import "./View.css";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      post: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://ec2-18-218-35-47.us-east-2.compute.amazonaws.com:4000/posts/${this.id}`
      )
      .then(result => {
        console.log(result);
        this.setState({ post: result.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const post = this.state.post;

    if (post) {
      return (
        <>
          <article className="view">
            <div className="view__title">{post.title}</div>
            <div>
              <span className="view__author">{post.author}</span>
              <span className="view__time">{post.createdAt.slice(0, 10)}</span>
            </div>
            <div className="view__underbar"></div>
            <div className="view__content">{post.content}</div>
          </article>
          <Comments postId={this.id} />
          <div className="view__button-box">
            <Link to={`/modify/${this.id}`}>
              <Button title="수정" css="button--grey" />
            </Link>
            <Link to={`/delete/${this.id}`}>
              <Button title="삭제" css="button--grey" />
            </Link>
          </div>
        </>
      );
    } else {
      return <div></div>;
    }
  }
}
