import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import { showAlert } from "../actions/alert";
import { ALERT_TYPES } from "../config";
import ReadmeCard from "../components/readmeCard";

class Readme extends React.Component {
  onButtonClick(message, options) {
    this.props.showAlert(message, {
      type: options.type,
      timeout: options.timeout,
      parameters: options.parameters
    });
  }

  render() {
    return (
      <div className="padding-wrap margin-wrap">
        <Row className="v-margin">
          <Col sm="6">
            <ReadmeCard
              cardTitle="About React"
              cardText="A JavaScript library for building user interfaces"
              buttonText="Learn more"
              buttonClick={() =>
                this.onButtonClick.bind(this, "you can check this address:", {
                  type: ALERT_TYPES.SUCCESS,
                  timeout: 5000,
                  parameters: ["https://reactjs.org/"]
                })
              }
            />
          </Col>
          <Col sm="6">
            <ReadmeCard
              cardTitle="About Redux"
              cardText="Redux is a predictable state container for JavaScript apps."
              buttonText="Learn more"
              buttonClick={() =>
                this.onButtonClick.bind(
                  this,
                  "There are many docs about redux, just google for them :p",
                  {
                    type: ALERT_TYPES.INFO,
                    timeout: 2000
                  }
                )
              }
            />
          </Col>
        </Row>
        <Row className="v-margin">
          <Col sm="6">
            <ReadmeCard
              cardTitle="Alerts"
              cardText="this starter kit comes with implemented alerts functionnality. you need to provide the message and options(type, timeout, parameters). if no timetout provided then it can be closed manually"
              buttonText="try it out"
              buttonClick={() =>
                this.onButtonClick.bind(this, "this is an example.", {
                  type: ALERT_TYPES.WARNING
                })
              }
            />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showAlert
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Readme);
