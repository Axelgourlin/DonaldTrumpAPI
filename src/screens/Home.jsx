import { useEffect, useState } from "react";
import CardImg from "../components/CardImg/CardImg";

import ShowQuote from "../components/ShowQuote/ShowQuote";

import { imagesPath } from "../data.js";

import "./Home.css";

const Home = () => {
  const [img, setImg] = useState("");
  const [updateImg, setUpdateImg] = useState(false);
  const getRandomImg = () => {
    const random = Math.floor(Math.random() * 9);
    setImg(imagesPath[random]);
  };

  useEffect(() => {
    getRandomImg();
  }, [updateImg]);

  return (
    <div className="homeContainer">
      <div className="home">
        <CardImg img={img} />
        <p>
          Welcome to the Donald Trump Quote Generator !<br />
          Click on the button to discover Donald Trump's worst quotes.
        </p>
        <ShowQuote updateImg={updateImg} setUpdateImg={setUpdateImg} />
      </div>
    </div>
  );
};

export default Home;
