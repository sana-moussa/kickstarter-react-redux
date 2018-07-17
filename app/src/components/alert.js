import React from "react";
import { Alert as AlertStrap } from "reactstrap";

class AlertTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options, message, close } = this.props;
    return (
      <AlertStrap color={options.type} toggle={close}>
        {message}
      </AlertStrap>
    );
  }
}

export default AlertTemplate;
