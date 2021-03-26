import React, { useEffect, useState } from "react";
// import Pages from "../utils/content.json";
import Header from "../components/layout/Header/Header";
import BackgroundImage from "../components/marquee/BackgroundImage/BackgroundImage";

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
  }

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
        setData(data.pages[1])
        setBackgroundImage(data.pages[1].blocks[0].background);
        setHeadline(data.pages[1].blocks[0].headline);
        setSubhead(data.pages[1].blocks[0].subhead);
      });
  };

  // const image1 = data[0].blocks[0].background;


  return (
    <>
          <div
          className="Slide-One"
          style={{ 
          backgroundImage: `url(${backgroundImage})`}}
    >
      <Header />
    </div>
    </>
  );
}

export default Services;
