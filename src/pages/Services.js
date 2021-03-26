import React, { useEffect, useState } from "react";
// import Pages from "../utils/content.json";
import Header from "../components/layout/Header/Header";
import Container from "react-bootstrap/Container";
import Headline from "../components/marquee/Headline/Headline";
import Subhead from "../components/marquee/Subhead/Subhead";
import Action from "../components/marquee/CTA/Action";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Services() {
  const [backgroundImage, setBackgroundImage] = useState();
  const [cta, setCta] = useState();
  const [headline, setHeadline] = useState();
  const [subhead, setSubhead] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const setBackground = () => {
    if (window.location.pathname === "/services") {
      console.log(data);
    }
  };

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data.pages[1]);
        setData(data.pages[1]);
        setBackgroundImage(data.pages[1].blocks[0].background);
        setHeadline(data.pages[1].blocks[0].headline);
        setSubhead(data.pages[1].blocks[0].subhead);
        setCta(data.pages[1].blocks[0].cta);
      });
  };

  // const image1 = data[0].blocks[0].background;

  return (
    <>
      <Container
        fluid
        className="Slide-One"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Header />
        <Container>
          <Row>
            <Col md={5} xs={5}>
              <Headline>{headline}</Headline>
            </Col>
            <Col>
              <Subhead
              md={{ span: 6, offset: 6 }}
              xs={5}>
                {subhead}
              </Subhead>
            </Col>
          </Row>
          <Row>
            <Col>
            <Action>
              {cta}
            </Action>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Services;
