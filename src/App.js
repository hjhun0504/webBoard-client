import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Title from "./components/Title";
import { Lists, View, Write, Edit } from "./pages";
import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Title />
        <Switch>
          <Route exact path="/" component={Lists} />
          <Route path="/lists" component={Lists} />
          <Route path="/view/:id" component={View} />
          <Route path="/write" component={Write} />
          <Route path="/modify/:id" component={Edit} />
          <Route path="/delete/:id" component={Edit} />
        </Switch>
      </div>
    );
  }
}

export default App;
