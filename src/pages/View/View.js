import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";

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
      .get(`https://koreanjson.com/posts/${this.id}`)
      .then(result => {
        console.log(result);
        this.setState({ post: result.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.post) {
      return (
        <>
          <article>
            <div>{this.state.post.title}</div>
            <div>
              <span>글쓴이</span>
              <span>{this.state.post.createdAt}</span>
            </div>
            <div>{this.state.post.content}</div>
          </article>
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
