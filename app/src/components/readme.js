import React from "react";
import { Card, CardTitle, CardText, Row, Col, Button } from "reactstrap";
import { Alert } from "react-alert";

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
              <Alert>
                {alert => (
                  <Button
                    className="btn btn-secondary"
                    onClick={() => {
                      alert.show("Let's go to https://reactjs.org/", {
                        type: "info",
                        timeout: 0,
                        position: "bottom left"
                      });
                    }}
                  >
                    Learn more
                  </Button>
                )}
              </Alert>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>About Redux</CardTitle>
              <CardText>
                "Redux is a predictable state container for JavaScript apps."
              </CardText>
              <Alert>
                {alert => (
                  <Button
                    className="btn btn-secondary"
                    onClick={() => {
                      alert.show(
                        "Oops! this one you need to search for it ;)",
                        {
                          type: "danger"
                        }
                      );
                    }}
                  >
                    Learn more
                  </Button>
                )}
              </Alert>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Readme;
