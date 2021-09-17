import getImg from "../../ImgTrump.js";

import "./CardImg.css";

const CardImg = () => {
  return (
    <div className="CardImg">
      <img alt="img of trump" src={getImg()} />
    </div>
  );
};

export default CardImg;
