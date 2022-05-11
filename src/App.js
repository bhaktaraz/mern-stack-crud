import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateEmployee from "./components/employee/create";
import EditEmployee from "./components/employee/edit";
import EmployeeList from "./components/employee/list";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  MERN Stack Example
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/employees/create"} className="nav-link">
                    Add Employee
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/employees"} className="nav-link">
                    Employees
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/employees/create"
                    component={(props) => <CreateEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/employees/edit/:id"
                    component={(props) => <EditEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/employees"
                    component={(props) => <EmployeeList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
