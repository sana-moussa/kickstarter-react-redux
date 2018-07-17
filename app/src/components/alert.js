import React from "react";
import { Alert as AlertTemplate } from "reactstrap";

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options, message, close } = this.props;
    return (
      <AlertTemplate color={options.type} toggle={close}>
        {message}
      </AlertTemplate>
    );
  }
}

export default Alert;
