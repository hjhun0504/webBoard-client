import React, { Component } from "react";
import { Route } from "react-router-dom";
import Title from "./components/Title";
import { Lists } from "./pages";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Route exact path={["/", "/lists"]} component={Lists} />
      </div>
    );
  }
}

export default App;
