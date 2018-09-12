import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Companies & Employees</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem key={1} href="/overview">
                Global Overview
              </RouteNavItem>
              <RouteNavItem key={2} href="/company/new">
                Create company
              </RouteNavItem>
              <RouteNavItem key={3} href="/employee/new">
                Create Employee
              </RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
