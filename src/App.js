import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

class App extends Component {
  constructor() {
    super();

    this.state = {
      locations: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const apiUrl = "https://takehomedata.dokku.railslabs.com/companies.json";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Sidebar />
          <Route path="/" component={Main} />
        </Router>
      </div>
    );
  }
}

export default App;
