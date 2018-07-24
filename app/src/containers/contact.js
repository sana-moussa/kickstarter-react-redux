import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { showAlert } from "../actions/alert";
import { ALERT_TYPES } from "../config";

class Contact extends React.Component {
  onSubmit() {
    this.props.showAlert("Error! this feature is obsolete", {
      type: ALERT_TYPES.ERROR,
      timeout: 500
    });
  }

  render() {
    return (
      <div className="padding-wrap">
        <Form>
          <legend>
            <h4>This is form example</h4>
          </legend>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>
              Select
            </Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelectMulti" sm={2}>
              Select Multiple
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset" row>
            <legend className="col-form-label col-sm-2">Radio Buttons</legend>
            <Col sm={10}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Option one is this and
                  that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Option two can be
                  something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio2" disabled /> Option three is
                  disabled
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>
              Checkbox
            </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" /> Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={this.onSubmit.bind(this)}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
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

export default connect(
  null,
  mapDispatchToProps
)(Contact);
