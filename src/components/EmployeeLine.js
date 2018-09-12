import React from "react";
import { ListGroupItem } from "react-bootstrap";

const EmployeeLine = props => (
  <ListGroupItem header={props.name}>
    {props.position}, {props.department}
    {/* <Button
      bsStyle="warning"
      onClick={(e) => this.props.handleClick(e, this.props.id)}>
      X
    </Button> */}
  </ListGroupItem>
);

export default EmployeeLine
