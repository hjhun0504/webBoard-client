import React, { Component } from "react";

export default class View extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>this is view page!</div>
        {/* <div>{this.props.match.params}</div> */}
      </div>
    );
  }
}
