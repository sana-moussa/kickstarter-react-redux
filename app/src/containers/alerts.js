import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import AlertTemplate from "../components/alert";
import { dismissAlert } from "../actions/alert";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
              <TransitionGroup enter exit>
                {alerts.length > 0 &&
                  alerts.map((alert, index) => {
                    return (
                      <CSSTransition
                        unmountOnExit
                        timeout={{ enter: alert.options.timeout, exit: 0 }}
                        classNames="fade"
                        key={index}
                        onEntered={node => {
                          if (node.firstChild)
                            node.removeChild(node.firstChild);
                        }}
                      >
                        <AlertTemplate
                          alert={alert}
                          key={alert.id}
                          dismiss={alert => this.onDismiss.bind(this, alert)}
                        />
                      </CSSTransition>
                    );
                  })}
              </TransitionGroup>
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
