import React, { Component } from "react";
import { ListEntry, ListHead, SearchBar, WriteButton } from "./components";
import "./Lists.css";

import { posts } from "../../__test__/fakeData";

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: posts
    });
  }

  render() {
    return (
      <>
        <table className="board">
          <ListHead />
          <tbody>
            {this.state.posts.map(post => {
              return <ListEntry key={post.id} post={post} />;
            })}
          </tbody>
        </table>

        <div className="lists__buttons">
          <WriteButton />
        </div>

        <div className="lists__paging">1 2 3 4 5</div>

        <div className="lists__search">
          <SearchBar />
        </div>
      </>
    );
  }
}
