import CardImg from "../components/CardImg/CardImg";

import ShowQuote from "../components/ShowQuote/ShowQuote";

import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="home">
        <CardImg />
        <p>
          Bienvenus sur le Générateur de Citation Donald Trump !<br />
          Clique pour découvrir les pires citations de Donald Trump.
        </p>
        <ShowQuote />
      </div>
    </div>
  );
};

export default Home;
