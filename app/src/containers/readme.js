import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card, CardTitle, CardText, Row, Col, Button } from "reactstrap";
import { showAlert } from "../actions/alert";
import { ALERT_TYPES } from "../config";

class Readme extends React.Component {
  render() {
    return (
      <div className="padding-wrap margin-wrap">
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>About React</CardTitle>
              <CardText>
                "A JavaScript library for building user interfaces"
              </CardText>
              <Button
                className="btn btn-secondary"
                onClick={() => {
                  this.props.showAlert("you can check this address:", {
                    type: ALERT_TYPES.SUCCESS,
                    timeout: 0,
                    position: "bottom center",
                    parameters: ["https://reactjs.org/"]
                  });
                }}
              >
                Learn more
              </Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>About Redux</CardTitle>
              <CardText>
                "Redux is a predictable state container for JavaScript apps."
              </CardText>
              <Button
                className="btn btn-secondary"
                onClick={() => {
                  this.props.showAlert(
                    "There are many docs about redux, just google for them :p",
                    {
                      type: ALERT_TYPES.INFO,
                      timeout: 3000,
                      transition: "fade"
                    }
                  );
                }}
              >
                Learn more
              </Button>
            </Card>
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
