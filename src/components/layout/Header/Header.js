import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function Header(){
    return(
        <Container>
            <Row>
                <Col
                 md={2}
                 xs={2}
                 >
                <Logo/>
                </Col>
                <Col
                md={{ span: 5, offset: 5 }}
                xs={5}
                >
                <Button
                variant="outline-light"
                className="Rectangle">
                    Contact Us
                </Button>
                </Col>
            </Row>
            <Row>
                <Col
                 md={4}
                 >
                <Menu/>
                </Col>
            </Row>
        </Container>
    )
}

export default Header