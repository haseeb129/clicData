import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
