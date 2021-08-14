import React, { useLayoutEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    const url = window.location.href;
    const arr = url.split("/");
    if (arr[arr.length - 1] !== "") window.location.replace("/");
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
