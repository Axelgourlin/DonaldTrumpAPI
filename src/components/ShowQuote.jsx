import { useEffect, useState } from "react";
import axios from 'axios'

import BtnGet from './BtnGet';

const ShowQuote = () => {

  const uri = 'https://www.tronalddump.io/';
  const randomQuote = 'random/quote';

  const [getClicked, setGetClicked] = useState(false)
  const [Quote, setQuote] = useState(null)

  useEffect(() => {

    const getRamdomQuote = () => {
      axios.get(`${uri}${randomQuote}`)
        .then((response) => console.log(response) || setQuote(response))
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }
    getRamdomQuote()

  }, [getClicked])

  const toggleClicked = () => {
    setGetClicked(!getClicked)
  }

  return (
    <div className="showQuote">
      <BtnGet message={'Get a Quote'} onClick={toggleClicked}/>
    </div>
  )
}

export default ShowQuote;