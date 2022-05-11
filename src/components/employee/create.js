import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeNo = this.onChangeEmployeeNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      employeeno: "",
    };
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeEmployeeNo(e) {
    this.setState({ employeeno: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const employeeObject = {
      name: this.state.name,
      email: this.state.email,
      employeeno: this.state.employeeno,
    };
    axios
      .post("http://localhost:4000/employees/create", employeeObject)
      .then((res) => console.log(res.data));

    this.setState({ name: "", email: "", employeeno: "" });

    // Redirect to Employee List
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeEmployeeName}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmployeeEmail}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Employee No</Form.Label>
            <Form.Control
              type="number"
              value={this.state.employeeno}
              onChange={this.onChangeEmployeeNo}
            />
          </Form.Group>

          <Button
            variant="primary"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Create Employee
          </Button>
        </Form>
      </div>
    );
  }
}
