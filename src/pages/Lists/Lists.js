import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListEntry, ListHead, SearchBar } from "./components";
import Button from "../../components/Button";
import axios from "axios";
import qs from "qs";
import "./Lists.css";
// import { posts } from "../../__test__/fakeData";

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });

    this.state = {
      posts: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(keyword) {
    axios
      .post(
        "http://ec2-18-218-35-47.us-east-2.compute.amazonaws.com:4000/search",
        { query: keyword }
      )
      .then(result => {
        this.setState({
          posts: result.data.reverse()
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    if (this.query.search === "all" && this.query.keyword) {
      axios
        .post(
          "http://ec2-18-218-35-47.us-east-2.compute.amazonaws.com:4000/search",
          { query: this.query.keyword }
        )
        .then(result => {
          this.setState({
            posts: result.data.reverse()
          });
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(
          "http://ec2-18-218-35-47.us-east-2.compute.amazonaws.com:4000/posts"
        )
        .then(result => {
          console.log(result.data);
          this.setState({
            posts: result.data.reverse()
          });
        })
        .catch(err => console.log(err));
    }
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
          <Link to="/write">
            <Button title="글쓰기" css="button--blue"></Button>
          </Link>
        </div>

        {/* <div className="lists__paging">1 2 3 4 5</div> */}

        <div className="lists__search">
          <SearchBar history={this.props.history} fetchData={this.fetchData} />
        </div>
      </>
    );
  }
}
