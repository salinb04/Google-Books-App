import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

// import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Header></Header>
      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
