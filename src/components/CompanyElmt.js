import React, { Component } from "react";
import { Panel, ListGroup } from "react-bootstrap";
import EmployeeLine from "./EmployeeLine";
import { invokeApi } from "../libs/fetchApi";

export default class CompanyElmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  async componentDidMount() {
    try {
      const company = await this.getCompany();
      const employees = this.props.employeeNumber > 0 ? await this.getEmployees(this.props._id) : [];
      this.setState({
        company: company,
        employees: employees
      });
    } catch (e) {
      alert(e);
    }
  }

  getEmployees(compId) {
    return invokeApi({
      type: "employee",
      urlParams: `company/${compId}`
    });
  }

  getCompany() {
    return invokeApi({
      type: "company",
      urlParams: `${this.props._id}`
    });
  }

  renderEmpty() {
    return (
      <p>No employees</p>
    )
  }

  renderEmployees() {
    return (
      <ListGroup>
        {this.state.employees.map((emp, i) => {
          return <EmployeeLine
            key={i}
            {...emp} />
        })}
      </ListGroup>)
  }

  render() {
    return (
      <div className="CompanyElement">
        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.name}, {this.props.type}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {this.state.employees.length > 0 ? this.renderEmployees() : this.renderEmpty()}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
