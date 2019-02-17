import React, { Component } from "react";
import "./App.css";
import AppBar from "./AppBar";
import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";
import Content from "../Shared/Content";
import Dashboard from "../Dashboard";
import Settings from "../Settings";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
