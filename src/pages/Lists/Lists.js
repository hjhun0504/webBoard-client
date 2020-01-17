import React, { Component } from "react";
import { ListEntry, ListHead, SearchBar, WriteButton } from "./components";
import "./Lists.css";

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: [
        {
          id: 5,
          author: "고양이맨",
          title: "우리집 고양이 보고가~",
          createdAt: "2020/01/17"
        },
        {
          id: 3,
          author: "🐶",
          title: "솔직히 고양이들 별로아님?",
          createdAt: "2020/01/17"
        },
        {
          id: 2,
          author: "야옹",
          title: "오늘 고양이 주움",
          createdAt: "2020/01/17"
        },
        {
          id: 1,
          author: "노캣",
          title: "나만 고양이 없어",
          createdAt: "2020/01/17"
        }
      ]
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
