import React, { useEffect, useState } from "react";
// import Pages from "../utils/content.json";
import Header from "../components/layout/Header/Header";

function Services() {
  const [backgroundImage, setBackgroundImage] = useState();
  const [cta, setCta] = useState();
  const [headline, setHeadline] = useState();
  const [subhead, setSubhead] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    // if (window.location.pathname === "/services") {
    //     fetch("../utils/content.json")
    //     .then((res) => console.log(res.data.));
    //     }
    // }

    getData();

  }, []);

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
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  return (
    <>
      <div className="Slide-One">
        <Header />
      </div>
    </>
  );
}

export default Services;
