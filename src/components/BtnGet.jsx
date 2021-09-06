import './BtnGet.css'

const BtnGet = ({ message, toggleClicked }) => {
  return (
    <button className="btnGet" onClick={toggleClicked}>{message}</button>
  );
}

export default BtnGet;