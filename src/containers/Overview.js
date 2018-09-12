import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { invokeApi } from "../libs/fetchApi";
import CompanyElmt from "../components/CompanyElmt";
import "./Overview.css";

export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: []
    };
  }

  async componentDidMount() {
    try {
      const companies = await this.getCompanies();
      this.setState({
        companies: companies
      });
    } catch (e) {
      console.log(e);
    }
  }

  getCompanies() {
    return invokeApi({ type: "company" });
  }

  renderEmpty() {
    return (
      <Row className="show-grid-empty">
        <Col xs={12} md={12}>
          <h1>No companies recorded.</h1>
        </Col>
      </Row>
    )
  }

  renderCompanies() {
    return (
      <Row className="show-grid-cpny">
        <Col xs={12} md={12}>
          {this.state.companies.map((c, i) => {
            return (
              <CompanyElmt
                key={i}
                {...c} />
            )
          })
          }
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div className="Companies">
        <Grid>
          {this.state.companies.length > 0 ? this.renderCompanies() : this.renderEmpty()}
        </Grid>
      </div>
    );
  }
}
