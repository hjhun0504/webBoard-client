import React, { Component } from "react";
import { ListEntry, ListHead, SearchBar, WriteButton } from "./components";
import axios from "axios";
import "./Lists.css";
// import { posts } from "../../__test__/fakeData";

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://koreanjson.com/posts")
      .then(result => {
        this.setState({
          posts: result.data.reverse()
        });
      })
      .catch(err => console.log(err));
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
