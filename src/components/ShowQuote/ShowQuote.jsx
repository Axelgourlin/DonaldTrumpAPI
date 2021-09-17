import { useEffect, useState } from "react";
import axios from "axios";

import BtnGet from "../BtnGet/BtnGet";

import "./ShowQuote.css";

const ShowQuote = () => {
  const uri = "https://www.tronalddump.io/";
  const randomQuote = "random/quote";
  const uriTranslate = "http://frengly.com/frengly/data/translateREST";
  const [Quote, setQuote] = useState("");
  const [QuoteFr, setQuoteFr] = useState("");

  const getRamdomQuote = () => {
    axios
      .get(`${uri}${randomQuote}`)
      .then((response) => console.log(response.data) || setQuote(response.data))
      .then(
        axios
          .post(uriTranslate, {
            email: "axel.gourlin09@gmail.com",
            password: "Jg47Jr4!zFM$yB6coGr!",
            text: Quote.value,
            src: "en",
            dest: "fr",
          })
          .then((response) => console.log(response) || setQuoteFr(response))
      )
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
    return dateTemp.toLocaleDateString("fr-FR", options);
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
      <BtnGet getRamdomQuote={getRamdomQuote} />
    </div>
  );
};

export default ShowQuote;
