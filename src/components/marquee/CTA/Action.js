import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Action(props) {
  return (
    <Container className="Nemo-enim-ipsam-volu Bg">
      <Row>
        <Col md={9}>{props.children}</Col>
        <Col md={3}>
          <span className="LETS-TALK">LET'S TALK</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Action;
