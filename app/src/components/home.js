import React from "react";
import { Jumbotron, Container } from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="text-center padding-wrap">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Welcome to the kickstarter</h1>
            <p className="lead">
              you can simply use this basic setup to start your react/redux
              project.
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
