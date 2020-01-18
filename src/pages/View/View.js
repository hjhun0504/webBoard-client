import React, { Component } from "react";
import axios from "axios";

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };
  }

  componentDidMount() {
    axios
      .get(`https://koreanjson.com/posts/${this.props.match.params.id}`)
      .then(result => {
        console.log(result);
        this.setState({ post: result.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.post) {
      return (
        <article>
          <div>{this.state.post.title}</div>
          <div>
            <span>글쓴이</span>
            <span>{this.state.post.createdAt}</span>
          </div>
          <div>{this.state.post.content}</div>
        </article>
      );
    } else {
      return <div></div>;
    }
  }
}
