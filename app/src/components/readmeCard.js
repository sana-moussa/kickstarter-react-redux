import React from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";

class ReadmeCard extends React.Component {
  render() {
    return (
      <Card body>
        <CardTitle> {this.props.cardTitle}</CardTitle>
        <CardText>{this.props.cardText}</CardText>
        <Button
          className="btn btn-secondary"
          onClick={this.props.buttonClick()}
        >
          {this.props.buttonText}
        </Button>
      </Card>
    );
  }
}

export default ReadmeCard;
