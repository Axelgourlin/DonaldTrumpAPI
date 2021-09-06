import "./BtnGet.css";

const BtnGet = ({ getRamdomQuote }) => {
  return (
    <button className="btnGet" onClick={getRamdomQuote}>
      Get a Quote !
    </button>
  );
};

export default BtnGet;
