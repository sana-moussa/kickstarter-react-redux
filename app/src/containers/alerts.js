import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import AlertTemplate from "../components/alert";
import { dismissAlert } from "../actions/alert";

class Alerts extends React.Component {
  onDismiss(alert) {
    this.props.dismissAlert(alert.id);
  }

  render() {
    const { alerts } = this.props;

    return (
      <div className="react-alerts-overlay-component-container">
        <div className="v-margin">
          <Row className="justify-content-end">
            <Col className="col-6">
              {alerts.length > 0 &&
                alerts.map(alert => {
                  return (
                    <AlertTemplate
                      alert={alert}
                      key={alert.id}
                      dismiss={alert => this.onDismiss.bind(this, alert)}
                    />
                  );
                })}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      dismissAlert
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alerts);
