import { useState } from "react";
import axios from "axios";

import BtnGet from "../BtnGet/BtnGet";

import { songsPath } from "../../data.js";

import "./ShowQuote.css";

const ShowQuote = ({ updateImg, setUpdateImg }) => {
  const uri = "https://www.tronalddump.io/";
  const randomQuote = "random/quote";
  const [Quote, setQuote] = useState("");

  const getRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    return songsPath[randomIndex];
  };

  const audio = new Audio();
  audio.volume = 0.03;

  const getRandomQuote = () => {
    setUpdateImg(!updateImg);
    const newSong = getRandomSong();
    audio.src = newSong;
    audio.pause();
    audio.play();
    axios
      .get(`${uri}${randomQuote}`)
      .then((response) => setQuote(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const dateConv = (date) => {
    const dateTemp = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return dateTemp.toLocaleDateString("en-EN", options);
  };

  return (
    <div className="showQuoteContainer">
      <figure className="showQuoteWrapText">
        {Quote && (
          <div>
            <blockquote cite={Quote._embedded.source.url}>
              <p>{Quote.value}</p>
            </blockquote>
            <figcaption>
              <br />
              -Donal Trump
              <br /> <cite>{dateConv(Quote.appeared_at)}</cite>
            </figcaption>
          </div>
        )}
      </figure>
      <BtnGet getRamdomQuote={getRandomQuote} />
    </div>
  );
};

export default ShowQuote;
